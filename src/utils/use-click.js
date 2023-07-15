import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        onClick();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClick]);

  return elementRef;
};

export default useClick;
