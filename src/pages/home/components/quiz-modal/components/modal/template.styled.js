import styled from 'styled-components';

const ModalOverlay = styled.div`
  user-select: none;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 80px 120px;
  max-height: 90vh;

  max-width: 90vw;
  border-radius: 64px;
  @media (max-width: 768px) {
    padding: 20px 0px;
    max-height: 100vh;
    max-width: 100vw;
    border-radius: 32px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 40px;
  }

  transform: translate(-50%, -50%);
  min-width: 75vw;
  min-height: 75vh;
  width: min-content;
  @media (max-width: 420px) {
    width: max-content;
  }
  overflow-y: scroll;
  background: #ffffff;
  display: flex;
  z-index: 9999;
  justify-content: center;
  align-items: center;
`;
const OuterBackground = styled.div`
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;
const ModalContent = styled.div`
  user-select: none;
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
`;

const getColorClose = (type) => {
  if (type == 'Depression') {
    return `
      background: rgba(166, 198, 199, 0.2);
      color: #284e4f;`;
  } else if (type == 'Anxiety') {
    return `
      background: rgba(255, 204, 142, 0.20);
      color: #FE981C;`;
  }
  return `
    background: rgba(158, 213, 226, 0.20);
    color: #0F60A0;`;
};

const CloseButton = styled.button`
  position: absolute;
  user-select: none;
  top: 60px;
  padding: 0px 15px;
  right: 60px;
  @media (max-width: 420px) {
    top: 30px;
    padding: 0px 15px;
    right: 30px;
  }
  border: none;
  ${(props) => getColorClose(props.quizType)}
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
`;

const Styled = {
  ModalOverlay,
  ModalContent,
  CloseButton,
  OuterBackground,
};
// ({ onClose, children }) => {
//   return (
//     <ModalOverlay>
//       <ModalContent>
//         <CloseButton onClick={onClose}>X</CloseButton>
//         {children}
//       </ModalContent>
//     </ModalOverlay>
//   );
// };
export default Styled;
