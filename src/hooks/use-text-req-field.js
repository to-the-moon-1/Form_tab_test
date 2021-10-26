import { useState, useCallback } from 'react';

const useTextReqField = initialTextReqField => {
  const [textReqField, setTextReqField] = useState(initialTextReqField);

  const handleChangeTextReqField = useCallback(e => {
    e.persist();
    setTextReqField(prevState => ({ ...prevState, value: e.target.value }));
  }, []);

  return [textReqField, handleChangeTextReqField];
};

export default useTextReqField;
