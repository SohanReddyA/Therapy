import { useRouter } from 'next/router';
import Styled from './template.styled';
import { CookieUtil } from '@/src/utils';
import { useEffect, useState } from 'react';

const Navbar = ({ executeScroll, isLoggedIn }) => {
  const router = useRouter();
  return (
    <Styled.Container>
      <Styled.Logo>Friennly</Styled.Logo>
      <Styled.FlexContainer>
        <Styled.NavLinks> About Us</Styled.NavLinks>
        <Styled.NavLinks> Contact Us</Styled.NavLinks>
        <Styled.TakeQuizButton onClick={executeScroll}>
          Take The Quiz
        </Styled.TakeQuizButton>
        {isLoggedIn ? (
          <img
            src="/images/defaultAvatar.png"
            height="60px"
            width="60px"
            alt="Message"
            style={{ cursor: 'pointer' }}
          />
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
