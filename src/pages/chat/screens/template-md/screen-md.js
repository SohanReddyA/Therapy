import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';

import ChatLoader from '@/src/pages/chat/components/loader/template';
import UserTimingsPopup from '@/src/pages/chat/components/timings-popup/user/template';
import OtherTimingsPopup from '@/src/pages/chat/components/timings-popup/other/template';
import EmojiPickerInput from '@/src/pages/chat/components/emoji-picker/template';
import MessageCardMd from '../../components/message-card/template-md';
import ChatListMd from '../../components/chat-list-column/template-md';
import ChatController from '../../template.controller';

const ChatMd = () => {
  const {
    router,
    query,
    setQuery,
    currentChat,
    content,
    setContent,
    paymentDone,
    setPaymentDone,
    userList,
    reqUser,
    allChats,
    messages,
    numOfLinesCompany,
    setNOL,
    loaderValue,
    openUserModal,
    setOpenUserModal,
    userTimes,
    openOtherModal,
    setOpenOtherModal,
    otherTimes,
    showPicker,
    setShowPicker,
    lastSeen,
    inputRef,
    handleClickOnChatCard,
    handleClickonAllChat,
    handleAddPreferredTiming,
    handleCreateMessage,
    handleSearch,
    sendingMessage,
    myRef,
  } = ChatController();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="select-none grid grid-cols-3 items-center relative bg-white justify-center m-auto">
        {loaderValue < 100 ? (
          <div className="col-span-4">
            <ChatLoader value={loaderValue} />
          </div>
        ) : (
          <>
            {openUserModal && (
              <UserTimingsPopup
                handleClose={() => setOpenUserModal(false)}
                time={userTimes}
                setTime={handleAddPreferredTiming}
              />
            )}
            {openOtherModal && (
              <OtherTimingsPopup
                handleClose={() => setOpenOtherModal(false)}
                time={otherTimes}
              />
            )}
            <div className=" col-span-1 select-none left border-[#D5C9EB] border-r-2 flex-col items-center justify-center">
              {/*Title of the page */}
              <div className=" select-none h-[10vh] flex justify-between items-center">
                <h1
                  className=" select-none font-bold h-full text-[#5627B0] px-3 py-10 mx-7 text-2xl cursor-pointer"
                  onClick={() => {
                    router.push('/');
                  }}>
                  Friennly
                </h1>
                {/* <div className="mt-5 px-5">
                <img
                  src={reqUser.profileImage}
                  className="h-14 w-14 rounded-full border-2 border-[#434143]"
                  alt=""
                />
              </div> */}
              </div>
              {/* Chat Message Section */}
              <div className=" select-none h-[90vh]">
                {/* Input */}
                <div className=" select-none relative flex justify-center items-center bg-white py-4 px-3">
                  <input
                    className=" select-none border-none outline-none bg-slate-200 rounded-md w-[93%] text-sm pl-9 py-2"
                    type="text"
                    placeholder="Search or start new chat"
                    onChange={(e) => {
                      setQuery(e.target.value);
                      handleSearch(e.target.value);
                    }}
                    value={query}
                  />
                  <AiOutlineSearch className=" select-none left-5 top-7 absolute" />
                  <div>
                    <BsFilter className=" select-none ml-4 text-3xl" />
                  </div>
                </div>

                {/* Chat List */}
                <ChatListMd
                  query={query}
                  userList={userList}
                  allChats={allChats}
                  reqUser={reqUser}
                  handleClickOnAllChat={handleClickonAllChat}
                  handleClickOnChatCard={handleClickOnChatCard}
                  setOpenUserModal={setOpenUserModal}
                />
              </div>
            </div>

            <div className=" col-span-2 select-none right flex-col relative justify-between w-full h-full">
              {/* Default start page */}
              {!currentChat && (
                <div className=" select-none flex flex-col items-center text-center max-width-[70%] m-auto h-full justify-center w-auto">
                  <img
                    className=" select-none w-1/2 h-1/2"
                    src="/images/chat-default.svg"
                    alt=""
                  />
                  <p className=" select-none my-9 text-xl font-medium text-[#5627B0]">
                    {reqUser.userType === 'USER'
                      ? 'Chat with your favorite therapist now!'
                      : 'Chat with your patients here!'}
                  </p>
                </div>
              )}
              {/* Message Part */}
              {currentChat && (
                <div className=" select-none flex flex-col gap-1 relative ">
                  {/* Header */}
                  <div className=" select-none h-[10vh] border-b-2 border-[#D5C9EB] flex items-center justify-between">
                    <div className=" select-none flex items-center p-3 space-x-4">
                      <img
                        src={
                          reqUser.id !== currentChat.user.id
                            ? currentChat.user.profileImage
                            : currentChat.therapist.profileImage
                        }
                        className=" select-none w-14 h-14 rounded-full border-2 border-[#434143]"
                        alt=""
                      />
                      <div className=" select-none flex flex-col items-start justify-center">
                        <div className="flex gap-1 items-center justify-center">
                          <span className=" select-none font-semibold text-lg">
                            {reqUser.id !== currentChat.user.id
                              ? currentChat.user.username
                              : currentChat.therapist.username}
                          </span>
                          <img
                            style={{ display: 'inline' }}
                            src="/images/info.png"
                            width={'30px'}
                            alt="Info"
                          />
                        </div>
                        <p className=" select-none text-[#5F5F5F] text-sm">
                          {lastSeen}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div
                        className=" select-none p-3 rounded-3xl mx-10 bg-[#EEE9F7] cursor-pointer"
                        onClick={() => setOpenOtherModal(true)}>
                        <p className=" select-none text-[#5627B0] font-semibold">
                          Preferred Timings
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Message Section */}
                  <div className=" select-none px-10 h-[80vh] ">
                    <div className=" select-none space-y-2 py-2 flex flex-col overflow-auto h-full">
                      {messages.length > 0 &&
                        messages.map((item, i) => (
                          <MessageCardMd
                            key={i}
                            index={i}
                            length={messages.length}
                            isReqUserMessage={reqUser.id === item.sender.id}
                            content={item.content}
                            time={item.time}
                            prevDate={
                              messages[i - 1] ? messages[i - 1].date : null
                            }
                            date={item.date}
                          />
                        ))}
                      {sendingMessage && (
                        <div
                          className="flex flex-col items-center mt-auto"
                          ref={myRef}>
                          <div
                            className={`p-2 rounded-lg max-w-[50%] bg-[#EEE9F7] self-end  flex flex-col items-end justify-between break-words`}>
                            <p className="w-full text-md">{sendingMessage}</p>
                            <div
                              className={`text-[#5A585C] flex items-center justify-end space-x-1`}>
                              <p className="text-xs">Sending...</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Footer part */}
                  {paymentDone && (
                    <div className=" select-none text-lg w-full bg-white flex justify-center items-center">
                      <div className=" select-none flex items-center px-5 relative bg-[#F8F8F9] w-[70%]">
                        <input
                          type="text"
                          placeholder="Message"
                          multiline
                          numberOfLines={numOfLinesCompany}
                          onContentSizeChange={(e) => {
                            setNOL(e.nativeEvent.contentSize.height / 18);
                          }}
                          ref={inputRef}
                          className=" select-none py-2 pr-5 w-[90%] outline-none border-none bg-[#F8F8F9] rounded-lg placeholder:text-[#5D5D5D]"
                          onChange={(e) => {
                            setContent(e.target.value);
                          }}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleCreateMessage();
                              setContent('');
                            }
                          }}
                          value={content}
                        />
                        <div className=" select-none flex items-center justify-center space-x-4 px-4 right-[3%] text-[#5D5D5D]">
                          <EmojiPickerInput
                            handleChange={(e) => {
                              const start = inputRef.current.selectionStart;
                              const end = inputRef.current.selectionEnd;
                              const newValue =
                                content.substring(0, start) +
                                e +
                                content.substring(end);
                              setContent(newValue);
                            }}
                            showPicker={showPicker}
                            setShowPicker={setShowPicker}
                          />
                          <IoMdSend
                            className=" select-none text-[#5627B0] cursor-pointer"
                            onClick={() => {
                              handleCreateMessage(reqUser.id);
                              setContent('');
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {!paymentDone && (
                    <div className=" select-none text-lg w-full items-center justify-center flex">
                      <span className=" select-none bg-[#EEE9F7] font-semibold flex justify-center space-x-1 rounded-lg items-center px-5 py-3 w-[80%]">
                        <p>Looks like you&apos;ve run out of credits!</p>
                        <p
                          className=" select-none text-[#5627B0] underline cursor-pointer"
                          onClick={() => {
                            setPaymentDone(true);
                          }}>
                          Renew here
                        </p>
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatMd;
