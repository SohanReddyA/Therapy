import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import ChatCard from './components/chat-card/template';

const Chat = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [currentChat, setCurrentChat] = useState(null);

  const handleClickOnChatCard = () => {
    setCurrentChat(true);
  };

  const handleSearch = (e) => {
    setQuery(e);
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
      <div className="flex items-center bg-white justify-center w-[95%] h-[95%] rounded-md">
        <div className="left w-[30%] border-[#D5C9EB] border-r-2 flex-col items-center justify-center">
          {/*Title of the page */}
          <div className="h-[10vh]">
            <h1
              className="font-bold h-full text-[#5627B0] px-3 py-10 mx-7 text-3xl cursor-pointer"
              onClick={() => {
                router.push('/');
              }}>
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
            <div className="bg-white overflow-y-scroll scroll-smooth h-[75vh] px-3">
              {[1, 1, 1, 1, 1].map((list, index) => (
                <div onClick={handleClickOnChatCard} key={index}>
                  {query && <ChatCard />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right w-[70%] flex-col items-center justify-center">
          {/* Default start page */}
          {!currentChat && (
            <div className="flex flex-col items-center text-center max-width-[70%]">
              <img className="w-52 h-52" src="/images/testLogo2.svg" alt="" />
              <p className="my-9 text-2xl font-medium text-[#5627B0]">
                Chat with your favorite therapist now!{' '}
              </p>
            </div>
          )}
          {/* Message Part */}
          {currentChat && (
            <div>
              <div className="h-[10vh] border-b-2 border-[#D5C9EB]">
                <img
                  src="/images/testLogo2.svg"
                  className="w-14 h-14 rounded-full"
                  alt=""
                />
                <p>Jessica Drew</p>
              </div>

              <div className="h-[85vh]">sample</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
