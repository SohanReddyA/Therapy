import { useRef, useState } from 'react';

const HomeController = () => {
  const myRef = useRef(null);
  const [ADHDOpen, setADHDOpen] = useState(false);
  const [AnxietyOpen, setAnxietyOpen] = useState(false);
  const [DepressionOpen, setDepressionOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);
  const executeScroll = (e = null) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    executeScroll,
    myRef,
    ADHDOpen,
    setADHDOpen,
    AnxietyOpen,
    setAnxietyOpen,
    DepressionOpen,
    setDepressionOpen,
    contactsOpen,
    setContactsOpen,
  };
};

export default HomeController;
