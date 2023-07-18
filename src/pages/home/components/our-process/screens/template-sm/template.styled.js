import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
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
  gap: 24px;
  flex-direction: column;
`;

const MainTitle = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 58px;
  color: #1a1a1a;
`;
const MainDesc = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 160%;
  color: rgba(17, 17, 17, 0.7);
`;

const ProcessContainer = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

const ProcessImage = styled.img`
  user-select: none;
  width: 80px;
  height: 80px;
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
  font-size: 2rem;
  line-height: 160%;
  letter-spacing: 0.02em;
  color: #111111;
`;

const ProcessDesc = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
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
