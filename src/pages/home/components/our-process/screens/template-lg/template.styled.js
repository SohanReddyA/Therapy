import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  gap: 50px;
`;

const Image = styled.img`
  margin-top: 2rem;
  user-select: none;
  width: 100vw;
  min-width: 450px;
  max-width: 600px;
`;

const MainContainer = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  gap: 60px;
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
  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: 2rem;
  }
  @media (min-width: 1401px) and (max-width: 1600px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1601px) {
    font-size: 2.5rem;
  }
  line-height: 58px;
  color: #1a1a1a;
`;
const MainDesc = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 500;
  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: 1rem;
  }
  @media (min-width: 1401px) and (max-width: 1600px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1601px) {
    font-size: 1.5rem;
  }
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
  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1401px) and (max-width: 1600px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1601px) {
    font-size: 2rem;
  }
  line-height: 160%;
  letter-spacing: 0.02em;
  color: #111111;
`;

const ProcessDesc = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 400;
  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1401px) and (max-width: 1600px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1601px) {
    font-size: 1.4rem;
  }
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
