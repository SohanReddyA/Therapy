import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: flex;
  width: 50vw;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 12px 16px;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  z-index: 9999;
  border-radius: 16px;
  background: #e6e1ef;
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

const TitleText = styled.div`
  user-select: none;
  color: #1a1a1a;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  user-select: none;
  line-height: 28.571px;
`;

const TimeSelectionContainer = styled.div`
  user-select: none;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const TimeSelection = styled.div`
  user-select: none;
  border-radius: 16px;
  background: #5627b0;
  min-width: 173px;
  color: #fff;
  cursor: pointer;
  padding: 10px 10px;
  text-align: center;
  user-select: none;
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
