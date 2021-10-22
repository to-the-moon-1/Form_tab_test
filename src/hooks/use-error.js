import { useState } from 'react';

const useError = (initialError = false) => {
  const [error, setError] = useState(initialError);

  const toggleError = () => setError(!error);

  const handleCheckErrorImg = errors => {
    if (!errors.maxNumber) return;
    toggleError();
  };

  return { error, handleCheckErrorImg, toggleError };
};

export default useError;
