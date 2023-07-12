import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 25vw;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 12px 16px;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 9999;
  border-radius: 16px;
  background: #e6e1ef;
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

const TitleText = styled.div`
  color: #1a1a1a;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.571px;
`;

const TimeSelectionContainer = styled.div`
  display: flex;
  gap: 120px;
  justify-content: center;
  align-items: center;
`;

const TimeSelection = styled.div`
  border-radius: 16px;
  background: #5627b0;
  min-width: 173px;
  color: #fff;
  padding: 10px 10px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Styled = {
  Container,
  OuterBackground,
  TitleText,
  TimeSelectionContainer,
  TimeSelection,
};

export default Styled;
