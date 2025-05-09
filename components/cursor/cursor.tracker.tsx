import { useEffect, useState } from "react";
import socket from "../../utils/socket";

const CursorTracker = () => {
  const [cursors, setCursors] = useState<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    socket.on("cursorUpdate", (data) => {
      setCursors((prev) => ({ ...prev, [data.userId]: { x: data.x, y: data.y } }));
    });

    socket.on("userDisconnected", (userId) => {
      setCursors((prev) => {
        const newCursors = { ...prev };
        delete newCursors[userId];
        return newCursors;
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      socket.emit("cursorMove", { x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      socket.off("cursorUpdate");
      socket.off("userDisconnected");
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {Object.entries(cursors).map(([userId, cursor]) => (
        <div
          key={userId}
          className="absolute bg-blue-500 w-4 h-4 rounded-full"
          style={{ left: cursor.x, top: cursor.y }}
        />
      ))}
    </div>
  );
};

export default CursorTracker;