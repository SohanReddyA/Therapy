import { useRouter } from 'next/router';
import Styled from './template.styled';
import { useState } from 'react';
import { CookieUtil } from '@/src/utils';

const Navbar = ({ executeScroll, isLoggedIn }) => {
  const router = useRouter();
  const [isButtonOpen, setButtonOpen] = useState(false);
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
              <Styled.LogoutButton
                onClick={() => {
                  CookieUtil.removeCookie('FriennlyUser');
                  router.push('/');
                }}>
                Logout
              </Styled.LogoutButton>
            )}
          </div>
        ) : (
          <Styled.SignUpButton onClick={() => router.push('register')}>
            Sign Up
          </Styled.SignUpButton>
        )}
      </Styled.FlexContainer>
    </Styled.Container>
  );
};

export default Navbar;
