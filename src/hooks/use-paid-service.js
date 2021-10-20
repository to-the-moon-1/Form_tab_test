import { useState } from 'react';

const usePaidService = (
  initialPaidService = [
    { number: 'one', checked: false },
    { number: 'two', checked: false },
    { number: 'three', checked: false },
    { number: 'four', checked: false },
    { number: 'five', checked: false },
  ],
) => {
  const [paidService, setPaidService] = useState(initialPaidService);

  const handlePaidService = ({ target: { name, checked } }) => {
    const index = paidService.findIndex(({ number }) => number === name);
    const item = paidService[index];
    const newPaidService = [...paidService];
    newPaidService[index] = { ...item, checked };

    setPaidService(newPaidService);
  };

  return { handlePaidService, paidService };
};

export default usePaidService;
