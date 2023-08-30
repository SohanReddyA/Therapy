/* eslint-disable react/prop-types */
import ChatCardXs from '../chat-card/template-xs';
import React from 'react';
const ChatListXs = ({
  query,
  userList,
  allChats,
  reqUser,
  handleClickOnChatCard,
  handleClickOnAllChat,
  setOpenUserModal,
}) => {
  return (
    <div className=" select-none bg-white overflow-auto h-[90%] px-3 relative">
      {query &&
        userList.length > 0 &&
        userList.map((listItem, index) => (
          <div
            onClick={() => {
              handleClickOnChatCard(listItem.id);
            }}
            key={index}>
            {
              <ChatCardXs
                username={listItem.username}
                profileImage={listItem.profileImage}
              />
            }
          </div>
        ))}

      {allChats.length > 0 &&
        !query &&
        allChats.map((chatItem, index) => (
          <div
            onClick={() => {
              handleClickOnAllChat(index);
            }}
            key={index}>
            <ChatCardXs
              curUser={
                chatItem.latestMessage
                  ? reqUser.id === chatItem.latestMessage.sender.id
                  : null
              }
              date={chatItem.latestMessage ? chatItem.latestMessage.date : null}
              username={
                reqUser.id !== chatItem.user.id
                  ? chatItem.user.username
                  : chatItem.therapist.username
              }
              content={
                chatItem.latestMessage ? chatItem.latestMessage.content : null
              }
              time={chatItem.latestMessage ? chatItem.latestMessage.time : null}
              profileImage={
                reqUser.id === chatItem.user.id
                  ? chatItem.therapist.profileImage
                  : chatItem.user.profileImage
              }
            />
          </div>
        ))}
      <div
        className=" select-none h-[5%] absolute bottom-[10px] w-[-webkit-fill-available] box-border flex items-center justify-center"
        onClick={() => setOpenUserModal(true)}>
        <p className=" select-none bg-[#E6E1EF] font-semibold text-[#5627B0] text-sm p-2 rounded-[16px] cursor-pointer">
          Edit Your Preferred Timings
        </p>
      </div>
    </div>
  );
};

export default ChatListXs;
