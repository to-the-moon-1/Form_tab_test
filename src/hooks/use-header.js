import { useState } from 'react';

const useHeader = (initialHeader = { value: '', index: 1 }) => {
  const [header, setHeader] = useState(initialHeader);

  const handleChangeHeader = e => {
    e.persist();
    setHeader(prevHeader => ({ ...prevHeader, value: e.target.value }));
  };

  return { handleChangeHeader, header };
};

export default useHeader;
