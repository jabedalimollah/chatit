const SingleMessage = () => {
  return (
    <div>
      <div className={`chat chat-start`}>
        <div className="chat-bubble bg-white text-black shadow-md ">
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
