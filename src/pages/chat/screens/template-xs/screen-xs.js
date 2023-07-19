import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import SockJS from 'sockjs-client/dist/sockjs';
import { over } from 'stompjs';

import { MessageCard } from '@/src/pages/chat/components/message-card';
import { BASE_API_URL } from '@/src/utils/api';
import { CookieUtil } from '@/src/utils';
import ChatLoader from '@/src/pages/chat/components/loader/template';
import notificationSound from '@/public/sounds/notification-sound.mp3';
import OtherTimingsPopupXs from '@/src/pages/chat/components/timings-popup/other/template-xs';
import UserTimingsPopupXs from '../../components/timings-popup/user/template-xs';
import MessageCardXs from '../../components/message-card/template-xs';
import ChatCardXs from '../../components/chat-card/template-xs';

const ChatXs = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState('');
  const [paymentDone, setPaymentDone] = useState(true);
  const [chatCreated, setChatCreated] = useState(null);
  const [userList, setUserList] = useState([]);
  const [reqUser, setReqUser] = useState(null);
  const [allChats, setAllChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [numOfLinesCompany, setNOL] = useState(0);
  const [messageCreated, setMessageCreated] = useState(null);
  const [loaderValue, setLoaderValue] = useState(0);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [userTimes, setUserTimes] = useState(null);
  const [openOtherModal, setOpenOtherModal] = useState(false);
  const [otherTimes, setOtherTimes] = useState([]);
  const [AllChatSubscription, setACS] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(null);
  const [lastSeen, setLastSeen] = useState('');
  const inputRef = useRef();

  const handleClickOnChatCard = (userId) => {
    console.log(userId);
    createChat(userId);
    setQuery('');
  };

  const handleClickonAllChat = (index) => {
    setCurrentChat(allChats[index]);
  };

  const handleAddPreferredTiming = (e) => {
    addPreferredTiming({ e });
    setUserTimes(e);
  };

  const handleCreateMessage = () => {
    if (content !== '') {
      console.log('createMessage data - ', reqUser.id, currentChat.id, content);
      createMessage({
        userId: reqUser.id,
        chatId: currentChat.id,
        content: content,
      });
    }
  };

  const handleBackArrow = () => {
    setCurrentChat(null);
  };

  const handleSearch = (e) => {
    searchUser(e);
  };

  const handleDateChange = (e) => {
    setDate(e);
  };

  const currentUser = () => {
    if (!CookieUtil.getCookie('FriennlyUser')) router.push('/');
    else {
      fetch(`${BASE_API_URL}/api/users/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            CookieUtil.removeCookie('FriennlyUser');
            toast.error('You have been logged out, please login again.');
            router.push('/login');
          } else {
            console.log('currentUser - ', res);
            setReqUser(res);
            if (res.preferredTimings)
              setUserTimes(JSON.parse(res.preferredTimings).e);
            else setUserTimes([]);
          }
        });
    }
  };

  const searchUser = (keyword) => {
    fetch(`${BASE_API_URL}/api/users/search/${keyword}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.length === 0) {
          toast.error('No Therapists found', { id: 'search' });
        } else {
          setUserList(res);
        }
      });
  };

  const createChat = (userId) => {
    fetch(`${BASE_API_URL}/api/chats/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
      },
      body: JSON.stringify({ userId }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error, { id: 'createChat' });
        } else {
          setChatCreated(res.id);
          setCurrentChat(res);
          console.log('create chat', res);
        }
      });
  };

  const getLastSeen = (userId) => {
    fetch(`${BASE_API_URL}/api/users/lastActive/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          console.log(res, 'lastSeen');
          setLastSeen(res.message);
        }
      });
  };

  const startSlowValueChange = () => {
    const duration = 2000;
    const finalValue = 100;
    const increment = finalValue / (duration / 100);

    const interval = setInterval(() => {
      setLoaderValue((prevValue) => {
        const newValue = prevValue + increment;
        if (newValue >= finalValue) {
          clearInterval(interval);
          return finalValue;
        }
        return newValue;
      });
    }, 100);
  };

  const getUsersChat = () => {
    fetch(`${BASE_API_URL}/api/chats/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) toast.error(res.error, { id: 'getUsersChat' });
        else {
          console.log('get user chat', res);
          setAllChats(res);
          startSlowValueChange();
        }
      });
  };

  const createMessage = ({ userId, chatId, content }) => {
    fetch(`${BASE_API_URL}/api/messages/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
      },
      body: JSON.stringify({
        userId,
        chatId,
        content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('create message data - ', res);
        setMessageCreated(res);
      });
  };
  const getAllMessages = (chatId) => {
    toast.loading('fetching messages', { id: 'messages' });
    fetch(`${BASE_API_URL}/api/messages/chat/${chatId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 0)
          toast.success('no messages yet. you can start by sending one', {
            id: 'messages',
          });
        else {
          toast.success('found messages', { id: 'messages' });
          console.log('get messages data - ', res);
          setMessages(res);
        }
      });
  };

  const addPreferredTiming = (req) => {
    fetch(`${BASE_API_URL}/api/users/set-preferred-timings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
      },
      body: JSON.stringify({
        req: JSON.stringify(req),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          toast.error('could not add preferred timings');
        } else console.log('update User data - ', res);
      });
  };

  const [stompClient, setStompClient] = useState();
  const [isConnect, setIsConnect] = useState(false);

  const connect = () => {
    const sock = new SockJS(`${BASE_API_URL}/ws`);
    const temp = over(sock);
    setStompClient(temp);

    const headers = {
      Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
      'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
    };

    temp.connect(headers, onConnect, onError);
  };

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  const onError = (error) => {
    console.log('on error - ', error);
  };

  const onConnect = () => {
    setIsConnect(true);
  };
  useEffect(() => {
    console.log(messages, 'modified');
  }, [messages]);

  useEffect(() => {
    if (messageCreated && stompClient) {
      setMessages([...messages, messageCreated]);
      if (!allChats.find((obj) => obj.id === messageCreated.chat.id)) {
        setAllChats([...allChats, messageCreated.chat]);
      } else {
        const updatedChats = allChats.map((chat) =>
          chat.id === messageCreated.chat.id ? messageCreated.chat : chat
        );
        setAllChats(updatedChats);
      }
      stompClient.send('/app/message', {}, JSON.stringify(messageCreated));
      const user =
        reqUser.id !== messageCreated.chat.user.id
          ? messageCreated.chat.user
          : messageCreated.chat.therapist;
      stompClient.send(
        '/app/user-list',
        {},
        JSON.stringify({ userId: user.id, chat: messageCreated.chat })
      );
    }
  }, [messageCreated]);

  const onMessageReceive = (payload, messages) => {
    console.log('recieve message', JSON.parse(payload.body));
    const recievedMessage = JSON.parse(payload.body);
    console.log(reqUser.id, 'Received message log', recievedMessage.sender.id);
    if (
      messages.length &&
      messages[messages.length - 1].id !== recievedMessage.id
    ) {
      console.log(messages, 'MEssages log');
      setMessages([...messages, recievedMessage]);
    }
  };

  const onUserMessageRecieve = (payload, allChats) => {
    console.log('recieve message user ', JSON.parse(payload.body));

    const recievedMessage = JSON.parse(payload.body);
    if (document.visibilityState === 'hidden') {
      const audio = new Audio(notificationSound);
      audio.play();
    }

    if (!allChats.find((obj) => obj.id === recievedMessage.id)) {
      setAllChats([...allChats, recievedMessage]);
    } else {
      const updatedChats = allChats.map((chat) =>
        chat.id === recievedMessage.id ? recievedMessage : chat
      );
      setAllChats(updatedChats);
    }
  };

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    getUsersChat();
  }, [chatCreated]);

  useEffect(() => {
    currentUser();
  }, []);

  useEffect(() => {
    console.log(currentChat, 'CurrentChat');
    if (currentChat !== null) {
      setMessages([]);
      getAllMessages(currentChat.id);
      const times = JSON.parse(
        reqUser.userType !== 'USER'
          ? currentChat.user.preferredTimings
          : currentChat.therapist.preferredTimings
      );
      setOtherTimes(times ? times.e : []);
      getLastSeen(
        reqUser.userType !== 'USER'
          ? currentChat.user.id
          : currentChat.therapist.id
      );
    }
  }, [currentChat]);

  useEffect(() => {
    if (isConnect && stompClient && reqUser && currentChat) {
      const subscription = stompClient.subscribe(
        '/group/' + currentChat.id,
        (payload) => {
          onMessageReceive(payload, messages);
        },
        { id: 'currentChat' }
      );
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [currentChat, messages]);

  useEffect(() => {
    if (isConnect && stompClient && reqUser && !AllChatSubscription) {
      const subscription = stompClient.subscribe(
        '/users/' + reqUser.id,
        (payload) => {
          onUserMessageRecieve(payload, allChats);
        },
        { id: 'allChats' }
      );
      setACS(true);
      // return () => {
      //   subscription.unsubscribe();
      // };
    }
  }, [allChats]);

  useEffect(() => {
    if (messageCreated && stompClient) {
      stompClient.send('/app/message', {}, JSON.stringify(messageCreated));
      const user =
        reqUser.id !== messageCreated.chat.user.id
          ? messageCreated.chat.user
          : messageCreated.chat.therapist;
      stompClient.send(
        '/app/user-list',
        {},
        JSON.stringify({ userId: user.id, chat: messageCreated.chat })
      );
    }
  }, [messageCreated]);

  useEffect(() => {
    console.log(date, 'date');
  }, [date]);
  return (
    <div className=" select-none h-screen">
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
              <div className=" col-span-1 select-none left flex-col items-center justify-center">
                {/*Title of the page */}
                <div className=" select-none h-[10vh] flex justify-between items-center">
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
                <div className=" select-none h-[85vh]">
                  {/* Input */}
                  <div className=" select-none relative flex justify-center items-center h-[10vh] bg-white py-4 px-3">
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
                            handleClickonAllChat(index);
                          }}
                          key={index}>
                          <ChatCardXs
                            curUser={
                              chatItem.latestMessage
                                ? reqUser.id ===
                                  chatItem.latestMessage.sender.id
                                : null
                            }
                            username={
                              reqUser.id !== chatItem.user.id
                                ? chatItem.user.username
                                : chatItem.therapist.username
                            }
                            content={
                              chatItem.latestMessage
                                ? chatItem.latestMessage.content
                                : null
                            }
                            time={
                              chatItem.latestMessage
                                ? chatItem.latestMessage.time
                                : null
                            }
                            profileImage={
                              reqUser.id === chatItem.user.id
                                ? chatItem.therapist.profileImage
                                : chatItem.user.profileImage
                            }
                          />
                        </div>
                      ))}
                    <div
                      className=" select-none h-[5vh] absolute bottom-[10px] w-[-webkit-fill-available] box-border flex items-center justify-center"
                      onClick={() => setOpenUserModal(true)}>
                      <p className=" select-none bg-[#E6E1EF] font-semibold text-[#5627B0] text-sm p-2 rounded-[16px] cursor-pointer">
                        Edit Your Preferred Timings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Default start page */}
            {/* Message Part */}
            {currentChat && (
              <div className=" col-span-1 select-none right flex-col relative justify-between w-full h-full">
                <div className=" select-none flex flex-col gap-1 relative ">
                  {/* Header */}
                  <div className=" select-none h-[10vh] border-b-2 border-[#D5C9EB] grid grid-cols-6 justify-between">
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
                        <p className=" select-none font-semibold text-sm">
                          {reqUser.id !== currentChat.user.id
                            ? currentChat.user.username
                            : currentChat.therapist.username}
                        </p>
                        <p className=" select-none text-[#5F5F5F] text-xs">
                          {lastSeen}
                        </p>
                      </div>
                    </div>
                    <div
                      className=" select-none col-span-2 h-[7vh] mt-2 mr-2 p-3 rounded-3xl bg-[#EEE9F7] cursor-pointer flex items-center justify-center"
                      onClick={() => setOpenOtherModal(true)}>
                      <p className="select-none text-[#5627B0] text-xs text-center font-semibold">
                        Preferred Timings
                      </p>
                    </div>
                  </div>
                  {/* Message Section */}
                  <div className=" select-none px-5 h-[80vh] ">
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
                    </div>
                  </div>
                  {/* Footer part */}
                  {paymentDone && (
                    <div className=" select-none text-sm w-full bg-white flex justify-center items-center h-[5vh]">
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
