
import { Server } from 'socket.io'
import prisma from '../../../utils/connect'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    res.end()
    return
  }

  const io = new Server(res.socket.server, {
    path: '/api/socket',
    addTrailingSlash: false,
  })
  
  res.socket.server.io = io

  io.on('connection', (socket:any) => {
    const userId = socket.id

    socket.on('userJoined', async (username: string) => {
      try {
        await prisma.cursor.create({
          data: {
            userId,
            username,
            x: 0,
            y: 0,
          },
        })
        
        io.emit('userJoined', { userId, username })
      } catch (error) {
        console.error('Error in userJoined:', error)
      }
    })

    socket.on('cursorMove', async (data: { x: number; y: number }) => {
      try {
        await prisma.cursor.update({
          where: { userId },
          data: {
            x: data.x,
            y: data.y,
            lastActive: new Date(),
          },
        })
        
        socket.broadcast.emit('cursorMove', {
          userId,
          x: data.x,
          y: data.y,
        })
      } catch (error) {
        console.error('Error in cursorMove:', error)
      }
    })

    socket.on('disconnect', async () => {
      try {
        await prisma.cursor.delete({
          where: { userId },
        })
        io.emit('userLeft', userId)
      } catch (error) {
        console.error('Error in disconnect:', error)
      }
    })
  })

  // Clean up inactive cursors every minute
  setInterval(async () => {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000)
    try {
      await prisma.cursor.deleteMany({
        where: {
          lastActive: {
            lt: fiveMinutesAgo,
          },
        },
      })
    } catch (error) {
      console.error('Error cleaning up cursors:', error)
    }
  }, 60000)

  res.end()
}

export default SocketHandler
