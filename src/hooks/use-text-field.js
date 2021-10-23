import { useState } from 'react';

const useTextField = (initialTextField = '') => {
  const [textField, setTextField] = useState(initialTextField);

  const handleChangeTextField = e => setTextField(e.target.value);

  return [textField, handleChangeTextField];
};

export default useTextField;
