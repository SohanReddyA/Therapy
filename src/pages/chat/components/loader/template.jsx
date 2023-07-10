const { default: Styled } = require('./template.styled');

const ChatLoader = ({ value }) => {
  return (
    <Styled.Container>
      <Styled.Logo>Friennly</Styled.Logo>
      <Styled.ProgressBar value={value} max={100}></Styled.ProgressBar>
    </Styled.Container>
  );
};

export default ChatLoader;
