import Styled from './template.styled';

const ContactUs = ({ setOpen }) => {
  return (
    <>
      <Styled.Container>
        <img src="/images/contactUs.svg" width="300px" height="300px" />
      </Styled.Container>
      <Styled.OuterBackground
        onClick={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default ContactUs;
