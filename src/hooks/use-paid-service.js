import { useState, useCallback } from 'react';
import paidServices from '../constants/paid-services';

const usePaidService = (initialPaidService = paidServices) => {
  const [paidService, setPaidService] = useState(initialPaidService);

  const handlePaidService = useCallback(
    ({ target: { name, checked } }) => {
      const index = paidService.findIndex(({ number }) => number === name);
      const item = paidService[index];

      setPaidService(prevPaidService =>
        Object.values({
          ...prevPaidService,
          [index]: { ...item, checked },
        }),
      );
    },
    [paidService],
  );

  const checkPaidService = paidService.filter(({ checked }) => checked);

  return { checkPaidService, paidService, handlePaidService };
};

export default usePaidService;
