import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter, BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import ChatCard from "./components/chat-card/template";

import { MessageCard } from "./components/message-card";
import { BASE_API_URL } from "@/src/utils/api";
import { CookieUtil } from "@/src/utils";

const Chat = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);

  const handleClickOnChatCard = () => {
    setCurrentChat(true);
  };

  const handleCreateMessage = () => {};

  const handleSearch = (e) => {
    setQuery(e);
  };

  const currentUser = () => async () => {
    try {
      const res = await fetch(`${BASE_API_URL}/api/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
        },
      })
      const resData = await res.json();
      console.log("currentUser", resData);
    } catch (error) {
      console.log(error);
    }
  };
  const searchUser = (data) => async () => {
    try {
      const res = await fetch(`${BASE_API_URL}/api/users/search?name=${data.keyword}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CookieUtil.getCookie("FriennlyUser")}`,
        },
      })
      const resData = await res.json();
      console.log("searchUser", resData);
    } catch (error) {
      console.log(error);
    }
  };

  // const  [stompClient, setStompClient] = useState();
  // const [isConnect, setIsConnect] = useState(false);
  // const [messages, setMessages] = useState([]);

  // const connect = () => {

  //   const sock = new SockJS("https://frennly.up.railway.app/ws");
  //   const temp = over(sock);
  //   setStompClient(temp);

  //   const headers = {
  //     Authorization:`Bearer ${token}`,
  //     "X-XSRF-TOKEN":getCookie("XSRF-TOKEN")
  //   }

  //   temp.connect(headers,onConnect,onError);
  // }

  // function getCookie(name) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if(parts.length===2){
  //     return parts.pop().split(";").shift();
  //   }
  // }

  // const onError = (error) => {
  //   console.log("on error - ", error)
  // }

  // const onConnect= ()=> {
  //   setIsConnect(true);
  // }

  // useEffect(() => {
  //   if(message.newMessage && stompClient) {
  //     setMessages([...messages, messages.newMessage])
  //     stompClient.send("/app/message",{}. JSON.stringify(message.newMessage));
  //   }
  // },
  // [message.newMessage])

  // const onMessageReceive=(payload) => {
  //   console.log("recieve message", JSON.parse(payload.body))

  //   const recievedMessage = JSON.parse(payload.body);
  //   setMessages([...messages, recievedMessage]);
  // }

  // useEffect(()=> {
  //   if(isConnect && stompClient && auth.reqUser && currentChat) {
  //     const subscription = stompClient.subscribe("/group/"+currentChat.id.toString, onMessageReceive);
  //     return () => {
  //       subscription.unsubscribe();
  //     }
  //   }
  // })

  // useEffect(() => {
  //   connect();
  // },[])

  // useEffect(() => {
  //   setMessages(message.messages);
  // },[message.messages])

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
              Friennly
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
              {[1, 1, 1, 1, 1, 1, 1].map((list) => (
                <div onClick={handleClickOnChatCard}>
                  {query && <ChatCard />}
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
                    <p className="font-semibold text-lg">Jessica Drew</p>
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
                  {[1, 1, 1, 1, 1].map((list, i) => (
                    <MessageCard
                      isReqUserMessage={i % 2 === 0}
                      content={`this is a sample message from ${i % 2}`}
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
                        handleCreateMessage();
                        setContent("");
                      }}
                    />
                  </div>
                </div>
              )}

              {!paymentDone && (
                <div className="footer absolute bottom-0 py-5 text-lg w-full items-center justify-center flex">
                  <span className="bg-[#EEE9F7] font-semibold flex justify-center space-x-1 rounded-lg items-center px-5 py-3 w-[80%]">
                    <p>Looks like you've run out of credits!</p>
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
