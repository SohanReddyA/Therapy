import Styled from './template.styled';

const OtherTimingsPopup = ({ time, handleClose }) => {
  const onClose = () => {
    handleClose();
  };
  return (
    <>
      <Styled.Container>
        <Styled.TitleText>User&apos;s Preferred time</Styled.TitleText>
        {time.map((element, index) => (
          <Styled.TimeSelectionContainer key={index}>
            <Styled.TimeSelection>
              {element.start + ' to ' + element.end}
            </Styled.TimeSelection>
          </Styled.TimeSelectionContainer>
        ))}
      </Styled.Container>
      <Styled.OuterBackground onClick={() => onClose()} />
    </>
  );
};

export default OtherTimingsPopup;
