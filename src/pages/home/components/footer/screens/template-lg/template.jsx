const { default: Styled } = require('./template.styled');

const FooterLg = ({ setContactsOpen }) => {
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
        <Styled.MainContainer>
          <Styled.GroupContainer>
            <Styled.Heading>Quick Links</Styled.Heading>
            <Styled.LinksContainer>
              <Styled.Links onClick={() => setContactsOpen(true)}>
                About us
              </Styled.Links>
              <Styled.Links>Team</Styled.Links>
              <Styled.Links>Support</Styled.Links>
              <Styled.Links>Blog</Styled.Links>
              <Styled.Links>Privacy Policy</Styled.Links>
            </Styled.LinksContainer>
          </Styled.GroupContainer>
        </Styled.MainContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default FooterLg;
