import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter, BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-hot-toast";
import ChatCard from "./components/chat-card/template";
import SockJS from "sockjs-client/dist/sockjs";
import { over } from "stompjs";

import { MessageCard } from "./components/message-card";
import { BASE_API_URL } from "@/src/utils/api";
import { CookieUtil } from "@/src/utils";
import ChatLoader from "./components/loader/template";
import notificationSound from "@/public/sounds/notification-sound.mp3";
import UserTimingsPopup from "./components/timings-popup/user/template";
import OtherTimingsPopup from "./components/timings-popup/other/template";
import EmojiPickerInput from "./components/emoji-picker/template";

const Chat = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState("");
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
  const [userTimes, setUserTimes] = useState([
    { start: "7 AM", end: "12 PM" },
    { start: "3 PM", end: "7 PM" },
  ]);
  const [openOtherModal, setOpenOtherModal] = useState(false);
  const [otherTimes, setOtherTimes] = useState([
    { start: "7 AM", end: "12 PM" },
    { start: "3 PM", end: "7 PM" },
  ]);
  const [AllChatSubscription, setACS] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const inputRef = useRef();

  const handleClickOnChatCard = (userId) => {
    console.log(userId);
    createChat(userId);
    setQuery("");
  };

  const handleClickonAllChat = (index) => {
    setCurrentChat(allChats[index]);
  };

  const handleCreateMessage = () => {
    if (content !== "") {
      console.log("createMessage data - ", reqUser.id, currentChat.id, content);
      createMessage({
        userId: reqUser.id,
        chatId: currentChat.id,
        content: content,
      });
    }
  };

  const handleSearch = (e) => {
    searchUser(e);
  };

  const currentUser = () => {
    if (!CookieUtil.getCookie("FriennlyUser")) router.push("/");
    else {
      fetch(`${BASE_API_URL}/api/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            CookieUtil.removeCookie("FriennlyUser");
            toast.error("You have been logged out, please login again.");
            router.push("/login");
          } else {
            console.log("currentUser - ", res);
            setReqUser(res);
          }
        });
    }
  };

  const searchUser = (keyword) => {
    fetch(`${BASE_API_URL}/api/users/search/${keyword}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.length === 0) {
          toast.error("No Therapists found", { id: "search" });
        } else {
          setUserList(res);
        }
      });
  };

  const createChat = (userId) => {
    fetch(`${BASE_API_URL}/api/chats/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
      },
      body: JSON.stringify({ userId }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error, { id: "createChat" });
        } else {
          setChatCreated(res.id);
          setCurrentChat(res);
          console.log("create chat", res);
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
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) toast.error(res.error, { id: "getUsersChat" });
        else {
          console.log("get user chat", res);
          setAllChats(res);
          startSlowValueChange();
        }
      });
  };

  const createMessage = ({ userId, chatId, content }) => {
    fetch(`${BASE_API_URL}/api/messages/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
      },
      body: JSON.stringify({
        userId,
        chatId,
        content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("create message data - ", res);
        setMessageCreated(res);
      });
  };
  const getAllMessages = (chatId) => {
    toast.loading("fetching messages", { id: "messages" });
    fetch(`${BASE_API_URL}/api/messages/chat/${chatId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 0)
          toast.success("no messages yet. you can start by sending one", {
            id: "messages",
          });
        else {
          toast.success("found messages", { id: "messages" });
          console.log("get messages data - ", res);
          setMessages(res);
        }
      });
  };

  const [stompClient, setStompClient] = useState();
  const [isConnect, setIsConnect] = useState(false);

  const connect = () => {
    const sock = new SockJS(`${BASE_API_URL}/ws`);
    const temp = over(sock);
    setStompClient(temp);

    const headers = {
      Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
      "X-XSRF-TOKEN": getCookie("XSRF-TOKEN"),
    };

    temp.connect(headers, onConnect, onError);
  };

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  }

  const onError = (error) => {
    console.log("on error - ", error);
  };

  const onConnect = () => {
    setIsConnect(true);
  };
  useEffect(() => {
    console.log(messages, "modified");
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
      stompClient.send("/app/message", {}, JSON.stringify(messageCreated));
      const user =
        reqUser.id !== messageCreated.chat.user.id
          ? messageCreated.chat.user
          : messageCreated.chat.therapist;
      stompClient.send(
        "/app/user-list",
        {},
        JSON.stringify({ userId: user.id, chat: messageCreated.chat })
      );
    }
  }, [messageCreated]);

  const onMessageReceive = (payload, messages) => {
    console.log("recieve message", JSON.parse(payload.body));
    const recievedMessage = JSON.parse(payload.body);
    if (reqUser.id != recievedMessage.sender.id) {
      console.log(messages, "MEssages log");
      setMessages([...messages, recievedMessage]);
    }
  };

  const onUserMessageRecieve = (payload, allChats) => {
    console.log("recieve message user ", JSON.parse(payload.body));

    const recievedMessage = JSON.parse(payload.body);
    if (document.visibilityState === "hidden") {
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
    console.log(currentChat, "CurrentChat");
    if (currentChat !== null) {
      getAllMessages(currentChat.id);
    }
  }, [currentChat]);

  useEffect(() => {
    if (isConnect && stompClient && reqUser && currentChat) {
      const subscription = stompClient.subscribe(
        "/group/" + currentChat.id,
        (payload) => {
          onMessageReceive(payload, messages);
        },
        { id: "currentChat" }
      );
      return () => {
        subscription.unsubscribe();
      };
    }
  }, [currentChat, messages]);

  useEffect(() => {
    if (isConnect && stompClient && reqUser && !AllChatSubscription) {
      const subscription = stompClient.subscribe(
        "/users/" + reqUser.id,
        (payload) => {
          onUserMessageRecieve(payload, allChats);
        },
        { id: "allChats" }
      );
      setACS(true);
      // return () => {
      //   subscription.unsubscribe();
      // };
    }
  }, [allChats]);

  useEffect(() => {
    if (messageCreated && stompClient) {
      stompClient.send("/app/message", {}, JSON.stringify(messageCreated));
      const user =
        reqUser.id !== messageCreated.chat.user.id
          ? messageCreated.chat.user
          : messageCreated.chat.therapist;
      stompClient.send(
        "/app/user-list",
        {},
        JSON.stringify({ userId: user.id, chat: messageCreated.chat })
      );
    }
  }, [messageCreated]);

  return (
    <div className=" select-none bg-[url(/images/doodle.svg)] flex items-center justify-center h-screen">
      <div className=" select-none flex items-center relative bg-white justify-center w-[95%] h-[95%] rounded-md border-[#D5C9EB] border-2 m-auto">
        {loaderValue < 100 ? (
          <ChatLoader value={loaderValue} />
        ) : (
          <>
            {openUserModal && (
              <UserTimingsPopup
                handleClose={() => setOpenUserModal(false)}
                time={userTimes}
                setTime={setUserTimes}
              />
            )}
            {openOtherModal && (
              <OtherTimingsPopup
                handleClose={() => setOpenOtherModal(false)}
                time={otherTimes}
              />
            )}
            <div className=" select-none left w-[30%] border-[#D5C9EB] border-r-2 flex-col items-center justify-center">
              {/*Title of the page */}
              <div className=" select-none h-[10vh]">
                <h1
                  className=" select-none font-bold h-full text-[#5627B0] px-3 py-10 mx-7 text-3xl cursor-pointer"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Friennly
                </h1>
              </div>
              {/* Chat Message Section */}
              <div className=" select-none h-[85vh]">
                {/* Input */}
                <div className=" select-none relative flex justify-center items-center bg-white py-4 px-3">
                  <input
                    className=" select-none border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2"
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
                <div className=" select-none bg-white overflow-auto h-[75vh] px-3 relative">
                  {query &&
                    userList.length > 0 &&
                    userList.map((listItem, index) => (
                      <div
                        onClick={() => {
                          handleClickOnChatCard(listItem.id);
                        }}
                        key={index}
                      >
                        {<ChatCard username={listItem.username} />}
                      </div>
                    ))}

                  {allChats.length > 0 &&
                    !query &&
                    allChats.map((chatItem, index) => (
                      <div
                        onClick={() => {
                          handleClickonAllChat(index);
                        }}
                        key={index}
                      >
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
                            chatItem.latestMessage
                              ? chatItem.latestMessage.content
                              : null
                          }
                          time={
                            chatItem.latestMessage
                              ? chatItem.latestMessage.time
                              : null
                          }
                        />
                      </div>
                    ))}
                  <div
                    className=" select-none  absolute bottom-[20px] w-[-webkit-fill-available] box-border flex items-center justify-center"
                    onClick={() => setOpenUserModal(true)}
                  >
                    <p className=" select-none bg-[#E6E1EF] p-2 rounded-[16px] select-none cursor-pointer">
                      Edit Your Preferred Timings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" select-none right flex-col relative justify-between w-full h-full">
              {/* Default start page */}
              {!currentChat && (
                <div className=" select-none flex flex-col items-center text-center max-width-[70%] m-auto h-full justify-center w-auto">
                  <img
                    className=" select-none w-52 h-52"
                    src="/images/testLogo2.svg"
                    alt=""
                  />
                  <p className=" select-none my-9 text-2xl font-medium text-[#5627B0]">
                    Chat with your favorite therapist now!{" "}
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
                        src="/images/testLogo2.svg"
                        className=" select-none w-14 h-14 rounded-full"
                        alt=""
                      />
                      <div className=" select-none flex flex-col items-start justify-center">
                        <p className=" select-none font-semibold text-lg">
                          {reqUser.id !== currentChat.user.id
                            ? currentChat.user.username
                            : currentChat.therapist.username}
                        </p>
                        <p className=" select-none text-[#5F5F5F] text-sm">
                          last seen 5 min ago
                        </p>
                      </div>
                    </div>
                    <div>
                      <div
                        className=" select-none p-3 rounded-3xl mx-10 bg-[#EEE9F7] cursor-pointer"
                        onClick={() => setOpenOtherModal(true)}
                      >
                        <p className=" select-none text-[#5627B0] font-semibold">
                          Preferred Timings
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Message Section */}
                  <div className=" select-none px-10 h-[75vh] ">
                    <div className=" select-none space-y-2 py-2 flex flex-col overflow-auto h-full">
                      {messages.length > 0 &&
                        messages.map((item, i) => (
                          <MessageCard
                            key={i}
                            index={i}
                            length={messages.length}
                            isReqUserMessage={reqUser.id === item.sender.id}
                            content={item.content}
                            time={item.time}
                          />
                        ))}
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
                            if (e.key === "Enter") {
                              handleCreateMessage();
                              setContent("");
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
                              setContent("");
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
                          }}
                        >
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

export default Chat;
