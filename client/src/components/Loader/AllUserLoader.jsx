import React from 'react';

const AllUserLoader = () => {
  return (
    <div className="flex w-full flex-col gap-4  my-11">
      <div className="w-full flex justify-center items-center gap-4 ">
        <div className="w-[90%]  flex gap-x-1 ">
          <div className="p-6 skeleton  shrink-0 rounded-full "></div>
          <div className="w-[80%] flex flex-col gap-4">
            <div className="skeleton h-4 w-[80%]"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUserLoader;
