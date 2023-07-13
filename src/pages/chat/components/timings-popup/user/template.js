import { toast } from 'react-hot-toast';
import DropdownSelect from './components/time-select/template';
import Styled from './template.styled';

const UserTimingsPopup = ({ handleClose, time, setTime }) => {
  const handleChange = (index, value, type) => {
    const temp = [...time];
    temp[index][type] = value;
    setTime(temp);
  };
  const CreateNew = () => {
    if (time[time.length - 1].start && time[time.length - 1].end) {
      const temp = [...time];
      temp.push({ start: '', end: '' });
      setTime(temp);
    } else {
      toast.error('Fill the current time before adding a new one.');
    }
  };
  const onClose = () => {
    if (!(time[time.length - 1].start && time[time.length - 1].end)) {
      const temp = [...time];
      temp.pop();
      setTime(temp);
    }
    //Add function to save here
    handleClose();
  };
  return (
    <>
      <Styled.Container>
        <Styled.TitleText>
          Select your preferred time based on your availability
        </Styled.TitleText>
        {time.map((element, index) => (
          <Styled.TimeSelectionContainer key={index}>
            <DropdownSelect
              defaultValue={element.start}
              onChange={(value) => handleChange(index, value, 'start')}
            />
            <Styled.TitleText>to</Styled.TitleText>
            <DropdownSelect
              defaultValue={element.end}
              onChange={(value) => handleChange(index, value, 'end')}
            />
          </Styled.TimeSelectionContainer>
        ))}
        <Styled.TimeSelection
          onClick={() => {
            CreateNew();
          }}>
          Add a preferred time
        </Styled.TimeSelection>
      </Styled.Container>
      <Styled.OuterBackground onClick={() => onClose()} />
    </>
  );
};

export default UserTimingsPopup;
