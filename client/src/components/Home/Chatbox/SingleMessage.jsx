import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import smoothscroll from 'smoothscroll-polyfill';
const SingleMessage = ({ data }) => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  const authUser = useSelector((state) => state.user.authUser);
  const scroll = useRef();
  const createdAt = new Date(data.createdAt);
  const formatedTime = createdAt.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
    // setTimeout(() => {
    //   if (scroll.current) {
    //     window.scrollTo({
    //       top: scroll.current.offsetTop,
    //       behavior: 'smooth', // Smooth scrolling
    //     });
    //   }
    // }, 100); // Delay to allow the DOM to fully render
  }, []);

  return (
    <div ref={scroll}>
      <div
        className={`chat ${authUser?._id === data.senderId ? 'chat-end' : 'chat-start'}`}
      >
        <div
          className={`chat-bubble ${authUser?._id === data.senderId ? 'bg-blue-500 text-white' : darkMode ? 'bg-slate-800 text-white' : 'bg-white text-black'} shadow-md `}
        >
          {/* To be on the Council at your age. */}
          {data?.message}
          {/* {message?.message} */}
        </div>
        <div className="chat-footer">
          {/* 08:50 PM */}
          {formatedTime}
        </div>
      </div>
      {/* <div className={`chat chat-end`}>
        <div className="chat-bubble bg-blue-500 text-white shadow-md">
          It's never happened before.
         
        </div>
        <div className="chat-footer">08:50 PM</div>
      </div> */}
    </div>
  );
};

export default SingleMessage;
