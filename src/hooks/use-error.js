import { useState, useCallback } from 'react';

const useError = (initialError = false) => {
  const [error, setError] = useState(initialError);

  const toggleError = useCallback(() => setError(!error), [error]);

  const handleCheckErrorImg = useCallback(
    errors => {
      if (!errors.maxNumber) return;
      // maxNumber is a const from the library 'react-images-uploading';
      toggleError();
    },
    [toggleError],
  );

  return { error, handleCheckErrorImg, toggleError };
};

export default useError;
