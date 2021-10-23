import { useState } from 'react';

const useImages = (initialImages = []) => {
  const [images, setImages] = useState(initialImages);

  const handleChangeImg = imageList => setImages(imageList);

  return [images, handleChangeImg];
};

export default useImages;
