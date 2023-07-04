import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  display: flex;
  margin: auto;
  width: 35%;
  flex-direction: column;
  gap: 20px;
`;
const TextContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 14px;
`;

const SignInTitle = styled.div`
  color: #1a1a1a;
  font-size: 36px;

  font-weight: 700;
`;

const SignInText = styled.div`
  color: #1a1a1a;
  font-size: 24px;
`;
const InputBoxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
`;

const InputLabel = styled.div`
  color: #1a1a1a;
  font-size: 16px;
`;

const BoxContainer = styled.div`
  position: relative;
  width: 100%;
`;
const InputContainer = styled.div`
  box-sizing: unset;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  gap: 12px;
  height: 44px;
  border-radius: 8px;
  border: 0.6px solid rgba(86, 39, 176, 0.5);
  background: #fff;

  ${(props) =>
    props.isFocused &&
    `
    border: 1px solid #94a3b8;
    border-color: rgb(59 130 246);
  `}
`;

const ShowPassword = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const InputField = styled.input`
  flex: 1;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  border: none;
  outline: none;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LoginButton = styled.button`
  background: #5627b0;
  border-radius: 30px;
  padding: 12px 20px;
  height: 52px;
  width: 100%;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;

const LoginText = styled.div`
  color: rgba(26, 26, 26, 0.7);
  font-size: 16px;

  font-weight: 500;
`;

const Logo = styled.div`
  position: fixed;
  top: 48px;
  left: 80px;
  color: #fff;
  font-size: 32px;

  font-weight: 700;
  line-height: 140%;
  cursor: pointer;
`;

const Styled = {
  Container,
  MainContainer,
  TextContainer,
  SignInText,
  SignInTitle,
  InputBoxContainer,
  InputBoxes,
  Input: {
    InputContainer,
    InputField,
    ShowPassword,
    InputLabel,
    BoxContainer,
  },
  LoginButtonContainer,
  LoginButton,
  LoginText,
  Logo,
};

export default Styled;
