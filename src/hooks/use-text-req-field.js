import { useState } from 'react';

const useTextReqField = initialTextReqField => {
  const [textReqField, setTextReqField] = useState(initialTextReqField);

  const handleChangeTextReqField = e => {
    e.persist();
    setTextReqField(prevState => ({ ...prevState, value: e.target.value }));
  };

  return [textReqField, handleChangeTextReqField];
};

export default useTextReqField;
