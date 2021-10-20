import { useState } from 'react';

const useError = (initialError = false) => {
  const [error, setError] = useState(initialError);

  const toggleError = () => setError(!error);

  return { error, toggleError };
};

export default useError;
