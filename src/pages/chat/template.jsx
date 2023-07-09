import React, { useEffect, useState } from "react";
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

const Chat = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  const [chatCreated, setChatCreated] = useState(null);
  const [userList, setUserList] = useState([]);
  const [reqUser, setReqUser] = useState(null);
  const [allChats, setAllChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageCreated, setMessageCreated] = useState(null);

  const handleClickOnChatCard = (userId) => {
    console.log(userId);
    createChat(userId);
    setQuery("");
  };

  const handleClickonAllChat = (index) => {
    setCurrentChat(allChats[index]);
  };

  useEffect(() => {
    getUsersChat();
  }, [chatCreated]);

  useEffect(() => {
    currentUser();
  }, []);

  useEffect(() => {
    if (currentChat !== null) getAllMessages(currentChat.id);
  }, [currentChat, messageCreated]);

  const handleCreateMessage = () => {
    createMessage({
      userId: reqUser.id,
      chatId: currentChat.id,
      content: content,
    });
  };

  const handleSearch = (e) => {
    searchUser(e);
  };

  const currentUser = () => {
    fetch(`${BASE_API_URL}/api/users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("currentUser - ", res);
        setReqUser(res);
      });
  };

  const searchUser = (keyword) => {
    toast.loading("Please Wait", { id: "search" });
    // setDisabled(true);
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
          toast.error("No users found", { id: "search" });
        } else {
          toast.success("Found users", { id: "search" });
        }
        setUserList(res);
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
        setChatCreated(res.id);
        setCurrentChat(res);
        console.log("create chat", res);
      });
  };

  const getUsersChat = () => {
    toast.loading("loading chats", { id: "chats" });
    fetch(`${BASE_API_URL}/api/chats/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 0) toast.error("No chats found", { id: "chats" });
        else {
          toast.success("Found chats", { id: "chats" });
          console.log("get user chat", res);
          setAllChats(res);
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
        toast.success("found messages", { id: "messages" });
        console.log("get messages data - ", res);
        setMessages(res);
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
    if (messageCreated && stompClient) {
      stompClient.send("/app/message", {}, JSON.stringify(messageCreated));
    }
  }, [messageCreated]);

  const onMessageReceive = (payload) => {
    console.log("recieve message", JSON.parse(payload.body));

    const recievedMessage = JSON.parse(payload.body);
    setMessages([...messages, recievedMessage]);
  };

  useEffect(() => {
    if (isConnect && stompClient && reqUser && currentChat) {
      const subscription = stompClient.subscribe(
        "/group/" + currentChat.id,
        onMessageReceive
      );
      return () => {
        subscription.unsubscribe();
      };
    }
  });

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="bg-[#E5E5E5] flex items-center justify-center h-screen">
      <div className="flex items-center relative bg-white justify-center w-[95%] h-[95%] rounded-md">
        <div className="left w-[30%] border-[#D5C9EB] border-r-2 flex-col items-center justify-center">
          {/*Title of the page */}
          <div className="h-[10vh]">
            <h1
              className="font-bold h-full text-[#5627B0] px-3 py-10 mx-7 text-3xl cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              Therap.ai
            </h1>
          </div>
          {/* Chat Message Section */}
          <div className="h-[85vh]">
            {/* Input */}
            <div className="relative flex justify-center items-center bg-white py-4 px-3">
              <input
                className="border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2"
                type="text"
                placeholder="Search or start new chat"
                onChange={(e) => {
                  setQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                value={query}
              />
              <AiOutlineSearch className="left-5 top-7 absolute" />
              <div>
                <BsFilter className="ml-4 text-3xl" />
              </div>
            </div>

            {/* Chat List */}
            <div className="bg-white overflow-auto h-[75vh] px-3">
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
                      username={
                        reqUser.id !== chatItem.users[0].id
                          ? chatItem.users[0].username
                          : chatItem.users[1].username
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="right w-[70%] flex-col relative items-center justify-center">
          {/* Default start page */}
          {!currentChat && (
            <div className="flex flex-col items-center text-center max-width-[70%]">
              <img className="w-52 h-52" src="/images/testLogo2.svg" alt="" />
              <p className="my-9 text-2xl font-medium text-[#5627B0]">
                Chat with your favorite therapist now!{" "}
              </p>
            </div>
          )}
          {/* Message Part */}
          {currentChat && (
            <div>
              {/* Header */}
              <div className="h-[10vh] border-b-2 border-[#D5C9EB] flex items-center justify-between">
                <div className="flex items-center p-3 space-x-4">
                  <img
                    src="/images/testLogo2.svg"
                    className="w-14 h-14 rounded-full"
                    alt=""
                  />
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-semibold text-lg">
                      {reqUser.id !== currentChat.users[0].id
                        ? currentChat.users[0].username
                        : currentChat.users[1].username}
                    </p>
                    <p className="text-[#5F5F5F] text-sm">
                      last seen 5 min ago
                    </p>
                  </div>
                </div>
                <div>
                  <div className="p-3 rounded-3xl mx-10 bg-[#EEE9F7]">
                    <p className="text-[#5627B0] font-semibold">
                      Time left: 17hrs 30min
                    </p>
                  </div>
                </div>
              </div>
              {/* Message Section */}
              <div className="px-10 h-[85vh] overflow-auto">
                <div className="space-y-2 py-2 flex flex-col justify-center ">
                  {messages.length > 0 &&
                    messages.map((item, i) => (
                      <MessageCard
                        key={i}
                        isReqUserMessage={reqUser.id === item.user.id}
                        content={item.content}
                        time={"18:30"}
                      />
                    ))}
                </div>
              </div>
              {/* Footer part */}
              {paymentDone && (
                <div className="footer absolute bottom-0 py-5 text-lg w-full">
                  <div className="flex justify-center items-center px-5 relative">
                    <div className="flex items-center justify-center space-x-4 px-4 absolute left-[16%] text-[#5D5D5D]">
                      <BsEmojiSmile className="cursor-pointer" />
                      <ImAttachment className="cursor-pointer" />
                    </div>

                    <input
                      type="text"
                      placeholder="Message"
                      className="py-2 outline-none border-none bg-[#F8F8F9] pl-20 w-[70%] rounded-lg placeholder:text-[#5D5D5D]"
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
                    <IoMdSend
                      className="text-[#5627B0] absolute left-[80%] cursor-pointer"
                      onClick={() => {
                        handleCreateMessage(reqUser.id);
                        setContent("");
                      }}
                    />
                  </div>
                </div>
              )}

              {!paymentDone && (
                <div className="footer absolute bottom-0 py-5 text-lg w-full items-center justify-center flex">
                  <span className="bg-[#EEE9F7] font-semibold flex justify-center space-x-1 rounded-lg items-center px-5 py-3 w-[80%]">
                    <p>Looks like you&apos;ve run out of credits!</p>
                    <p
                      className="text-[#5627B0] underline cursor-pointer"
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
      </div>
    </div>
  );
};

export default Chat;
