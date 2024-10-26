import React from 'react';

const Navbar = () => {
  return (
    // <header className="w-full bg-blue-200 px-3 py-2 ">
    <header className="w-full bg-blue-200 px-3 py-2 fixed top-0 left-0 z-10">
      <div className="h-5">
        <img src="/images/chatit.png" alt="logo" className="h-full" />
      </div>
      <div></div>
    </header>
  );
};

export default Navbar;
