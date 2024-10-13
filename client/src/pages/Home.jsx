import React from "react";
import Sidebar from "../components/Home/Sidebar/Sidebar";
import Chatbox from "../components/Home/Chatbox/Chatbox";

const Home = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Chatbox />
    </div>
  );
};

export default Home;
