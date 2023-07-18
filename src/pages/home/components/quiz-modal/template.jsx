import { useEffect } from 'react';
import { ADHDQuiz, AnxietyQuiz, DepressionQuiz, Modal } from './components';

const QuizModal = ({ isOpen, setOpen, Quiz, type }) => {
  console.log(isOpen);
  const handleCloseModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }
  return (
    <Modal onClose={handleCloseModal} quizType={type}>
      {type == 'Depression' && (
        <DepressionQuiz Quiz={Quiz} onClose={handleCloseModal} />
      )}
      {type == 'Anxiety' && (
        <AnxietyQuiz Quiz={Quiz} onClose={handleCloseModal} />
      )}
      {type == 'ADHD' && <ADHDQuiz Quiz={Quiz} onClose={handleCloseModal} />}
    </Modal>
  );
};

export default QuizModal;
