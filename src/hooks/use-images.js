import { useState, useCallback } from 'react';

const useImages = (initialImages = []) => {
  const [images, setImages] = useState(initialImages);

  const handleChangeImg = useCallback(
    imageList =>
      setImages(
        imageList.map(({ dataUrl, file }, key) => {
          return { dataUrl, file, key };
        }),
      ),
    [],
  );

  return [images, handleChangeImg];
};

export default useImages;
