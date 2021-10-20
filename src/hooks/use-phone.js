import { useState } from 'react';

const usePhone = (initialPhone = { value: '', index: 2 }) => {
  const [phone, setPhone] = useState(initialPhone);

  const handleChangePhone = e => {
    e.persist();
    setPhone(prevPhone => ({ ...prevPhone, value: e.target.value }));
  };

  return { handleChangePhone, phone };
};

export default usePhone;
