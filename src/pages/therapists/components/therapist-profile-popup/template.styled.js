import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #5627b0;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  padding: 25px 40px;
  line-height: 140%;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 70px;
`;

const TherapistImage = styled.img`
  width: 245px;
  height: 245px;
`;

const TherapistDetails = styled.div`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const SessionDetails = styled.div`
  fill: #eee9f7;
  display: flex;
`;

const PurpleText = styled.div`
  color: #5627b0;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const BlackText = styled.div`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const SwitchPlanButton = styled.div`
  color: #5627b0;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`;

const Button = styled.div`
  border-radius: 25px;
  background: #5627b0;
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const Styled = {
  Container,
  Logo,
  MainContainer,
  TherapistImage,
  TherapistDetails,
  SessionDetails,
  PurpleText,
  BlackText,
  SwitchPlanButton,
  ButtonsContainer,
  Button,
};

export default Styled;
