import { useState, useCallback } from 'react';

const useImages = (initialImages = []) => {
  const [images, setImages] = useState(initialImages);

  const onChangeImg = useCallback(
    imageList =>
      setImages(
        imageList.map(({ dataURL, file }, key) => {
          return { dataURL, file, key };
        }),
      ),
    [],
  );

  return [images, onChangeImg];
};

export default useImages;
