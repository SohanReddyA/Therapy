import { Layout } from '@/src/pages/common';
import HomeController from '../../template.controller';
import {
  Hero,
  QuizFlex,
  OurProcess,
  QuizModal,
  Footer,
  Blog,
} from '../../components';
import ContactUs from '../../components/contact-us/template';

const HomeSm = ({ ADHDQuiz, AnxietyQuiz, depressionQuiz, isLoggedIn }) => {
  const {
    myRef,
    executeScroll,
    ADHDOpen,
    setADHDOpen,
    AnxietyOpen,
    setAnxietyOpen,
    DepressionOpen,
    setDepressionOpen,
    contactsOpen,
    setContactsOpen,
  } = HomeController();
  return (
    <Layout
      executeScroll={executeScroll}
      isLoggedIn={isLoggedIn}
      setContactsOpen={setContactsOpen}>
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
        {/* <Blog /> */}
        {contactsOpen && <ContactUs setOpen={setContactsOpen} />}
      </div>
      <Footer setContactsOpen={setContactsOpen} />
    </Layout>
  );
};
export default HomeSm;
