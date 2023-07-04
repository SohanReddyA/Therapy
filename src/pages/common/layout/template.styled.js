import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  cursor: pointer;
  bottom: 60px;
  right: 60px;
  border-radius: 40px;
  background: #5627b0;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const ButtonText = styled.div`
  color: #fff;
  font-size: 36px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const Styled = {
  Container,
  ButtonText,
};

export default Styled;
