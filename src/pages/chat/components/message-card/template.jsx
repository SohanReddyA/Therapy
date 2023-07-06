import React from "react";
import { HiCheck } from "react-icons/hi";
const MessageCard = ({ isReqUserMessage, content, time }) => {
  return (
    <div
      className={`p-2 rounded-lg max-w-[50%] ${
        isReqUserMessage ? "bg-[#DDD4EF] self-start" : "bg-[#EEE9F7] self-end"
      } flex flex-col items-end justify-between`}
    >
      <p>{content}</p>
      <div
        className={`${
          !isReqUserMessage ? "text-[#5A585C]" : "text-black"
        } flex items-center justify-end space-x-1`}
      >
        <p className="text-sm">{time}</p>
        <HiCheck className="text-sm font-thin" />
      </div>
    </div>
  );
};

export default MessageCard;
