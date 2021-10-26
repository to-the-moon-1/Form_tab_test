import { useState, useCallback } from 'react';

const useTextField = (initialTextField = '') => {
  const [textField, setTextField] = useState(initialTextField);

  const handleChangeTextField = useCallback(
    e => setTextField(e.target.value),
    [],
  );

  return [textField, handleChangeTextField];
};

export default useTextField;
