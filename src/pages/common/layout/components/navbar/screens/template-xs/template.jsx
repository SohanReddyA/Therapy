import { useRouter } from 'next/router';
import Styled from './template.styled';
import { useEffect, useState } from 'react';
import { CookieUtil, useClick } from '@/src/utils';
import { toast } from 'react-hot-toast';

const NavbarSm = ({ executeScroll, isLoggedIn, setContactsOpen, user }) => {
  const router = useRouter();
  const [isButtonOpen, setButtonOpen] = useState(false);
  const handleClickOutside = () => {
    setButtonOpen(false);
  };
  const clickRef = useClick(handleClickOutside);
  useEffect(() => {
    console.log(isButtonOpen);
  }, [isButtonOpen]);
  return (
    <Styled.Container>
      <div></div>
      <Styled.Logo
        onClick={() => {
          router.push('/');
        }}>
        Friennly
      </Styled.Logo>
      <div className="relative" ref={clickRef}>
        <img
          src="/images/menu-hamburger.svg"
          onClick={() => {
            setButtonOpen(!isButtonOpen);
          }}
        />
        {isButtonOpen && (
          <Styled.ProfileContainer>
            {isLoggedIn ? (
              <>
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <p>{user.username}</p>
                  <img
                    src={user ? user.profileImage : '/images/defaultAvatar.png'}
                    height="60px"
                    width="60px"
                    className="rounded-full border-2 border-[#434143]"
                    alt="Message"
                  />
                </div>
                <Styled.LogoutButton
                  onClick={() => {
                    CookieUtil.removeCookie('FriennlyUser');
                    router.push('/');
                  }}>
                  Logout
                </Styled.LogoutButton>
              </>
            ) : (
              <></>
            )}
            {/* <Styled.NavLinks onClick={() => router.push('/therapists')}>
              {' '}
              Therapists
            </Styled.NavLinks> */}
            <Styled.NavLinks
              onClick={() => {
                setContactsOpen(true);
              }}>
              {' '}
              Contact Us
            </Styled.NavLinks>
            <Styled.TakeQuizButton
              onClick={(event) => {
                setButtonOpen(false);
                if (router.pathname != '/')
                  router.push({ pathname: '/', query: { quiz: true } });
                else executeScroll(event);
              }}>
              Take The Quiz
            </Styled.TakeQuizButton>
            {!isLoggedIn ? (
              <>
                <Styled.SignUpButton onClick={() => router.push('/register')}>
                  Sign Up
                </Styled.SignUpButton>
                <Styled.SignUpButton onClick={() => router.push('/login')}>
                  Login
                </Styled.SignUpButton>
              </>
            ) : (
              <></>
            )}
          </Styled.ProfileContainer>
        )}
      </div>
    </Styled.Container>
  );
};

export default NavbarSm;
{
  /* <Styled.FlexContainer> */
}
{
  /* <Styled.NavLinks
  onClick={() => {
    setContactsOpen(true);
  }}>
  {' '}
  Contact Us
</Styled.NavLinks>
<Styled.TakeQuizButton
  onClick={(event) => {
    if (router.pathname != '/')
      router.push({ pathname: '/', query: { quiz: true } });
    else executeScroll(event);
  }}>
  Take The Quiz
</Styled.TakeQuizButton>
{isLoggedIn ? (
  <div style={{ position: 'relative' }} ref={clickRef}>
    <img
      src={user ? user.profileImage : '/images/defaultAvatar.png'}
      height="60px"
      width="60px"
      className="rounded-full border-2 border-[#434143]"
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
        <p>{user.username}</p>
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
</Styled.FlexContainer> */
}
