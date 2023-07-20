import { CookieUtil } from '@/src/utils';
import { Navbar } from './components/navbar';
import Styled from './template.styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { BASE_API_URL } from '@/src/utils/api';
import toast from 'react-hot-toast';

const Layout = ({
  children,
  executeScroll = null,
  isLoggedIn,
  setContactsOpen,
}) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setUserLoading] = useState(true);
  useEffect(() => {
    if (CookieUtil.getCookie('FriennlyUser')) {
      fetch(`${BASE_API_URL}/api/users/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CookieUtil.getCookie('FriennlyUser')}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log('currentUser - ', res);
          if (res.error) {
            CookieUtil.removeCookie('FriennlyUser');
            toast.error('You have been logged out, please login again.');
            router.push('/');
          }
          setUser(res);
          setUserLoading(false);
        });
    } else setUserLoading(false);
  }, []);
  if (isLoading) {
    return (
      <div
        style={{
          margin: 'auto',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ColorRing visible={true} height="80" width="80" colors={['#b8c480']} />
      </div>
    );
  }
  return (
    <div
      style={{ backgroundColor: 'white', width: '100%', marginTop: '100px' }}>
      <Navbar
        executeScroll={executeScroll}
        isLoggedIn={isLoggedIn}
        setContactsOpen={setContactsOpen}
        user={user}
      />
      {children}
      {isLoggedIn && (
        <Styled.Container
          onClick={() => {
            router.push('/chat');
          }}>
          <img
            src="/images/message-circle-dots.png"
            height="20px"
            width="20px"
            alt="Message"
          />
          <Styled.ButtonText>
            Chat with {user.userType === 'USER' ? 'an expert' : 'users'}
          </Styled.ButtonText>
        </Styled.Container>
      )}
    </div>
  );
};

export default Layout;
