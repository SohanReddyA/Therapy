import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
`;

const getLabel = (type) => {
  if (type == 'Depression') {
    return `
      background: rgba(166, 198, 199, 0.2);
      color: #284e4f;`;
  } else if (type == 'Anxiety') {
    return `
      background: rgba(255, 204, 142, 0.20);
      color: #FE981C;`;
  }
  return `
    background: rgba(158, 213, 226, 0.20);
    color: #0F60A0;`;
};

const Label = styled.div`
  display: inline-flex;
  width: fit-content;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 10px;
  ${(props) => getLabel(props.quiztype)}
  border-radius: 12px;
  font-size: 18px;

  font-weight: 600;
  line-height: 140%;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const QuestionNumber = styled.div`
  color: #1a1a1a;
  font-size: 32px;

  font-weight: 700;
  line-height: 140%;
`;

const QuestionText = styled.div`
  color: #1a1a1a;
  font-size: 24px;

  font-weight: 500;
  line-height: 140%;
`;

const QuizOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
`;

const getColor = (type) => {
  if (type == 'Depression') {
    return `border-radius: 16px;
    border: 0.5px solid #284E4F;
    background: rgba(166, 198, 199, 0.20);`;
  } else if (type == 'Anxiety') {
    return `border-radius: 16px;
    border: 0.5px solid #FE981C;
    background: rgba(255, 204, 142, 0.20);`;
  }
  return `border-radius: 16px;
  border: 0.5px solid #0F60A0;
  background: rgba(158, 213, 226, 0.20);`;
};

const QuizOption = styled.div`
  grid-column: span 1 / span 1;
  cursor: pointer;
  display: inline-flex;
  padding: 20px 0px 20px 32px;
  align-items: center;
  gap: 16px;
  ${(props) => (props.checked ? getColor(props.quiztype) : '')}
`;

const getOptionTextColor = (type) => {
  if (type == 'Depression') return '#284E4F';
  else if (type == 'Anxiety') return '#FE981C';
  return '#0F60A0';
};
const QuizOptionText = styled.div`
  color: ${(props) =>
    props.checked ? getOptionTextColor(props.quiztype) : '#1a1a1a'};
  ${(props) => (props.checked ? 'font-weight: 600' : '')};
  font-size: 20px;

  line-height: 140%;
  user-select: none;
`;

const ButtonFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const getBackButton = (type) => {
  if (type == 'Depression') {
    return `
    border-radius: 30px;
    border: 1px solid #284E4F;
    background: #FFF;
    padding: 12px 24px;
    color: #284E4F;
    font-size: 24px;
    
    font-weight: 700;
    line-height: 140%;`;
  } else if (type == 'Anxiety') {
    return `
    border-radius: 30px;
    border: 1px solid #FE981C;
    background: #FFF;
    color: #FE981C;
    padding: 12px 24px;
    font-size: 24px;
    
    font-weight: 700;
    line-height: 140%;`;
  }
  return `
    border-radius: 30px;
    border: 1px solid #0F60A0;
    padding: 12px 24px;
    background: #FFF;
    color: #0F60A0;
    font-size: 24px;
    
    font-weight: 700;
    line-height: 140%;
    `;
};

const BackButton = styled.button`
  ${(props) => getBackButton(props.quiztype)}
`;

const getNextButton = (type) => {
  if (type == 'Depression') {
    return `
    border-radius: 30px;
    background: #284E4F;
    padding: 12px 24px;
    color: #FFF;
    font-size: 24px;
    
    font-weight: 700;
    line-height: 140%;`;
  } else if (type == 'Anxiety') {
    return `
    border-radius: 30px;
    padding: 12px 24px;
    background: #FE981C;
    color: #FFF;
    font-size: 24px;
    
    font-weight: 700;
    line-height: 140%;`;
  }
  return `
    border-radius: 30px;
    padding: 12px 24px;
    background: #0F60A0;
    color: #FFF;
    font-size: 24px;
    
    font-weight: 700;
    line-height: 140%;
    `;
};

const NextButton = styled.button`
  ${(props) => getNextButton(props.quiztype)}
`;

const Styled = {
  Container,
  Label,
  QuestionContainer,
  QuestionNumber,
  QuestionText,
  QuizOptionsContainer,
  QuizOption,
  QuizOptionText,
  ButtonFlex,
  BackButton,
  NextButton,
};

export default Styled;
