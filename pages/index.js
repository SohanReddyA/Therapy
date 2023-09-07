import { Home } from '@/src/pages/home';
export default function HomePage(props) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  // const res1 = await fetch('https://therapy-mauve.vercel.app/api/quiz/ADHD');
  // const ADHDQuiz = await res1.json();
  const ADHDQuiz = [
    {
      Question:
        'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
      Options: [
        { Option: 'Sometimes', value: 2 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Often', value: 3 },
        { Option: 'Never', value: 0 },
        { Option: 'Rarely', value: 1 },
      ],
    },
    {
      Question:
        'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
      Options: [
        { Option: 'Often', value: 3 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Never', value: 0 },
        { Option: 'Sometimes', value: 2 },
      ],
    },
    {
      Question:
        'How often do you have problems remembering appointments or obligations?',
      Options: [
        { Option: 'Sometimes', value: 2 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Never', value: 0 },
        { Option: 'Often', value: 3 },
      ],
    },
    {
      Question:
        'When you have a task that requires a lot of thought, how often do you avoid or delay getting started',
      Options: [
        { Option: 'Sometimes', value: 2 },
        { Option: 'Never', value: 0 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Often', value: 3 },
      ],
    },
    {
      Question:
        'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
      Options: [
        { Option: 'Sometimes', value: 2 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Never', value: 0 },
        { Option: 'Often', value: 3 },
        { Option: 'Very Often', value: 4 },
      ],
    },
    {
      Question:
        'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
      Options: [
        { Option: 'Often', value: 3 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Never', value: 0 },
        { Option: 'Rarely', value: 1 },
      ],
    },
    {
      Question:
        'How often do you make careless mistakes when you have to work on a boring or difficult project?',
      Options: [
        { Option: 'Never', value: 0 },
        { Option: 'Often', value: 3 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Very Often', value: 4 },
      ],
    },
    {
      Question:
        'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
      Options: [
        { Option: 'Sometimes', value: 2 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Never', value: 0 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Often', value: 3 },
      ],
    },
    {
      Question:
        'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
      Options: [
        { Option: 'Often', value: 3 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Never', value: 0 },
        { Option: 'Rarely', value: 1 },
      ],
    },
    {
      Question:
        'How often do you misplace or have difficulty finding things at home or at work?',
      Options: [
        { Option: 'Often', value: 3 },
        { Option: 'Never', value: 0 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Sometimes', value: 2 },
      ],
    },
    {
      Question: 'How often are you distracted by activity or noise around you?',
      Options: [
        { Option: 'Very Often', value: 4 },
        { Option: 'Often', value: 3 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Never', value: 0 },
        { Option: 'Rarely', value: 1 },
      ],
    },
    {
      Question:
        'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
      Options: [
        { Option: 'Very Often', value: 4 },
        { Option: 'Never', value: 0 },
        { Option: 'Often', value: 3 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Sometimes', value: 2 },
      ],
    },
    {
      Question: 'How often do you feel restless or fidgety?',
      Options: [
        { Option: 'Often', value: 3 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Never', value: 0 },
        { Option: 'Rarely', value: 1 },
      ],
    },
    {
      Question:
        'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
      Options: [
        { Option: 'Very Often', value: 4 },
        { Option: 'Often', value: 3 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Never', value: 0 },
        { Option: 'Rarely', value: 1 },
      ],
    },
    {
      Question:
        'How often do you find yourself talking too much when you are in social situations?',
      Options: [
        { Option: 'Rarely', value: 1 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Often', value: 3 },
        { Option: 'Never', value: 0 },
        { Option: 'Very Often', value: 4 },
      ],
    },
    {
      Question:
        'When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
      Options: [
        { Option: 'Often', value: 3 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Never', value: 0 },
      ],
    },
    {
      Question:
        'How often do you have difficulty waiting your turn in situations when turn taking is required?',
      Options: [
        { Option: 'Never', value: 0 },
        { Option: 'Often', value: 3 },
        { Option: 'Sometimes', value: 2 },
        { Option: 'Rarely', value: 1 },
        { Option: 'Very Often', value: 4 },
      ],
    },
    {
      Question: 'How often do you interrupt others when they are busy?',
      Options: [
        { Option: 'Rarely', value: 1 },
        { Option: 'Never', value: 0 },
        { Option: 'Often', value: 3 },
        { Option: 'Very Often', value: 4 },
        { Option: 'Sometimes', value: 2 },
      ],
    },
  ];
  // const res2 = await fetch('https://therapy-mauve.vercel.app/api/quiz/Anxiety');
  // const AnxietyQuiz = await res2.json();
  const AnxietyQuiz = [
    {
      Question: 'Feeling nervous, anxious, or on edge',
      Options: [
        { Option: 'Several Days', value: 1 },
        { Option: 'Nearly every day', value: 3 },
        { Option: 'Not at all', value: 0 },
        { Option: 'More than half the days', value: 2 },
      ],
    },
    {
      Question: 'Not being able to stop or control worrying',
      Options: [
        { Option: 'Several Days', value: 1 },
        { Option: 'Not at all', value: 0 },
        { Option: 'Nearly every day', value: 3 },
        { Option: 'More than half the days', value: 2 },
      ],
    },
    {
      Question: 'Worrying too much about different things',
      Options: [
        { Option: 'More than half the days', value: 2 },
        { Option: 'Not at all', value: 0 },
        { Option: 'Nearly every day', value: 3 },
        { Option: 'Several Days', value: 1 },
      ],
    },
    {
      Question: 'Trouble relaxing',
      Options: [
        { Option: 'More than half the days', value: 2 },
        { Option: 'Not at all', value: 0 },
        { Option: 'Nearly every day', value: 3 },
        { Option: 'Several Days', value: 1 },
      ],
    },
    {
      Question: 'Being so restless that it is hard to sit still',
      Options: [
        { Option: 'Several Days', value: 1 },
        { Option: 'Nearly every day', value: 3 },
        { Option: 'Not at all', value: 0 },
        { Option: 'More than half the days', value: 2 },
      ],
    },
    {
      Question: 'Becoming easily annoyed or irritable',
      Options: [
        { Option: 'Several Days', value: 1 },
        { Option: 'More than half the days', value: 2 },
        { Option: 'Nearly every day', value: 3 },
        { Option: 'Not at all', value: 0 },
      ],
    },
    {
      Question: 'Feeling afraid, as if something awful might happen',
      Options: [
        { Option: 'Not at all', value: 0 },
        { Option: 'More than half the days', value: 2 },
        { Option: 'Nearly every day', value: 3 },
        { Option: 'Several Days', value: 1 },
      ],
    },
  ];
  // const res3 = await fetch(
  //   'https://therapy-mauve.vercel.app/api/quiz/depression'
  // );
  // const depressionQuiz = await res3.json();
  const depressionQuiz = [
    {
      Question:
        'This depression inventory can be self-scored. The scoring scale is at the end of the questionnaire. ',
      Options: [
        { Option: 'I do not feel sad.', value: 0 },
        {
          Option: "I am so sad and unhappy that I can't stand it.",
          value: 3,
        },
        {
          Option: "I am sad all the time and I can't snap out of it.",
          value: 2,
        },
        { Option: 'I feel sad', value: 1 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option:
            'I feel the future is hopeless and that things cannot improve.',
          value: 3,
        },
        { Option: 'I feel I have nothing to look forward to.', value: 2 },
        {
          Option: 'I am not particularly discouraged about the future.',
          value: 0,
        },
        { Option: 'I feel discouraged about the future. ', value: 1 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option:
            'As I look back on my life, all I can see is a lot of failures.',
          value: 2,
        },
        { Option: 'I do not feel like a failure. ', value: 0 },
        {
          Option: 'I feel I have failed more than the average person.',
          value: 1,
        },
        { Option: ' I feel I am a complete failure as a person.', value: 3 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: "I don't enjoy things the way I used to.", value: 1 },
        {
          Option: "I don't get real satisfaction out of anything anymore.",
          value: 2,
        },
        {
          Option: 'I get as much satisfaction out of things as I used to.',
          value: 0,
        },
        { Option: 'I am dissatisfied or bored with everything.', value: 3 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: 'I feel guilty a good part of the time.', value: 1 },
        { Option: 'I feel guilty all of the time.', value: 3 },
        { Option: "I don't feel particularly guilty.", value: 0 },
        { Option: 'I feel quite guilty most of the time.', value: 2 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: "I don't feel I am being punished.", value: 0 },
        { Option: 'I feel I am being punished.', value: 3 },
        { Option: 'I feel I may be punished.', value: 1 },
        { Option: 'I expect to be punished.', value: 2 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: 'I hate myself.', value: 3 },
        { Option: "I don't feel disappointed in myself.", value: 0 },
        { Option: 'I am disappointed in myself.', value: 1 },
        { Option: 'I am disgusted with myself.', value: 2 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option: 'I blame myself for everything bad that happens',
          value: 3,
        },
        {
          Option: "I don't feel I am any worse than anybody else.",
          value: 0,
        },
        { Option: 'I blame myself all the time for my faults.', value: 2 },
        {
          Option: 'I am critical of myself for my weaknesses or mistakes.',
          value: 1,
        },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: " I don't have any thoughts of killing myself.", value: 0 },
        { Option: 'I would like to kill myself.', value: 2 },
        { Option: 'I would kill myself if I had the chance.', value: 3 },
        {
          Option:
            'I have thoughts of killing myself, but I would not carry them out.',
          value: 1,
        },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: "I don't cry any more than usual.", value: 0 },
        { Option: 'I cry more now than I used to.', value: 1 },
        { Option: 'I cry all the time now.', value: 2 },
        {
          Option:
            "I used to be able to cry, but now I can't cry even though I want to.",
          value: 3,
        },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option: 'I am quite annoyed or irritated a good deal of the time.',
          value: 2,
        },
        { Option: 'I am slightly more irritated now than usual.', value: 1 },
        {
          Option: 'I am no more irritated by things than I ever was.',
          value: 0,
        },
        { Option: 'I feel irritated all the time.', value: 3 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option: 'I am less interested in other people than I used to be.',
          value: 1,
        },
        { Option: 'I have not lost interest in other people.', value: 0 },
        {
          Option: 'I have lost all of my interest in other people.',
          value: 3,
        },
        {
          Option: 'I have lost most of my interest in other people.',
          value: 2,
        },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: "I can't make decisions at all anymore.", value: 3 },
        {
          Option: 'I put off making decisions more than I used to.',
          value: 1,
        },
        {
          Option:
            'I have greater difficulty in making decisions more than I used to.',
          value: 2,
        },
        {
          Option: 'I make decisions about as well as I ever could.',
          value: 0,
        },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option:
            'I feel there are permanent changes in my appearance that make me look unattractive.',
          value: 2,
        },
        { Option: 'I believe that I look ugly.', value: 3 },
        {
          Option: 'I am worried that I am looking old or unattractive.',
          value: 1,
        },
        {
          Option: "I don't feel that I look any worse than I used to.",
          value: 0,
        },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: "I can't do any work at all.", value: 3 },
        {
          Option: 'It takes an extra effort to get started at doing something.',
          value: 1,
        },
        { Option: 'I can work about as well as before.', value: 0 },
        { Option: 'I have to push myself very hard to do anything', value: 2 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option:
            'I wake up several hours earlier than I used to and cannot get back to sleep.',
          value: 3,
        },
        { Option: "I don't sleep as well as I used to.", value: 1 },
        { Option: ' I can sleep as well as usual.', value: 0 },
        {
          Option:
            'I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.',
          value: 2,
        },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: 'I get tired from doing almost anything.', value: 2 },
        { Option: 'I am too tired to do anything.', value: 3 },
        { Option: "I don't get more tired than usual.", value: 0 },
        { Option: 'I get tired more easily than I used to.', value: 1 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: 'My appetite is no worse than usual.', value: 0 },
        { Option: 'My appetite is not as good as it used to be.', value: 1 },
        { Option: 'I have no appetite at all anymore.', value: 3 },
        { Option: 'My appetite is much worse now.', value: 2 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        { Option: 'I have lost more than ten pounds.', value: 2 },
        { Option: 'I have lost more than fifteen pounds.', value: 3 },
        { Option: 'I have lost more than five pounds.', value: 1 },
        { Option: "I haven't lost much weight, if any, lately.", value: 0 },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option:
            'I am worried about physical problems like aches, pains, upset stomach, or constipation.',
          value: 1,
        },
        {
          Option:
            'I am so worried about my physical problems that I cannot think of anything else.',
          value: 3,
        },
        {
          Option:
            "I am very worried about physical problems and it's hard to think of much else.",
          value: 2,
        },
        {
          Option: 'I am no more worried about my health than usual.',
          value: 0,
        },
      ],
    },
    {
      Question: 'Select one of the Following ',
      Options: [
        {
          Option: 'I am less interested in sex than I used to be.',
          value: 1,
        },
        { Option: 'I have lost interest in sex completely.', value: 3 },
        { Option: 'I have almost no interest in sex.', value: 2 },
        {
          Option: 'I have not noticed any recent change in my interest in sex.',
          value: 0,
        },
      ],
    },
  ];
  return {
    props: {
      ADHDQuiz,
      AnxietyQuiz,
      depressionQuiz,
    },
  };
}
