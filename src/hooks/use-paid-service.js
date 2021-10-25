import { useState } from 'react';
import paidServices from '../constants/paid-services';

const usePaidService = (initialPaidService = paidServices) => {
  const [paidService, setPaidService] = useState(initialPaidService);

  const handlePaidService = ({ target: { name, checked } }) => {
    const index = paidService.findIndex(({ number }) => number === name);
    const item = paidService[index];

    setPaidService(prevPaidService =>
      Object.values({
        ...prevPaidService,
        [index]: { ...item, checked },
      }),
    );
  };

  const checkPaidService = paidService.filter(service => service.checked);

  return { checkPaidService, paidService, handlePaidService };
};

export default usePaidService;
