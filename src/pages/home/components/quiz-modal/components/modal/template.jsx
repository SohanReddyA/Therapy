const { default: Styled } = require('./template.styled');

const Modal = ({ onClose, children, quizType }) => {
  return (
    <>
      <Styled.OuterBackground />
      <Styled.ModalOverlay>
        <Styled.ModalContent>
          {children}
          <Styled.CloseButton
            quizType={quizType}
            onClick={() => {
              onClose();
            }}>
            X
          </Styled.CloseButton>
        </Styled.ModalContent>
      </Styled.ModalOverlay>
    </>
  );
};

export default Modal;
