import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TableContainer = styled.table`
  margin-top: 100px;
  width: 50%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const SelectContainer = styled.div`
  margin-top: 100px;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  TableContainer,
  TableHeader,
  TableCell,
  SelectContainer,
  LabelContainer,
  TimeSelection,
};

export default Styled;
