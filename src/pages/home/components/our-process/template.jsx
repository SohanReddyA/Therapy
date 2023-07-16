const { default: Styled } = require('./template.styled');

const OurProcess = () => {
  return (
    <Styled.Container>
      <Styled.imageContainer>
        <Styled.Image src="/images/ourProcess.png"></Styled.Image>
      </Styled.imageContainer>
      <Styled.MainContainer>
        <Styled.MainFlex>
          <Styled.MainTitle>Your Journey to Healing</Styled.MainTitle>
          <Styled.MainDesc>
            Keep calm, we are here to help you. Navigating with Care, Our
            Process is Designed to Empower You on Your Path to Healing and
            Well-being.
          </Styled.MainDesc>
        </Styled.MainFlex>
        <Styled.ProcessContainer>
          <Styled.ProcessImage src="/images/Process1.png" />
          <Styled.ProcessFlex>
            <Styled.ProcessTitle>Take the Quiz</Styled.ProcessTitle>
            <Styled.ProcessDesc>
              Begin your journey towards self-discovery and understanding by
              taking our caring quiz. Gain valuable insights into your mental
              well-being and embark on a path of personal growth.
            </Styled.ProcessDesc>
          </Styled.ProcessFlex>
        </Styled.ProcessContainer>
        <Styled.ProcessContainer>
          <Styled.ProcessImage src="/images/Process2.png" />
          <Styled.ProcessFlex>
            <Styled.ProcessTitle>Chat Anonymously</Styled.ProcessTitle>
            <Styled.ProcessDesc>
              Engage in meaningful, confidential conversations with our
              compassionate professionals who provide a safe space for you to
              express yourself. Feel heard, supported, and validated as you
              navigate your challenges.
            </Styled.ProcessDesc>
          </Styled.ProcessFlex>
        </Styled.ProcessContainer>
        <Styled.ProcessContainer>
          <Styled.ProcessImage src="/images/Process3.png" />
          <Styled.ProcessFlex>
            <Styled.ProcessTitle>
              Find the right therapist for you
            </Styled.ProcessTitle>
            <Styled.ProcessDesc>
              Explore our diverse community of therapists, each with their
              unique expertise and approach. We&apos;ll help you find the
              therapist who resonates with you, ensuring a strong therapeutic
              connection.
            </Styled.ProcessDesc>
          </Styled.ProcessFlex>
        </Styled.ProcessContainer>
        <Styled.ProcessContainer>
          <Styled.ProcessImage src="/images/Process4.png" />
          <Styled.ProcessFlex>
            <Styled.ProcessTitle>
              Proceed to classic therapy sessions
            </Styled.ProcessTitle>
            <Styled.ProcessDesc>
              Transition to traditional therapy sessions, where you&apos;ll
              receive the personalized care and attention you deserve. Together
              with your dedicated therapist, embark on a transformative journey
              towards healing and empowerment.
            </Styled.ProcessDesc>
          </Styled.ProcessFlex>
        </Styled.ProcessContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default OurProcess;

// Blog(Decide site and check if it has integrations)
// Database
// Login
//
//
//
