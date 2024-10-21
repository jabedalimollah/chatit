import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import notificationSound from '../assets/notification_sound.wav';
import { setMessage } from '../Redux/features/message/messageSlice';
import { useSocketContext } from './SocketContext';

const useGetSocketMessage = () => {
  const messages = useSelector((state) => state.message.messages);
  const { socket } = useSocketContext();
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on('newMessage', (newMessage) => {
      const notification = new Audio(notificationSound);
      notification.play();
      dispatch(setMessage([...messages, newMessage]));
      //   dispatch(sendMessages([...messages, newMessage]));
    });
    return () => {
      socket.off('newMessage');
    };
  }, [socket, messages]);
  //   return <div></div>;
};

// export default useGetSocketMessage;
export { useGetSocketMessage };
