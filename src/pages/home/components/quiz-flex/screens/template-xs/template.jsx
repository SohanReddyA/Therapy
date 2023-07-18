const { default: Styled } = require('./template.styled');

const QuizFlexXs = ({ innerRef, ADHD, Anxiety, Depression }) => {
  return (
    <Styled.Container>
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
          Depression is like having a heavy cloud that follows you, casting a
          shadow on your thoughts and emotions. It can make everyday tasks feel
          overwhelming and drain your energy. With the right support and
          treatment, you can find relief and regain control. Embracing
          self-care, therapy, and the love of your support network can help you
          break free from the grip of depression.
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
            You&apos;re not alone, 42 Mn people in India struggle with anxiety.{' '}
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
            Millions of children and adults suffer from ADHD in India{' '}
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

export default QuizFlexXs;
