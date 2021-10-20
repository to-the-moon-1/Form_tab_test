import { useState } from 'react';

const useImages = (initialImages = []) => {
  const [images, setImages] = useState(initialImages);

  const handleChangeImg = imageList => setImages(imageList);

  return { handleChangeImg, images };
};

export default useImages;
