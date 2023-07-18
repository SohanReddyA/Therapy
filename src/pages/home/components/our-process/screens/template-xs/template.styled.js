import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const Image = styled.img`
  user-select: none;
  width: 100%;
`;

const MainContainer = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: space-between;
  flex-direction: column;
`;
const MainFlex = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  gap: 0px;
  flex-direction: column;
`;

const MainTitle = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 58px;
  color: #1a1a1a;
`;
const MainDesc = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: rgba(17, 17, 17, 0.7);
`;

const ProcessContainer = styled.div`
  user-select: none;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

const ProcessImage = styled.img`
  user-select: none;
  margin-top: 10px;
  width: 40px;
  height: 40px;
`;
const ProcessFlex = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ProcessTitle = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  letter-spacing: 0.02em;
  color: #111111;
`;

const ProcessDesc = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: rgba(17, 17, 17, 0.5);
`;
const Styled = {
  Container,
  Image,
  MainContainer,
  MainFlex,
  MainTitle,
  MainDesc,
  ProcessContainer,
  ProcessDesc,
  ProcessTitle,
  ProcessFlex,
  ProcessImage,
};

export default Styled;
