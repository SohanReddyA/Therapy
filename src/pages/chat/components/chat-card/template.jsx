import React from 'react';
import { HiCheck } from 'react-icons/hi';

const ChatCard = ({ username, content, time, curUser }) => {
  // console.log(curUser, 'USerCHoasj');
  return (
    <div className="flex items-center justify-center py-2 group cursor-pointer">
      {/* Profile Picture */}
      <div className="w-[20%]">
        <img
          className="h-14 w-14 rounded-full"
          src="/images/testLogo2.svg"
          alt=""
        />
      </div>
      {/* Chat items */}
      <div className="pl-5 w-[80%]">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{username}</p>
          <p className="text-sm text-[#5F5F5F]">{time}</p>
        </div>

        {content && (
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {curUser && <HiCheck className="text-sm font-thin" />}
              <p className="text-[#5F5F5F]">{content}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-xs p-1 px-2 text-white bg-[#5627B0] rounded-full">
                5
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatCard;
