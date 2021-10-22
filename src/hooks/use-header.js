import { useState } from 'react';
import header from '../constants/header';

const useHeader = (initialHeader = header) => {
  const [header, setHeader] = useState(initialHeader);

  const handleChangeHeader = e => {
    e.persist();
    setHeader(prevHeader => ({ ...prevHeader, value: e.target.value }));
  };

  return { handleChangeHeader, header };
};

export default useHeader;
