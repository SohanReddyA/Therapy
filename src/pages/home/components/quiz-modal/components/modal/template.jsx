const { default: Styled } = require('./template.styled');

const Modal = ({ onClose, children }) => {
  return (
    <>
      <Styled.OuterBackground />
      <Styled.ModalOverlay>
        <Styled.ModalContent>
          {children}
          <Styled.CloseButton
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
