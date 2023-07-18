const { default: Styled } = require('./template.styled');

const FooterXs = ({ setContactsOpen }) => {
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.LogoContainer>
          <Styled.Logo>Friennly</Styled.Logo>
          <Styled.Text>
            Our mission is to provide accessible and affordable mental care for
            students and young professionals.
          </Styled.Text>
        </Styled.LogoContainer>
      </Styled.InnerContainer>
      <Styled.MainContainer>
        <Styled.Heading onClick={() => setContactsOpen(true)}>
          About us
        </Styled.Heading>
        <Styled.Heading>Team</Styled.Heading>
        <Styled.Heading>Support</Styled.Heading>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default FooterXs;
