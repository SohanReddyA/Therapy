import { useState, useEffect } from 'react';

function useSlowValueChange(initialValue, finalValue, duration) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const increment = (finalValue - initialValue) / (duration / 100);

    const interval = setInterval(() => {
      setValue((prevValue) => {
        const newValue = prevValue + increment;
        if (
          (increment > 0 && newValue >= finalValue) ||
          (increment < 0 && newValue <= finalValue)
        ) {
          clearInterval(interval);
          return finalValue;
        }
        return newValue;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [initialValue, finalValue, duration]);

  return value;
}

export default useSlowValueChange;
