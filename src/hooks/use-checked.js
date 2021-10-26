import { useState, useCallback } from 'react';

const useChecked = (initialChecked = false) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleCheck = useCallback(() => setChecked(!checked), [checked]);

  const checkTitle = checked ? 'ON' : 'OFF';

  return { checked, handleCheck, checkTitle };
};

export default useChecked;
