import MessageLoader from '../../Loader/MessageLoader';
import SingleMessage from './SingleMessage';

const Messages = () => {
  return (
    <>
      {/* <div className="" style={{ minHeight: "calc(91vh - 8vh)" }}> */}
      <div
        className="pt-3 bg-gray-200"
        style={{ minHeight: 'calc(89vh - 10vh)' }}
        // style={{ minHeight: 'calc(91vh - 10vh)' }}
      >
        {false ? (
          <>
            <MessageLoader />
          </>
        ) : (
          <>
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
          </>
        )}
      </div>
    </>
  );
};

export default Messages;
