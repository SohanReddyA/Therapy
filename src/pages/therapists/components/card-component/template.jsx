import Styled from '../../template.styled';
import React from 'react';
const TherapistCardComponent = ({ therapist }) => {
  const { name, description, image, qualification } = therapist;
  return (
    <Styled.CardContainer>
      <Styled.ImageContainer>
        <img
          src="/images/Therapist.png"
          width="100%"
          alt="Therapist"
          style={{ borderRadius: '24px 24px 0px 0px' }}
        />
        <Styled.ImageText>{name}</Styled.ImageText>
      </Styled.ImageContainer>
      <Styled.TextContainer>
        <Styled.Text1>
          Qualification: {qualification} <br />
          About: {description}...{' '}
          <span style={{ color: '#2555BB', cursor: 'pointer' }}>Read more</span>
        </Styled.Text1>
        <Styled.Text2>Start Talking</Styled.Text2>
        <br />
        <Styled.Text2>Book a Chat Session</Styled.Text2>
      </Styled.TextContainer>
    </Styled.CardContainer>
  );
};
export default TherapistCardComponent;
