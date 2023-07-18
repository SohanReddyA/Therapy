import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0px 100px;
  top: 0px;
  background: #ffffff;
  border-bottom: 0.25px solid rgba(86, 39, 176, 0.25);
`;

const FlexContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  padding: 0px;
  gap: 32px;
`;

const TakeQuizButton = styled.button`
  user-select: none;
  border: 1px solid #5627b0;
  border-radius: 30px;
  height: 52px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #5627b0;
  padding: 12px 20px;
`;

const SignUpButton = styled.button`
  user-select: none;
  background: #5627b0;
  border-radius: 30px;
  padding: 12px 20px;
  height: 52px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;

const NavLinks = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  cursor: pointer;

  color: #111111;
`;
const Logo = styled.p`
  user-select: none;
  font-style: normal;
  cursor: pointer;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  color: #5627b0;
`;

const LogoutButton = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  cursor: pointer;
  color: #5627b0;
`;

const ProfileContainer = styled.div`
  user-select: none;
  border-radius: 16px;
  border: 4px solid #d5cce7;
  background: #fff;
  display: flex;
  position: absolute;
  right: -50px;
  width: max-content;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 8px;
`;

const Styled = {
  Container,
  TakeQuizButton,
  SignUpButton,
  FlexContainer,
  LogoutButton,
  NavLinks,
  Logo,
  ProfileContainer,
};

export default Styled;
