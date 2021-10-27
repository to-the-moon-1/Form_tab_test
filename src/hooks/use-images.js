import { useState, useCallback } from 'react';

const useImages = (initialImages = []) => {
  const [images, setImages] = useState(initialImages);

  const handleChangeImg = useCallback(imageList => setImages(imageList), []);

  // imageList is already reserved in the library 'react-images-uploading';
  return [images, handleChangeImg];
};

export default useImages;
