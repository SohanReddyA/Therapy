import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  background-image: url('/images/doodle.svg');
  display: flex;
  gap: 40px;
  justify-content: center;
  width: 100%;
  padding: 50px;
  flex-wrap: wrap;
  margin: auto;
`;

const CardContainer = styled.div`
  user-select: none;
  display: flex;
  width: 320px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  border: 0.5px solid #284e4f;
  background: #fff;
`;

const ImageContainer = styled.div`
  user-select: none;
  position: relative;
  width: 100%;
`;

const ImageText = styled.div`
  user-select: none;
  background: rgba(26, 26, 17, 0.25);
  position: absolute;
  bottom: 0px;
  padding: 10px;
  width: 100%;
  color: #fff;
  font-size: 20px;

  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const TextContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Text1 = styled.div`
  user-select: none;
  color: #1a1a1a;
  font-size: 14px;

  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 20px;
`;

const Text2 = styled.div`
  user-select: none;
  color: #284e4f;
  font-size: 14px;

  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration: underline;
  user-select: none;
  cursor: pointer;
`;

const Styled = {
  Container,
  CardContainer,
  ImageContainer,
  TextContainer,
  Text1,
  Text2,
  ImageText,
};

export default Styled;
