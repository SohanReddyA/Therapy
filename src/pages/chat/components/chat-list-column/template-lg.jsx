/* eslint-disable react/prop-types */
import React from 'react';
import ChatCard from '../chat-card/template';

// eslint-disable-next-line react/prop-types
const ChatListLg = ({
  query,
  userList,
  allChats,
  reqUser,
  handleClickOnChatCard,
  handleClickOnAllChat,
  setOpenUserModal,
}) => {
  return (
    <div className=" select-none bg-white overflow-auto h-[75vh] px-3 relative">
      {query &&
        userList.length > 0 &&
        userList.map((listItem, index) => (
          <div
            onClick={() => {
              handleClickOnChatCard(listItem.id);
            }}
            key={index}>
            {
              <ChatCard
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
            <ChatCard
              curUser={
                chatItem.latestMessage
                  ? reqUser.id === chatItem.latestMessage.sender.id
                  : null
              }
              username={
                reqUser.id !== chatItem.user.id
                  ? chatItem.user.username
                  : chatItem.therapist.username
              }
              content={
                chatItem.latestMessage ? chatItem.latestMessage.content : null
              }
              date={chatItem.latestMessage ? chatItem.latestMessage.date : null}
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
        className=" select-none  absolute bottom-[20px] w-[-webkit-fill-available] box-border flex items-center justify-center"
        onClick={() => setOpenUserModal(true)}>
        <p className=" select-none bg-[#E6E1EF] p-2 rounded-[16px] font-semibold text-[#5627B0] cursor-pointer">
          Edit Your Preferred Timings
        </p>
      </div>
    </div>
  );
};

export default ChatListLg;
