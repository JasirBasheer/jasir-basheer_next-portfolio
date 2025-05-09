import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: any,
  res: any
) {
  if (!res.socket.server.io) {
    console.log("Initializing Socket.IO server...");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      socket.on("cursorMove", async (data) => {
        const { userId, x, y } = data;

        // Save cursor position to MongoDB
        await prisma.cursor.upsert({
          where: { userId },
          update: { x, y },
          create: { userId, x, y },
        });

        // Broadcast cursor position to all users
        socket.broadcast.emit("cursorUpdate", { userId, x, y });
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        socket.broadcast.emit("userDisconnected", socket.id);
      });
    });
  }
  res.end();
}