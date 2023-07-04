import { CookieUtil } from '@/src/utils';
import { Navbar } from './components/navbar';
import Styled from './template.styled';
import { useRouter } from 'next/router';

const Layout = ({ children, executeScroll = null }) => {
  const router = useRouter();
  return (
    <div
      style={{ backgroundColor: 'white', width: '100%', marginTop: '100px' }}>
      <Navbar executeScroll={executeScroll} />
      {children}
      {CookieUtil.getCookie('FriennlyUser') && (
        <Styled.Container>
          <img
            src="/images/message-circle-dots.png"
            height="40px"
            width="40px"
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
