import { useState } from 'react';
import Styled from './template.styled';

const DropdownSelect = ({ defaultValue, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

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
