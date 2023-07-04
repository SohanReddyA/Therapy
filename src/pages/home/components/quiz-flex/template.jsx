const { default: Styled } = require('./template.styled');

const QuizFlex = ({ innerRef, ADHD, Anxiety, Depression }) => {
  return (
    <Styled.Container ref={innerRef}>
      <Styled.CardContainer color="#284E4F">
        <Styled.image src="/images/card1.png" />
        <Styled.InfoBox color="#EDF4F4">
          <Styled.InfoIcon src="/images/info-circle-1.png"></Styled.InfoIcon>
          <Styled.InfoText color="#284E4F">
            {' '}
            Over 32% of India&apos;s population suffers from depression{' '}
          </Styled.InfoText>
        </Styled.InfoBox>
        <Styled.CardTitle color="#284E4F">Depression</Styled.CardTitle>
        <Styled.CardText>
          Depression is a mental health condition that can affect a
          person&apos;s mood, behavior, and overall quality of life. People with
          depression may feel sad, hopeless, or anxious for an extended period
          of time. In addition to emotional symptoms, depression can also cause
          physical symptoms, such as changes in appetite or sleep patterns,
          fatigue, and unexplained aches and pains.
        </Styled.CardText>
        <Styled.CardButton color="#284E4F" onClick={() => Depression(true)}>
          Take the Quiz
        </Styled.CardButton>
      </Styled.CardContainer>
      <Styled.CardContainer color="#FE981C">
        <Styled.image src="/images/card2.png" />
        <Styled.InfoBox color="#FFF5E8">
          <Styled.InfoIcon src="/images/info-circle-2.png"></Styled.InfoIcon>
          <Styled.InfoText color="#FE981C">
            {' '}
            Over 32% of India&apos;s population suffers from depression{' '}
          </Styled.InfoText>
        </Styled.InfoBox>
        <Styled.CardTitle color="#FE981C">Anxiety</Styled.CardTitle>
        <Styled.CardText>
          People with anxiety often experience excessive and persistent fear or
          apprehension, even in situations that are not truly dangerous.
          It&apos;s like having a built-in alarm system that goes off too
          frequently. Anxiety can also bring physical symptoms like a racing
          heart, sweating, trembling, or tense muscles. Our therapists are here
          to help you understand and manage your anxiety.
        </Styled.CardText>
        <Styled.CardButton color="#FE981C" onClick={() => Anxiety(true)}>
          Take the Quiz
        </Styled.CardButton>
      </Styled.CardContainer>
      <Styled.CardContainer color="#0F60A0">
        <Styled.image src="/images/card3.png" />
        <Styled.InfoBox color="#ECF7F9">
          <Styled.InfoIcon src="/images/info-circle-3.png"></Styled.InfoIcon>
          <Styled.InfoText color="#0F60A0">
            {' '}
            Over 32% of India’s population suffers from depression{' '}
          </Styled.InfoText>
        </Styled.InfoBox>
        <Styled.CardTitle color="#0F60A0">ADHD</Styled.CardTitle>
        <Styled.CardText>
          ADHD is when some people&apos;s brains work differently, making it
          hard to pay attention and stay focused. It can bring lots of energy
          and curiosity but can also make it tricky to control. With the right
          strategies and support, you can learn to manage your unique powers and
          overcome challenges!
        </Styled.CardText>
        <Styled.CardButton
          color="#0F60A0"
          onClick={() => {
            ADHD(true);
          }}>
          Take the Quiz
        </Styled.CardButton>
      </Styled.CardContainer>
    </Styled.Container>
  );
};

export default QuizFlex;
