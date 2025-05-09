'use client';

import { useState, useEffect } from 'react';
import { getSocket, disconnectSocket } from '@/utils/socket';
import { v4 as uuidv4 } from 'uuid';


interface CursorData {
    x: number;
    y: number;
    userId: string;
}

export const useCursor = () => {
  const [mousePosition, setMousePosition] = useState<CursorData>({ x: 0, y: 0, userId: '' });
  const [otherCursors, setOtherCursors] = useState<CursorData[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const userId = uuidv4();

  useEffect(() => {
    const newSocket = getSocket();
    setSocket(newSocket);

    if (newSocket) {
      setMousePosition((prev) => ({...prev, userId: userId}));

      newSocket.on('userCursorMoved', (data: CursorData) => {
        setOtherCursors((prevCursors) => {
          const updatedCursors = prevCursors.filter((c) => c.userId !== data.userId);
          return [...updatedCursors, data];
        });
      });

      return () => {
        newSocket?.off('userCursorMoved');
      };
    }
  }, []);

  useEffect(() => {
    const socket = getSocket();

    if (socket) {
      const handleMouseMove = (event: MouseEvent) => {
        const position = { x: event.clientX, y: event.clientY, userId: userId };
        setMousePosition(position);
        socket.emit('cursorMove', position);
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return { mousePosition, otherCursors };
};
