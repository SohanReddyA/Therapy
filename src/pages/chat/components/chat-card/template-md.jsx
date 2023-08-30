/* eslint-disable react/prop-types */
import React from 'react';
import { HiCheck } from 'react-icons/hi';
import dateDifference from '../../template.util';

const ChatCardMd = ({
  username,
  content,
  time,
  curUser,
  profileImage,
  date,
}) => {
  // console.log(curUser, 'USerCHoasj');
  const daysDifference = dateDifference(date);
  return (
    <div className="flex items-center justify-center py-2 group cursor-pointer">
      {/* Profile Picture */}
      <div className="w-[20%]">
        <img
          className="h-3/4 w-3/4 rounded-full border-2 border-[#434143]"
          src={profileImage}
          alt=""
        />
      </div>
      {/* Chat items */}
      <div className="pl-3 w-[80%]">
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold">{username}</p>
          <p className="text-xs text-[#5F5F5F]">
            {daysDifference == 0
              ? time
              : daysDifference == 1
              ? 'yesterday'
              : date}
          </p>
        </div>

        {content && (
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {curUser && <HiCheck className="text-sm font-thin" />}
              <p className="text-[#5F5F5F] text-xs">
                {content.length > 10
                  ? content.substring(0, 10) + '...'
                  : content}
              </p>
            </div>
            {/* <div className="flex space-x-2 items-center">
              <p className="text-xs p-1 px-2 text-white bg-[#5627B0] rounded-full">
                5
              </p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatCardMd;
