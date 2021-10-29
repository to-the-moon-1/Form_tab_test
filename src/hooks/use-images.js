import { useState, useCallback } from 'react';

const useImages = (initialImages = []) => {
  const [images, setImages] = useState(initialImages);

  const handleChangeImg = useCallback(imageList => setImages(imageList), []);

  return [images, handleChangeImg];
};

export default useImages;
