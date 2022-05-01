import { Server } from "socket.io";

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  if (!onlineUsers.some((user) => user.username === username))
    onlineUsers.push({ username, socketId });
};

const deleteUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};

const socketIoHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server, {
      path: "/api/socketio",
    });

    io.on("connection", (socket) => {
      socket.on("newUser", (username) => {
        addNewUser(username, socket.id);
      });

      socket.on("sendNotification", ({ senderName, receiverName, type }) => {
        const receiver = getUser(receiverName);
        io.to(receiver.socketId).emit("getNotification", {
          receiverName,
          senderName,
          type,
        });
      });

      socket.on("disconnect", () => {
        deleteUser(socket.id);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
};

export default socketIoHandler;
