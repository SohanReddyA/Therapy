import { toast } from 'react-hot-toast';
import notificationSound from '@/public/sounds/notification-sound.mp3';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { BASE_API_URL } from '@/src/utils/api';
import { CookieUtil } from '@/src/utils';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

const ChatController = () => {
  const router = useRouter();
  const myRef = useRef(null);
  const [query, setQuery] = useState('');
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState('');
  const [paymentDone, setPaymentDone] = useState(true);
  const [chatCreated, setChatCreated] = useState(null);
  const [userList, setUserList] = useState([]);
  const [sendingMessage, setSendingMessage] = useState('');
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

  const handleSearch = (e) => {
    // searchUser(e);
    console.log(e);
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
            toast.error('You have been logged out, please login again.', {
              id: 'login',
            });
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
    setSendingMessage(content);
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
        setSendingMessage('');
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
    currentUser();
  }, []);

  useEffect(() => {
    getUsersChat();
  }, [chatCreated]);

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
    if (sendingMessage !== '') myRef.current.scrollIntoView();
  }, [sendingMessage]);

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

  return {
    router,
    query,
    setQuery,
    currentChat,
    setCurrentChat,
    content,
    setContent,
    paymentDone,
    setPaymentDone,
    chatCreated,
    setChatCreated,
    userList,
    setUserList,
    reqUser,
    setReqUser,
    allChats,
    setAllChats,
    messages,
    setMessages,
    numOfLinesCompany,
    setNOL,
    messageCreated,
    setMessageCreated,
    loaderValue,
    setLoaderValue,
    openUserModal,
    setOpenUserModal,
    userTimes,
    setUserTimes,
    openOtherModal,
    setOpenOtherModal,
    otherTimes,
    setOtherTimes,
    AllChatSubscription,
    setACS,
    showPicker,
    setShowPicker,
    date,
    setDate,
    lastSeen,
    setLastSeen,
    inputRef,
    handleClickOnChatCard,
    handleClickonAllChat,
    handleAddPreferredTiming,
    handleCreateMessage,
    handleSearch,
    handleDateChange,
    sendingMessage,
    myRef,
  };
};

export default ChatController;
