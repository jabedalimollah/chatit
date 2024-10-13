import { useSelector } from 'react-redux';
import MessageLoader from '../../Loader/MessageLoader';
import SingleMessage from './SingleMessage';

const Messages = () => {
  const darkMode = useSelector((state) => state.darkTheme.value);
  return (
    <>
      {/* <div className="" style={{ minHeight: "calc(91vh - 8vh)" }}> */}
      <div
        className={`pt-3 ${darkMode ? 'bg-slate-900' : 'bg-gray-200'} `}
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
