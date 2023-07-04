import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`;

const CardContainer = styled.div`
  position: relative;
  border: 2px solid ${(props) => props.color};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  width: 100%;
  padding-bottom: 70px;
`;

const image = styled.img`
  width: 100%;
`;

const InfoBox = styled.div`
  background: ${(props) => props.color};
  border-radius: 12px;
  padding: 15px;
`;

const InfoText = styled.p`
  display: inline;
  font-style: normal;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: ${(props) => props.color};
`;

const InfoIcon = styled.img`
  height: 24px;
  width: 24px;
  display: inline;
`;

const CardTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  font-family: 'Poppins';
  color: ${(props) => props.color};
`;

const CardText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: rgba(17, 17, 17, 0.7);
`;

const CardButton = styled.button`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${(props) => props.color};
  border-radius: 30px;
  height: 52px;
  width: fit-content;
  margin: auto;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.color}0;
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
