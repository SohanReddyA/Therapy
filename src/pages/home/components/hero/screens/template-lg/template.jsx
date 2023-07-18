import Styled from './template.styled';

const HeroLg = ({ executeScroll }) => {
  return (
    <Styled.Container>
      <Styled.HeroContainer>
        <Styled.HeroTitle>
          Anonymity is <span style={{ color: '#5627B0' }}>Priority</span>
        </Styled.HeroTitle>
        <Styled.HeroText1>
          Chat-Based Sessions to{' '}
          <span style={{ color: '#5627B0' }}>Connect</span> with Your Therapist
          and{' '}
          <span style={{ color: '#5627B0' }}>Begin Your Path to Healing</span>
        </Styled.HeroText1>
        <ul style={{ listStyleType: 'disc' }}>
          <Styled.HeroText2>
            Clear your confusions about your mental health
          </Styled.HeroText2>
          <Styled.HeroText2>
            Find a therapist who is best for you
          </Styled.HeroText2>
        </ul>
        <Styled.HeroButton onClick={executeScroll}>
          Take the Quiz
        </Styled.HeroButton>
      </Styled.HeroContainer>
      <img src="/images/HeroImage2.svg" alt="HeroImage" width={'50%'} />
    </Styled.Container>
  );
};

export default HeroLg;
