import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import smoothscroll from 'smoothscroll-polyfill';
const SingleMessage = () => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  const scroll = useRef();

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
      <div className={`chat chat-start`}>
        <div
          className={`chat-bubble ${darkMode ? 'bg-slate-800 text-white' : 'bg-white text-black'}  shadow-md `}
        >
          To be on the Council at your age.
          {/* {message?.message} */}
        </div>
        <div className="chat-footer">08:50 PM</div>
      </div>
      <div className={`chat chat-end`}>
        <div className="chat-bubble bg-blue-500 text-white shadow-md">
          It's never happened before.
          {/* {message?.message} */}
        </div>
        <div className="chat-footer">08:50 PM</div>
      </div>
      {/* <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-error">
          It's never happened before.
        </div>
      </div> */}
    </div>
  );
};

export default SingleMessage;
