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
    <Modal onClose={handleCloseModal}>
      {type == 'Depression' && <DepressionQuiz Quiz={Quiz} />}
      {type == 'Anxiety' && <AnxietyQuiz Quiz={Quiz} />}
      {type == 'ADHD' && <ADHDQuiz Quiz={Quiz} />}
    </Modal>
  );
};

export default QuizModal;
