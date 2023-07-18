import styled from 'styled-components';
const Container = styled.div`
  user-select: none;
  display: flex;
  position: fixed;
  width: max-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
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

const Styled = {
  Container,
  OuterBackground,
};

export default Styled;
