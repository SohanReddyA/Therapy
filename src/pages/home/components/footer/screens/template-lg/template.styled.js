import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  margin-top: 100px;
  width: 100%;
  padding: 6vw 100px;
  background: rgba(86, 39, 176, 0.1);
`;

const InnerContainer = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  gap: 16px;
`;

const Logo = styled.div`
  user-select: none;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 160%;
  color: #5627b0;
`;

const Text = styled.div`
  user-select: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #1a1a1a;
`;

const MainContainer = styled.div`
  user-select: none;
  display: flex;
  gap: 20px;
`;
const GroupContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  gap: 40px;
`;

const LinksContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  gap: 8px;
`;

const Links = styled.div`
  user-select: none;
  font-style: normal;

  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
  cursor: pointer;
  color: #1a1a1a;
`;

const Heading = styled.div`
  user-select: none;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  text-transform: capitalize;
  color: #5627b0;
`;

const Styled = {
  Container,
  InnerContainer,
  LogoContainer,
  Logo,
  Text,
  MainContainer,
  GroupContainer,
  LinksContainer,
  Links,
  Heading,
};

export default Styled;
