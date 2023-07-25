import styled from 'styled-components';

const SelectWrapper = styled.div`
  user-select: none;
  position: relative;
  display: inline-block;
`;

const SelectButton = styled.button`
  user-select: none;
  border-radius: 16px;
  background: #5627b0;
  min-width: 130px;
  color: #fff;
  min-height: 40px;
  padding: 10px 10px;
  text-align: center;
  user-select: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  user-select: none;
  position: absolute;
  top: 100%;
  left: 0;
  max-height: 400px;
  width: 100%;
  overflow: auto;
  z-index: 1000;
  padding: 0;
  margin: 0;
  list-style-type: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const DropdownItem = styled.li`
  user-select: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Styled = {
  SelectWrapper,
  SelectButton,
  DropdownList,
  DropdownItem,
};

export default Styled;
