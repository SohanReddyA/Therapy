const { default: Styled } = require('./template.styled');

const OurProcess = () => {
  return (
    <Styled.Container>
      <Styled.imageContainer>
        <Styled.Image src="/images/ourProcess.png"></Styled.Image>
      </Styled.imageContainer>
      <Styled.MainContainer>
        <Styled.MainFlex>
          <Styled.MainTitle>Our Process</Styled.MainTitle>
          <Styled.MainDesc>
            Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada.
            Tristique est tellus non maecenas in egestas aliquam. Eget dolor
            pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
          </Styled.MainDesc>
        </Styled.MainFlex>
        <Styled.ProcessContainer>
          <Styled.ProcessImage src="/images/Process1.png" />
          <Styled.ProcessFlex>
            <Styled.ProcessTitle>Discovery</Styled.ProcessTitle>
            <Styled.ProcessDesc>
              User takes the standardized quiz. Advised to take it more than
              once to normalise the results.
            </Styled.ProcessDesc>
          </Styled.ProcessFlex>
        </Styled.ProcessContainer>
        <Styled.ProcessContainer>
          <Styled.ProcessImage src="/images/Process2.png" />
          <Styled.ProcessFlex>
            <Styled.ProcessTitle>Plan</Styled.ProcessTitle>
            <Styled.ProcessDesc>
              Look at the therapist suggestion given by us or look at the other
              available therapists.
            </Styled.ProcessDesc>
          </Styled.ProcessFlex>
        </Styled.ProcessContainer>
        <Styled.ProcessContainer>
          <Styled.ProcessImage src="/images/Process3.png" />
          <Styled.ProcessFlex>
            <Styled.ProcessTitle>Execute</Styled.ProcessTitle>
            <Styled.ProcessDesc>
              Start talking to the therapists by a simple messaging option and
              that’s how we start
            </Styled.ProcessDesc>
          </Styled.ProcessFlex>
        </Styled.ProcessContainer>
        <Styled.ProcessContainer>
          <Styled.ProcessImage src="/images/Process4.png" />
          <Styled.ProcessFlex>
            <Styled.ProcessTitle>Deliver</Styled.ProcessTitle>
            <Styled.ProcessDesc>
              Look at the blogs and content created by us, will keep you on
              track!
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