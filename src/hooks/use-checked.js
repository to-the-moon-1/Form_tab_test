import { useState } from 'react';

const useChecked = (initialChecked = false) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleCheck = () => setChecked(!checked);

  return { checked, handleCheck };
};

export default useChecked;
