import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
`;

const HeroContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 50px;
`;

const HeroTitle = styled.div`
  user-select: none;
  color: #1a1a1a;
  font-size: 64px;

  font-weight: 700;
  text-transform: capitalize;
`;

const HeroText1 = styled.div`
  user-select: none;
  color: #1a1a1a;
  font-size: 30px;

  font-weight: 700;
  line-height: 48px;
  text-transform: capitalize;
`;
const HeroText2 = styled.li`
  user-select: none;
  color: rgba(26, 26, 26, 0.7);
  font-size: 28px;

  font-weight: 700;
  line-height: 150%;
`;

const HeroButton = styled.button`
  user-select: none;
  background: #5627b0;
  border-radius: 30px;
  padding: 12px 24px;
  width: fit-content;

  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 140%;
`;

const Styled = {
  Container,
  HeroContainer,
  HeroTitle,
  HeroText1,
  HeroText2,
  HeroButton,
};

export default Styled;
