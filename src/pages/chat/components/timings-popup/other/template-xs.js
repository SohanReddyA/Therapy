import StyledXs from "./template-xs.styled";

const OtherTimingsPopupXs = ({ time, handleClose }) => {
  const onClose = () => {
    handleClose();
  };
  return (
    <>
      <StyledXs.Container>
        <StyledXs.TitleText>User&apos;s Preferred time</StyledXs.TitleText>
        {time.length > 0 &&
          time.map((element, index) => (
            <StyledXs.TimeSelectionContainer>
              <StyledXs.TimeSelection>
                {element.start + " to " + element.end}
              </StyledXs.TimeSelection>
            </StyledXs.TimeSelectionContainer>
          ))}

        {!time.length && (
          <StyledXs.TimeSelectionContainer>
            <StyledXs.TimeSelection>
              -- to --
            </StyledXs.TimeSelection>
          </StyledXs.TimeSelectionContainer>
        )}
      </StyledXs.Container>
      <StyledXs.OuterBackground onClick={() => onClose()} />
    </>
  );
};

export default OtherTimingsPopupXs;
