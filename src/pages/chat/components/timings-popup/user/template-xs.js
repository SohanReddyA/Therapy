import { toast } from 'react-hot-toast';
import DropdownSelect from './components/time-select/template';
import StyledXs from './template-xs.styled';
import DropdownSelectXs from './components/time-select/template-xs';

const UserTimingsPopupXs = ({ handleClose, time, setTime }) => {
  const handleChange = (index, value, type) => {
    const temp = [...time];
    temp[index][type] = value;
    setTime(temp);
  };
  const CreateNew = () => {
    if(!time.length) {
      const temp = [...time];
      temp.push({ start: '', end: '' });
      setTime(temp);
    }
    else if (time[time.length - 1].start && time[time.length - 1].end) {
      const temp = [...time];
      temp.push({ start: '', end: '' });
      setTime(temp);
    } else {
      toast.error('Fill the current time before adding a new one.');
    }
  };
  const onClose = () => {
    if (!(time.length && time[time.length - 1].start && time[time.length - 1].end)) {
      const temp = [...time];
      temp.pop();
      setTime(temp);
    }
    //Add function to save here
    handleClose();
  };
  return (
    <>
      <StyledXs.Container>
        <StyledXs.TitleText>
          Select preferred time based on your availability
        </StyledXs.TitleText>
        {time.map((element, index) => (
          <StyledXs.TimeSelectionContainer key={index}>
            <DropdownSelectXs
              defaultValue={element.start}
              onChange={(value) => handleChange(index, value, 'start')}
            />
            <StyledXs.TitleText>to</StyledXs.TitleText>
            <DropdownSelectXs
              defaultValue={element.end}
              onChange={(value) => handleChange(index, value, 'end')}
            />
          </StyledXs.TimeSelectionContainer>
        ))}
        <StyledXs.TimeSelection
          onClick={() => {
            CreateNew();
          }}>
          Add a preferred time
        </StyledXs.TimeSelection>
      </StyledXs.Container>
      <StyledXs.OuterBackground onClick={() => onClose()} />
    </>
  );
};

export default UserTimingsPopupXs;
