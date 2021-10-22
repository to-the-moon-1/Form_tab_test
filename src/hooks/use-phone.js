import { useState } from 'react';
import phone from '../constants/phone';

const usePhone = (initialPhone = phone) => {
  const [phone, setPhone] = useState(initialPhone);

  const handleChangePhone = e => {
    e.persist();
    setPhone(prevPhone => ({ ...prevPhone, value: e.target.value }));
  };

  return { handleChangePhone, phone };
};

export default usePhone;
