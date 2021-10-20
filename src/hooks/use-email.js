import { useState } from 'react';

const useEmail = (initialEmail = '') => {
  const [email, setEmail] = useState(initialEmail);

  const handleChangeEmail = e => setEmail(e.target.value);

  return { email, handleChangeEmail };
};

export default useEmail;
