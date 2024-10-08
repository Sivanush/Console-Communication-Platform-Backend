import { Server } from 'socket.io';

export const broadcastUserStatus = (io: Server, userId: string, status: string) => {
    io.emit('userStatusUpdate', { userId, status });
};

export const broadcastOnlineUsers = (io: Server, onlineUsers: Map<string, {userId:string,socketId:string}>) => {
    const onlineUserIds = Array.from(onlineUsers.keys());
    io.emit('online-users', onlineUserIds);
};
