import { useState, useCallback, useMemo } from 'react';

import paidServices from '../constants/paid-services';

const usePaidService = (initialPaidService = paidServices) => {
  const [paidService, setPaidService] = useState(initialPaidService);

  const onPaidService = useCallback(
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

  const checkPaidService = useMemo(
    () => paidService.filter(({ checked }) => checked),
    [paidService],
  );

  return { checkPaidService, paidService, onPaidService };
};

export default usePaidService;
