import { useState } from 'react';
import AnxietyController from './template.controller';

const { default: Styled } = require('../../template.styled');

const AnxietyQuiz = ({ Quiz }) => {
  const {
    prev,
    next,
    submit,
    current,
    count,
    checked,
    setChecked,
    finalScore,
  } = AnxietyController(Quiz);
  return (
    <Styled.Container>
      <Styled.Label quiztype="Anxiety">Anxiety Quiz</Styled.Label>
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
              quiztype="Anxiety">
              <img
                alt={''}
                src={
                  checked != 0
                    ? '/images/checkIcon.png'
                    : '/images/orangeCheck.png'
                }
                height={'32px'}
                width={'32px'}
              />
              <Styled.QuizOptionText checked={checked === 0} quiztype="Anxiety">
                {current.Options[0].Option}
              </Styled.QuizOptionText>
            </Styled.QuizOption>
            <Styled.QuizOption
              checked={checked === 1}
              onClick={() => setChecked(1)}
              quiztype="Anxiety">
              <img
                alt={''}
                src={
                  checked != 1
                    ? '/images/checkIcon.png'
                    : '/images/orangeCheck.png'
                }
                height={'32px'}
                width={'32px'}
              />
              <Styled.QuizOptionText checked={checked === 1} quiztype="Anxiety">
                {current.Options[1].Option}
              </Styled.QuizOptionText>
            </Styled.QuizOption>
            <Styled.QuizOption
              checked={checked === 2}
              onClick={() => setChecked(2)}
              quiztype="Anxiety">
              <img
                alt={''}
                src={
                  checked != 2
                    ? '/images/checkIcon.png'
                    : '/images/orangeCheck.png'
                }
                height={'32px'}
                width={'32px'}
              />
              <Styled.QuizOptionText checked={checked === 2} quiztype="Anxiety">
                {current.Options[2].Option}
              </Styled.QuizOptionText>
            </Styled.QuizOption>
            <Styled.QuizOption
              checked={checked === 3}
              onClick={() => setChecked(3)}
              quiztype="Anxiety">
              <img
                alt={''}
                src={
                  checked != 3
                    ? '/images/checkIcon.png'
                    : '/images/orangeCheck.png'
                }
                height={'32px'}
                width={'32px'}
              />
              <Styled.QuizOptionText checked={checked === 3} quiztype="Anxiety">
                {current.Options[3].Option}
              </Styled.QuizOptionText>
            </Styled.QuizOption>
          </Styled.QuizOptionsContainer>
          <Styled.ButtonFlex>
            {count != 0 && (
              <Styled.BackButton quiztype="Anxiety" onClick={prev}>
                Back
              </Styled.BackButton>
            )}
            {count != 6 && (
              <Styled.NextButton quiztype="Anxiety" onClick={next}>
                Next
              </Styled.NextButton>
            )}
            {count == 6 && (
              <Styled.NextButton quiztype="Anxiety" onClick={submit}>
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
              You scored a {finalScore}/21 on the scale.
            </Styled.QuestionNumber>
            <Styled.QuestionText>
              Risk Metrics: <br />
              <br />
              0-4: Minimal Anxiety <br />
              5-9 : Mild Anxiety
              <br />
              10-14 : Moderate Anxiety
              <br />
              15-21 : Severe Anxiety <br />
            </Styled.QuestionText>
          </Styled.QuestionContainer>
        </>
      )}
    </Styled.Container>
  );
};

export default AnxietyQuiz;
