import { useState } from 'react';
import ADHDController from './template.controller';

const { default: Styled } = require('../../template.styled');

const ADHDQuiz = ({ Quiz }) => {
  const { prev, next, submit, current, count, checked, setChecked } =
    ADHDController(Quiz);
  return (
    <Styled.Container>
      <Styled.Label quiztype="ADHD">ADHD Quiz</Styled.Label>
      <Styled.QuestionContainer>
        <Styled.QuestionNumber>Question {count + 1}</Styled.QuestionNumber>
        <Styled.QuestionText>{current.Question}</Styled.QuestionText>
      </Styled.QuestionContainer>
      <Styled.QuizOptionsContainer>
        <Styled.QuizOption
          checked={checked === 0}
          onClick={() => setChecked(0)}
          quiztype="ADHD">
          <img
            alt={''}
            src={
              checked != 0 ? '/images/checkIcon.png' : '/images/blueCheck.png'
            }
            height={'32px'}
            width={'32px'}
          />
          <Styled.QuizOptionText checked={checked === 0} quiztype="ADHD">
            {current.Options[0].Option}
          </Styled.QuizOptionText>
        </Styled.QuizOption>
        <Styled.QuizOption
          checked={checked === 1}
          onClick={() => setChecked(1)}
          quiztype="ADHD">
          <img
            alt={''}
            src={
              checked != 1 ? '/images/checkIcon.png' : '/images/blueCheck.png'
            }
            height={'32px'}
            width={'32px'}
          />
          <Styled.QuizOptionText checked={checked === 1} quiztype="ADHD">
            {current.Options[1].Option}
          </Styled.QuizOptionText>
        </Styled.QuizOption>
        <Styled.QuizOption
          checked={checked === 2}
          onClick={() => setChecked(2)}
          quiztype="ADHD">
          <img
            alt={''}
            src={
              checked != 2 ? '/images/checkIcon.png' : '/images/blueCheck.png'
            }
            height={'32px'}
            width={'32px'}
          />
          <Styled.QuizOptionText checked={checked === 2} quiztype="ADHD">
            {current.Options[2].Option}
          </Styled.QuizOptionText>
        </Styled.QuizOption>
        <Styled.QuizOption
          checked={checked === 3}
          onClick={() => setChecked(3)}
          quiztype="ADHD">
          <img
            alt={''}
            src={
              checked != 3 ? '/images/checkIcon.png' : '/images/blueCheck.png'
            }
            height={'32px'}
            width={'32px'}
          />
          <Styled.QuizOptionText checked={checked === 3} quiztype="ADHD">
            {current.Options[3].Option}
          </Styled.QuizOptionText>
        </Styled.QuizOption>
        <Styled.QuizOption
          checked={checked === 4}
          onClick={() => setChecked(4)}
          quiztype="ADHD">
          <img
            alt={''}
            src={
              checked != 4 ? '/images/checkIcon.png' : '/images/blueCheck.png'
            }
            height={'32px'}
            width={'32px'}
          />
          <Styled.QuizOptionText checked={checked === 4} quiztype="ADHD">
            {current.Options[4].Option}
          </Styled.QuizOptionText>
        </Styled.QuizOption>
      </Styled.QuizOptionsContainer>
      <Styled.ButtonFlex>
        {count != 0 && (
          <Styled.BackButton quiztype="ADHD" onClick={prev}>
            Back
          </Styled.BackButton>
        )}
        {count != 17 && (
          <Styled.NextButton quiztype="ADHD" onClick={next}>
            Next
          </Styled.NextButton>
        )}
        {count == 17 && (
          <Styled.NextButton quiztype="ADHD" onClick={submit}>
            Submit
          </Styled.NextButton>
        )}
      </Styled.ButtonFlex>
    </Styled.Container>
  );
};

export default ADHDQuiz;
