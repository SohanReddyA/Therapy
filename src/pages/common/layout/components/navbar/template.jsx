import { useRouter } from 'next/router';
import Styled from './template.styled';
import { useEffect, useState } from 'react';
import { CookieUtil } from '@/src/utils';
import { BASE_API_URL } from '@/src/utils/api';

const Navbar = ({ executeScroll, isLoggedIn }) => {
  const router = useRouter();
  const [isButtonOpen, setButtonOpen] = useState(false);
  const [username, setUsername] = useState('');
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
          setUsername(res.username);
        });
    }
  }, []);
  return (
    <Styled.Container>
      <Styled.Logo
        onClick={() => {
          router.push('/');
        }}>
        Friennly
      </Styled.Logo>
      <Styled.FlexContainer>
        <Styled.NavLinks onClick={() => router.push('/therapists')}>
          {' '}
          Therapists
        </Styled.NavLinks>
        <Styled.NavLinks> Contact Us</Styled.NavLinks>
        <Styled.TakeQuizButton onClick={executeScroll}>
          Take The Quiz
        </Styled.TakeQuizButton>
        {isLoggedIn ? (
          <div style={{ position: 'relative' }}>
            <img
              src="/images/defaultAvatar.png"
              height="60px"
              width="60px"
              alt="Message"
              onClick={() => {
                setButtonOpen(!isButtonOpen);
              }}
              style={{
                cursor: 'pointer',
              }}
            />
            {isButtonOpen && (
              <Styled.ProfileContainer>
                <p>{username}</p>
                <Styled.LogoutButton
                  onClick={() => {
                    CookieUtil.removeCookie('FriennlyUser');
                    router.push('/');
                  }}>
                  Logout
                </Styled.LogoutButton>
              </Styled.ProfileContainer>
            )}
          </div>
        ) : (
          <>
            <Styled.SignUpButton onClick={() => router.push('/register')}>
              Sign Up
            </Styled.SignUpButton>
            <Styled.SignUpButton onClick={() => router.push('/login')}>
              Login
            </Styled.SignUpButton>
          </>
        )}
      </Styled.FlexContainer>
    </Styled.Container>
  );
};

export default Navbar;
