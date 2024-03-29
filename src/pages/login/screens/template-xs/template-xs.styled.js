import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0px;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  justify-content: center;
`;

const MainContainer = styled.div`
  user-select: none;
  display: flex;
  padding: 0px 10vw;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  user-select: none;
  flex-direction: column;
  display: flex;
  gap: 1rem;
`;

const SignInTitle = styled.div`
  user-select: none;
  color: #1a1a1a;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const SignInText = styled.div`
  user-select: none;
  color: #5627b0;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;
const InputBoxes = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InputBoxContainer = styled.div`
  user-select: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  flex-shrink: 0;
`;

const InputLabel = styled.div`
  user-select: none;
  color: #1a1a1a;
  font-size: 1rem;
`;

const BoxContainer = styled.div`
  user-select: none;
  position: relative;
  width: 100%;
`;
const InputContainer = styled.div`
  user-select: none;
  box-sizing: border-box;

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  gap: 1rem;
  width: 100%;
  height: 2.5rem;
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
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const InputField = styled.input`
  user-select: none;
  flex: 1;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  color: #111111;
  border: none;
  outline: none;
`;

const LoginButtonContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoginButton = styled.button`
  user-select: none;
  background: #5627b0;
  border-radius: 30px;
  height: 3rem;
  min-width: 10rem;

  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 140%;
  color: #ffffff;
  ${(props) =>
    props.disabled
      ? `
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;`
      : ``}
`;

const LoginText = styled.div`
  user-select: none;
  color: rgba(26, 26, 26, 0.7);
  font-size: 0.85rem;

  font-weight: 500;
`;

const Logo = styled.div`
  user-select: none;
  color: #5627b0;
  font-size: 2rem;
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
