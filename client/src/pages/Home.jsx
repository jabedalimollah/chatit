import React from 'react';
import Sidebar from '../components/Home/Sidebar/Sidebar';
import Chatbox from '../components/Home/Chatbox/Chatbox';
import { useSelector } from 'react-redux';

const Home = () => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  return (
    <div
      className={`h-screen flex ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-black'}`}
      data-theme={darkMode ? 'dark' : 'light'}
    >
      <Sidebar />
      <Chatbox />
    </div>
  );
};

export default Home;
