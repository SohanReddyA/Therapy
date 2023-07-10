import { Blog } from './components/blog';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Layout } from '@/src/pages/common';
import { OurProcess } from './components/our-process';
import { QuizFlex } from './components/quiz-flex';
import { QuizModal } from './components/quiz-modal';
import HomeController from './template.controller';
import { useState, useEffect } from 'react';
import { CookieUtil } from '@/src/utils';
import { ColorRing } from 'react-loader-spinner';
import { BASE_API_URL } from '@/src/utils/api';

const Home = ({ ADHDQuiz, AnxietyQuiz, depressionQuiz }) => {
  const {
    myRef,
    executeScroll,
    ADHDOpen,
    setADHDOpen,
    AnxietyOpen,
    setAnxietyOpen,
    DepressionOpen,
    setDepressionOpen,
  } = HomeController();

  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    setIsLoggedIn(CookieUtil.getCookie('FriennlyUser'));
  }, [CookieUtil.getCookie('FriennlyUser')]);
  useEffect(() => {
    fetch(BASE_API_URL).then((res) => {
      console.log(res, 'Init');
      setLoading(false);
    });
  }, []);
  if (loading)
    return (
      <div
        style={{
          margin: 'auto',
          width: '100vw',
          height: '100vh',
          display: 'flex',
        }}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#b8c480']}
        />
      </div>
    );
  return (
    <Layout executeScroll={executeScroll} isLoggedIn={isLoggedIn}>
      <div
        style={{
          display: 'flex',
          gap: '200px',
          padding: '50px 100px 100px 100px',
          flexDirection: 'column',
        }}>
        <Hero executeScroll={executeScroll} />
        <QuizFlex
          innerRef={myRef}
          ADHD={setADHDOpen}
          Anxiety={setAnxietyOpen}
          Depression={setDepressionOpen}
        />
        <OurProcess />
        <QuizModal
          isOpen={ADHDOpen}
          setOpen={setADHDOpen}
          Quiz={ADHDQuiz}
          type="ADHD"
        />
        <QuizModal
          isOpen={AnxietyOpen}
          setOpen={setAnxietyOpen}
          Quiz={AnxietyQuiz}
          type="Anxiety"
        />
        <QuizModal
          isOpen={DepressionOpen}
          setOpen={setDepressionOpen}
          Quiz={depressionQuiz}
          type="Depression"
        />
        <Blog />
      </div>
      <Footer />
    </Layout>
  );
};
export default Home;
