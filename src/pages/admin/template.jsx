import { useState } from 'react';
import DropdownSelect from './components/select/template';

const { default: Styled } = require('./template.styled');

const Admin = () => {
  const data = [
    {
      chatID: '123',
      user: 'Nam12 ',
      therapist: 'Thearaaiosdh',
    },
    {
      chatID: '124',
      user: 'Nam122',
      therapist: 'Thearaaiosdh3',
    },
    // Add more rows here if needed
  ];
  const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7'];
  const therapists = [
    'therapist1',
    'therapist2',
    'therapist3',
    'therapist4',
    'therapist5',
    'therapist6',
    'therapist7',
  ];
  const [assignedValue, setAssignedValue] = useState({
    user: '',
    therapist: '',
  });
  const handleChange = (value, type) => {
    setAssignedValue({ ...assignedValue, [type]: value });
  };
  return (
    <Styled.Container>
      <Styled.TableContainer>
        <thead>
          <tr>
            <Styled.TableHeader>Chat ID</Styled.TableHeader>
            <Styled.TableHeader>User</Styled.TableHeader>
            <Styled.TableHeader>Therapist</Styled.TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Styled.TableCell>{item.chatID}</Styled.TableCell>
              <Styled.TableCell>{item.user}</Styled.TableCell>
              <Styled.TableCell>{item.therapist}</Styled.TableCell>
            </tr>
          ))}
        </tbody>
      </Styled.TableContainer>
      <Styled.SelectContainer>
        <Styled.LabelContainer>
          <p>User</p>
          <DropdownSelect
            options={users}
            defaultValue={''}
            onChange={(value) => handleChange(value, 'user')}
          />
        </Styled.LabelContainer>
        <Styled.LabelContainer>
          <p>Therapist</p>
          <DropdownSelect
            options={therapists}
            defaultValue={''}
            onChange={(value) => handleChange(value, 'therapist')}
          />
        </Styled.LabelContainer>
        <Styled.LabelContainer>
          <Styled.TimeSelection
            onClick={() => {
              console.log(assignedValue);
            }}>
            Assign
          </Styled.TimeSelection>
        </Styled.LabelContainer>
      </Styled.SelectContainer>
    </Styled.Container>
  );
};

export default Admin;
