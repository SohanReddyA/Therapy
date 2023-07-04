import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 80px 120px;
  transform: translate(-50%, -50%);
  width: 75vw;
  height: 75vh;
  background: #ffffff;
  border-radius: 64px;
  display: flex;
  z-index: 9999;
  justify-content: center;
  align-items: center;
`;
const OuterBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;
const ModalContent = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  background-color: transparent;
  font-size: 18px;
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
