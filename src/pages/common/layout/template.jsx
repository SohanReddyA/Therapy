import { CookieUtil } from '@/src/utils';
import { Navbar } from './components/navbar';
import Styled from './template.styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Layout = ({ children, executeScroll = null, isLoggedIn }) => {
  const router = useRouter();
  return (
    <div
      style={{ backgroundColor: 'white', width: '100%', marginTop: '100px' }}>
      <Navbar executeScroll={executeScroll} isLoggedIn={isLoggedIn} />
      {children}
      {isLoggedIn && (
        <Styled.Container>
          <img
            src="/images/message-circle-dots.png"
            height="20px"
            width="20px"
            alt="Message"
          />
          <Styled.ButtonText
            onClick={() => {
              router.push('/chat');
            }}>
            Chat with an expert
          </Styled.ButtonText>
        </Styled.Container>
      )}
    </div>
  );
};

export default Layout;
