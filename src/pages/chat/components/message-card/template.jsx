import React, { useEffect, useRef } from 'react';
import { HiCheck } from 'react-icons/hi';
const MessageCard = ({ isReqUserMessage, content, time, index, length }) => {
  const myRef = useRef(null);
  useEffect(() => {
    if (index == length - 1) {
      myRef.current.scrollIntoView();
    }
  }, []);
  return (
    <div
      ref={length == index + 1 ? myRef : null}
      className={`p-2 rounded-lg max-w-[50%] ${
        isReqUserMessage ? 'bg-[#EEE9F7] self-end' : 'bg-[#DDD4EF] self-start'
      } ${
        index == 0 ? 'mt-auto' : ''
      } flex flex-col items-end justify-between break-words`}>
      <p className="w-full">{content}</p>
      <div
        className={`${
          !isReqUserMessage ? 'text-[#5A585C]' : 'text-black'
        } flex items-center justify-end space-x-1`}>
        <p className="text-sm">{time}</p>
        <HiCheck className="text-sm font-thin" />
      </div>
    </div>
  );
};

export default MessageCard;
