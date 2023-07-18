import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
`;

const HeroContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 1.5rem;
`;

const HeroTitle = styled.div`
  user-select: none;
  color: #1a1a1a;
  font-size: 40px;
  font-weight: 700;
  text-transform: capitalize;
`;

const HeroText1 = styled.div`
  user-select: none;
  color: #1a1a1a;
  font-size: 25px;

  font-weight: 700;
  text-transform: capitalize;
`;
const HeroText2 = styled.li`
  margin-left: 1.5rem;
  user-select: none;
  color: rgba(26, 26, 26, 0.7);
  font-size: 18px;

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
  font-size: 18px;
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
