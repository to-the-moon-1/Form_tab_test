import { useState } from 'react';

const useDescription = (initialDescription = '') => {
  const [description, setDescription] = useState(initialDescription);

  const handleChangeDescription = e => setDescription(e.target.value);

  return { description, handleChangeDescription };
};

export default useDescription;
