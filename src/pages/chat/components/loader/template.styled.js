const { styled } = require('styled-components');

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #5627b0;
`;

const ProgressBar = styled.progress`
  user-select: none;
  height: 8px;
  width: 20vw;
  border: none;
  border-radius: 4px;

  &::-webkit-progress-bar {
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    background-color: #5627b0;
    border-radius: 4px;
  }

  &::-moz-progress-bar {
    background-color: #5627b0;
    border-radius: 4px;
  }
`;
const Styled = {
  Container,
  Logo,
  ProgressBar,
};

export default Styled;
