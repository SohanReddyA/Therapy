const { useState } = require('react');

const ADHDController = (Quiz) => {
  const [checked, setChecked] = useState(0);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(Quiz[count]);
  const [score, setScore] = useState({
    0: { option: 0, value: null },
    1: { option: 0, value: null },
    2: { option: 0, value: null },
    3: { option: 0, value: null },
    4: { option: 0, value: null },
    5: { option: 0, value: null },
    6: { option: 0, value: null },
    7: { option: 0, value: null },
    8: { option: 0, value: null },
    9: { option: 0, value: null },
    10: { option: 0, value: null },
    11: { option: 0, value: null },
    12: { option: 0, value: null },
    13: { option: 0, value: null },
    14: { option: 0, value: null },
    15: { option: 0, value: null },
    16: { option: 0, value: null },
    17: { option: 0, value: null },
  });
  function next() {
    let c = count;
    console.log('Score', score);
    console.log('current', current.Options);
    setCount(c + 1);
    setChecked(0);
    let score1 = score;
    score1[String(count)] = {
      option: checked,
      value: current.Options[checked].value,
    };
    setScore(score1);
    setCurrent(Quiz[c + 1]);
  }
  function prev() {
    let c = count;
    console.log('Score', score[c - 1].option);
    setChecked(score[c - 1].option);
    setCount(c - 1);
    setCurrent(Quiz[c - 1]);
  }
  function submit() {
    let sr = 0;
    let score1 = score;
    score1[String(count)] = {
      option: checked,
      value: current.Options[checked].value,
    };
    setScore(score1);
    Object.keys(score1).forEach((key) => {
      sr += Number(score[key].value);
    });
    console.log(sr);
    alert('Your score is ' + sr);
  }
  return {
    prev,
    next,
    submit,
    score,
    count,
    current,
    checked,
    setChecked,
  };
};

export default ADHDController;
