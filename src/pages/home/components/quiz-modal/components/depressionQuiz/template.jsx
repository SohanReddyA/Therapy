import DepressionController from './template.controller';

const { default: Styled } = require('../../template.styled');

const DepressionQuiz = ({ Quiz, onClose }) => {
  const {
    prev,
    next,
    submit,
    current,
    count,
    checked,
    setChecked,
    finalScore,
  } = DepressionController(Quiz);
  return (
    <Styled.Container>
      <Styled.Label quiztype="Depression">Depression Quiz</Styled.Label>
      {finalScore == -1 && (
        <>
          <Styled.QuestionContainer>
            <Styled.QuestionNumber>Question {count + 1}</Styled.QuestionNumber>
            <Styled.QuestionText>{current.Question}</Styled.QuestionText>
          </Styled.QuestionContainer>
          <Styled.QuizOptionsContainer>
            <Styled.QuizOption
              checked={checked === 0}
              onClick={() => setChecked(0)}
              quiztype="Depression">
              <img
                alt={''}
                src={
                  checked != 0
                    ? '/images/checkIcon.png'
                    : '/images/greenCheck.png'
                }
                height={'32px'}
                width={'32px'}
              />
              <Styled.QuizOptionText
                checked={checked === 0}
                quiztype="Depression">
                {current.Options[0].Option}
              </Styled.QuizOptionText>
            </Styled.QuizOption>
            <Styled.QuizOption
              checked={checked === 1}
              onClick={() => setChecked(1)}
              quiztype="Depression">
              <img
                alt={''}
                src={
                  checked != 1
                    ? '/images/checkIcon.png'
                    : '/images/greenCheck.png'
                }
                height={'32px'}
                width={'32px'}
              />
              <Styled.QuizOptionText
                checked={checked === 1}
                quiztype="Depression">
                {current.Options[1].Option}
              </Styled.QuizOptionText>
            </Styled.QuizOption>
            <Styled.QuizOption
              checked={checked === 2}
              onClick={() => setChecked(2)}
              quiztype="Depression">
              <img
                alt={''}
                src={
                  checked != 2
                    ? '/images/checkIcon.png'
                    : '/images/greenCheck.png'
                }
                height={'32px'}
                width={'32px'}
              />
              <Styled.QuizOptionText
                checked={checked === 2}
                quiztype="Depression">
                {current.Options[2].Option}
              </Styled.QuizOptionText>
            </Styled.QuizOption>
            <Styled.QuizOption
              checked={checked === 3}
              onClick={() => setChecked(3)}
              quiztype="Depression">
              <img
                alt={''}
                src={
                  checked != 3
                    ? '/images/checkIcon.png'
                    : '/images/greenCheck.png'
                }
                height={'32px'}
                width={'32px'}
              />
              <Styled.QuizOptionText
                checked={checked === 3}
                quiztype="Depression">
                {current.Options[3].Option}
              </Styled.QuizOptionText>
            </Styled.QuizOption>
          </Styled.QuizOptionsContainer>
          <Styled.ButtonFlex>
            {count != 0 && (
              <Styled.BackButton quiztype="Depression" onClick={prev}>
                Back
              </Styled.BackButton>
            )}
            {count != 20 && (
              <Styled.NextButton quiztype="Depression" onClick={next}>
                Next
              </Styled.NextButton>
            )}
            {count == 20 && (
              <Styled.NextButton quiztype="Depression" onClick={submit}>
                Submit
              </Styled.NextButton>
            )}
          </Styled.ButtonFlex>
        </>
      )}
      {finalScore > -1 && (
        <>
          <Styled.QuestionContainer>
            <Styled.QuestionNumber>
              You scored a {finalScore}/63 on the scale.
            </Styled.QuestionNumber>
            <Styled.QuestionText>
              Risk Metrics: <br />
              <br />
              0-9 : Normal <br />
              10-13 : Mild <br />
              14-20 : Moderate <br />
              21-27 : Severe <br />
              28+ : Extremely Severe
            </Styled.QuestionText>
          </Styled.QuestionContainer>
        </>
      )}
    </Styled.Container>
  );
};

export default DepressionQuiz;
