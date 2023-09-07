import { Home } from '@/src/pages/home';
export default function HomePage(props) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const res1 = await fetch('http://friennly.in/api/quiz/ADHD');
  const ADHDQuiz = await res1.json();
  const res2 = await fetch('http://friennly.in/api/quiz/Anxiety');
  const AnxietyQuiz = await res2.json();
  const res3 = await fetch('http://friennly.in/api/quiz/depression');
  const depressionQuiz = await res3.json();
  return {
    props: {
      ADHDQuiz,
      AnxietyQuiz,
      depressionQuiz,
    },
  };
}
