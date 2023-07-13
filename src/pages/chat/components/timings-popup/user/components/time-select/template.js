import { useState } from 'react';
import Styled from './template.styled';

const DropdownSelect = ({ defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const options = [
    '12 AM',
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <Styled.SelectWrapper>
      <Styled.SelectButton onClick={toggleDropdown}>
        {selectedOption ? selectedOption : ''}
      </Styled.SelectButton>
      {isOpen && (
        <Styled.DropdownList>
          {options.map((option) => (
            <Styled.DropdownItem
              key={option}
              onClick={() => handleOptionClick(option)}>
              {option}
            </Styled.DropdownItem>
          ))}
        </Styled.DropdownList>
      )}
    </Styled.SelectWrapper>
  );
};

export default DropdownSelect;
