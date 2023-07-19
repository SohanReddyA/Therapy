import React, { useEffect, useRef } from "react";
import { HiCheck } from "react-icons/hi";
const MessageCardXs = ({
  isReqUserMessage,
  content,
  time,
  index,
  length,
  date,
  prevDate
}) => {
  const myRef = useRef(null);
  useEffect(() => {
    if (index == length - 1) {
      myRef.current.scrollIntoView();
    }
  }, []);
  return (
    <div className="flex flex-col items-center mt-auto">
      {date!=prevDate && (
        <div className="bg-[#5627B0] rounded-2xl text-white text-xs p-2 my-12 ">
          <p>{date}</p>
        </div>
      )}
      <div
        ref={length == index + 1 ? myRef : null}
        className={`p-2 rounded-lg max-w-[50%] ${
          isReqUserMessage ? "bg-[#EEE9F7] self-end" : "bg-[#DDD4EF] self-start"
        } ${
          index == 0 ? "mt-auto" : ""
        } flex flex-col items-end justify-between break-words`}
      >
        <p className="w-full text-xs">{content}</p>
        <div
          className={`${
            !isReqUserMessage ? "text-[#5A585C]" : "text-black"
          } flex items-center justify-end space-x-1`}
        >
          <p className="text-xs">{time}</p>
          <HiCheck className="text-xs font-thin" />
        </div>
      </div>
    </div>
  );
};

export default MessageCardXs;
