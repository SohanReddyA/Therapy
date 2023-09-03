import Modal from '@/src/pages/common/modal/template';
import React from 'react';

const TherapistProfilePopup = ({ therapist, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Styled.Container>
        <Styled.Logo />
        <Styled.MainContainer>
            <Styled.TherapistImage s />

      </Styled.Container>
    </Modal>
  );
};
