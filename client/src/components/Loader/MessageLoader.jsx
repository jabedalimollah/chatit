import React from 'react';

const MessageLoader = () => {
  return (
    <div className="w-full flex justify-center gap-x-2 mt-12">
      <span className="loading loading-spinner loading-md"></span>
      <p>Message Loading...</p>
    </div>
  );
};

export default MessageLoader;
