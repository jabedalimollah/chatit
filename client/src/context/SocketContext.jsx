import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
const socketContext = createContext();
const useSocketContext = () => {
  return useContext(socketContext);
};
const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const authUser = useSelector((state) => state.user.authUser);

  useEffect(() => {
    if (authUser) {
      // const socket = io('http://localhost:8000', {
      const socket = io(`${import.meta.env.VITE_APP_URI}`, {
        query: {
          userId: authUser?._id,
        },
      });
      setSocket(socket);
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <socketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </socketContext.Provider>
  );
};

export { SocketProvider, useSocketContext };
