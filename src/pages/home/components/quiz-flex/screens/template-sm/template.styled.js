import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
`;

const CardContainer = styled.div`
  user-select: none;
  position: relative;
  border: 2px solid ${(props) => props.color};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 32px;
  width: 100%;
  padding-bottom: 70px;
`;

const image = styled.img`
  user-select: none;
  width: 100%;
`;

const InfoBox = styled.div`
  user-select: none;
  background: ${(props) => props.color};
  border-radius: 12px;
  padding: 15px;
`;

const InfoText = styled.p`
  user-select: none;
  display: inline;
  font-style: normal;

  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: ${(props) => props.color};
`;

const InfoIcon = styled.img`
  user-select: none;
  height: 24px;
  width: 24px;
  display: inline;
`;

const CardTitle = styled.p`
  user-select: none;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;

  color: ${(props) => props.color};
`;

const CardText = styled.p`
  user-select: none;
  font-style: normal;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: rgba(17, 17, 17, 0.7);
`;

const CardButton = styled.button`
  user-select: none;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${(props) => props.color};
  border-radius: 30px;
  height: 52px;
  width: max-content;
  margin: auto;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.color};
  padding: 12px 20px;
`;

const Styled = {
  Container,
  CardContainer,
  image,
  InfoBox,
  InfoText,
  InfoIcon,
  CardTitle,
  CardText,
  CardButton,
};

export default Styled;
