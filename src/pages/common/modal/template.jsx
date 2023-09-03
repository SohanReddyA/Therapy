import Styled from './template.styled';
import React from 'react';
const Modal = ({ onClose, children, quizType }) => {
  return (
    <>
      <Styled.OuterBackground />
      <Styled.ModalOverlay>
        <Styled.ModalContent>
          {children}
          {onClose && (
            <Styled.CloseButton
              quizType={quizType}
              onClick={() => {
                onClose();
              }}>
              X
            </Styled.CloseButton>
          )}
        </Styled.ModalContent>
      </Styled.ModalOverlay>
    </>
  );
};

export default Modal;
