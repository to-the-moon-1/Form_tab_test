import { useState } from 'react';
import paidServices from '../constants/paid-services';

const usePaidService = (initialPaidService = paidServices) => {
  const [paidService, setPaidService] = useState(initialPaidService);

  const handlePaidService = ({ target: { name, checked } }) => {
    const index = paidService.findIndex(({ number }) => number === name);
    const item = paidService[index];
    const newPaidService = [...paidService];
    newPaidService[index] = { ...item, checked };

    setPaidService(newPaidService);
  };

  return [paidService, handlePaidService];
};

export default usePaidService;
