import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: flex;
  position: fixed;
  cursor: pointer;
  bottom: 60px;
  right: 60px;
  border-radius: 40px;
  background: #5627b0;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const ButtonText = styled.div`
  user-select: none;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const Styled = {
  Container,
  ButtonText,
};

export default Styled;
