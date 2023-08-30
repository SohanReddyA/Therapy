import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import ChatLoader from '@/src/pages/chat/components/loader/template';
import OtherTimingsPopupXs from '@/src/pages/chat/components/timings-popup/other/template-xs';
import UserTimingsPopupXs from '../../components/timings-popup/user/template-xs';
import MessageCardXs from '../../components/message-card/template-xs';
import ChatListXs from '../../components/chat-list-column/template-xs';
import ChatController from '../../template.controller';

const ChatXs = () => {
  const [windowHeight, setWindowHeight] = useState('');

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

  const handleBackArrow = () => {
    setCurrentChat(null);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  if (!windowHeight) return null;
  return (
    <div className={'select-none'} style={{ height: windowHeight + 'px' }}>
      <div className=" select-none grid grid-cols-1 items-center relative bg-white justify-center h-full">
        {loaderValue < 100 ? (
          <div className="col-span-1 h-full">
            <ChatLoader value={loaderValue} />
          </div>
        ) : (
          <>
            {openUserModal && (
              <UserTimingsPopupXs
                handleClose={() => setOpenUserModal(false)}
                time={userTimes}
                setTime={handleAddPreferredTiming}
              />
            )}
            {openOtherModal && (
              <OtherTimingsPopupXs
                handleClose={() => setOpenOtherModal(false)}
                time={otherTimes}
              />
            )}
            {!currentChat && (
              <div className=" col-span-1 select-none left flex-col items-center justify-center h-full">
                {/*Title of the page */}
                <div className=" select-none h-[10%] flex justify-between items-center">
                  <h1
                    className=" select-none font-bold text-[#5627B0] px-3 py-2 mx-5 text-2xl cursor-pointer"
                    onClick={() => {
                      router.push('/');
                    }}>
                    Friennly
                  </h1>
                  <div className="px-5">
                    <img
                      src={reqUser.profileImage}
                      className="h-10 w-10 rounded-full border-2 border-[#434143]"
                      alt=""
                    />
                  </div>
                </div>
                {/* Chat Message Section */}
                <div className=" select-none h-[90%]">
                  {/* Input */}
                  <div className=" select-none relative flex justify-center items-center h-[10%] bg-white py-4 px-3">
                    <input
                      className=" select-none border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2 text-sm"
                      type="text"
                      placeholder="Search or start new chat"
                      onChange={(e) => {
                        setQuery(e.target.value);
                        handleSearch(e.target.value);
                      }}
                      value={query}
                    />
                    <AiOutlineSearch className=" select-none left-7 absolute text-sm" />
                    <div>
                      <BsFilter className=" select-none ml-4 text-2xl" />
                    </div>
                  </div>

                  {/* Chat List */}
                  <ChatListXs
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
            )}

            {/* Default start page */}
            {/* Message Part */}
            {currentChat && (
              <div className=" col-span-1 select-none right flex-col relative justify-between w-full h-full overflow-hidden">
                <div className=" select-none flex flex-col gap-1 relative h-full">
                  {/* Header */}
                  <div className=" select-none h-max border-b-2 border-[#D5C9EB] grid grid-cols-6 justify-between items-center">
                    <div className=" select-none col-span-4 flex items-center p-3 space-x-4 justify-start">
                      <div
                        className="select-none col-span-1 flex items-center justify-center space-x-2"
                        onClick={handleBackArrow}>
                        <AiOutlineArrowLeft className="text-xl text-[#5627B0]" />
                        <img
                          src={
                            reqUser.id !== currentChat.user.id
                              ? currentChat.user.profileImage
                              : currentChat.therapist.profileImage
                          }
                          className=" select-none w-8 h-8 rounded-full border-2 border-[#434143]"
                          alt=""
                        />
                      </div>
                      <div className=" select-none col-span-3 flex flex-col items-start justify-center">
                        <div className="flex gap-1 items-center justify-center">
                          <span className=" select-none font-semibold text-sm">
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
                        <p className=" select-none text-[#5F5F5F] text-xs">
                          {lastSeen}
                        </p>
                      </div>
                    </div>
                    <div
                      className=" select-none col-span-2 h-min mt-2 mr-2 p-3 rounded-3xl bg-[#EEE9F7] cursor-pointer flex items-center justify-center "
                      onClick={() => setOpenOtherModal(true)}>
                      <p className="select-none text-[#5627B0] text-xs text-center font-semibold">
                        Preferred Timings
                      </p>
                    </div>
                  </div>
                  {/* Message Section */}
                  <div className=" select-none px-5 h-[80%] ">
                    <div className=" select-none space-y-2 py-2 flex flex-col overflow-auto h-full">
                      {messages.length > 0 &&
                        messages.map((item, i) => (
                          <MessageCardXs
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
                            className={`p-2 rounded-lg max-w-[50%]
                              bg-[#EEE9F7] self-end flex flex-col items-end justify-between break-words`}>
                            <p className="w-full text-xs">{sendingMessage}</p>
                            <div
                              className={`text-[#5A585C]
                               flex items-center justify-end space-x-1`}>
                              <p className="text-xs">Sending...</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Footer part */}
                  {paymentDone && (
                    <div className=" select-none text-sm w-full bg-white flex justify-center items-center h-[5%]">
                      <div className=" select-none flex items-center px-5 relative rounded-md bg-[#F8F8F9] w-[90%]">
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
                          {/* <EmojiPickerInput
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
                          /> */}
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
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChatXs;
