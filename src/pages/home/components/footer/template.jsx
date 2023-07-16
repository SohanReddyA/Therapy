const { default: Styled } = require('./template.styled');

const Footer = () => {
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
            <Styled.Heading>Our links</Styled.Heading>
            <Styled.LinksContainer>
              <Styled.Links>Home</Styled.Links>
              <Styled.Links>About us</Styled.Links>
              <Styled.Links>Services</Styled.Links>
              <Styled.Links>Team</Styled.Links>
              <Styled.Links>Blog</Styled.Links>
            </Styled.LinksContainer>
          </Styled.GroupContainer>
          <Styled.GroupContainer>
            <Styled.Heading>Our Services</Styled.Heading>
            <Styled.LinksContainer>
              <Styled.Links>Strategy & Research</Styled.Links>
              <Styled.Links>Web Development</Styled.Links>
              <Styled.Links>Web Solution</Styled.Links>
              <Styled.Links>Digital Marketing</Styled.Links>
              <Styled.Links>App Design</Styled.Links>
            </Styled.LinksContainer>
          </Styled.GroupContainer>
          <Styled.GroupContainer>
            <Styled.Heading>Others links</Styled.Heading>
            <Styled.LinksContainer>
              <Styled.Links>FAQ</Styled.Links>
              <Styled.Links>Portfolio</Styled.Links>
              <Styled.Links>Privacy Policy</Styled.Links>
              <Styled.Links>Terms & Conditions</Styled.Links>
              <Styled.Links>Support</Styled.Links>
            </Styled.LinksContainer>
          </Styled.GroupContainer>
        </Styled.MainContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default Footer;
