import React from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';
import { Button } from 'reactstrap';

import Error from './error';
import { NextBtn, RemoveBtn } from './buttons';

const Photos = ({
  maxCountOfImages,
  handleChangeImg,
  handleCheckErrorImg,
  error,
  images,
  toggleTab,
  toggleError,
  warning,
}) => {
  const handleClickPrevTab = () => toggleTab(2);
  const handleClickNextTab = () => toggleTab(4);

  return (
    <>
      <ImageUploading
        dataURLKey="dataUrl"
        maxNumber={maxCountOfImages}
        multiple
        onChange={handleChangeImg}
        onError={handleCheckErrorImg}
        value={images}
      >
        {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
          <>
            <div
              {...dragProps}
              className="image-download-btn"
              onClick={onImageUpload}
            >
              Click or drop here . . .
            </div>
            <Error error={error} toggleError={toggleError} warning={warning} />
            {imageList.length > 0 && (
              <ul className="clear-list-style">
                {imageList.map(({ dataUrl }, index) => {
                  const handleImageRemove = () => onImageRemove(index);
                  return (
                    <li key={`${dataUrl}_${index}_load`} className="image-item">
                      <img
                        alt="Your img"
                        className="image-size"
                        src={dataUrl}
                      />
                      <div>
                        <RemoveBtn
                          className="one-third-of-width-btn"
                          onClick={handleImageRemove}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </ImageUploading>
      <Button
        className="half-of-width-btn left-btn label-mg"
        onClick={handleClickPrevTab}
      >
        Prev
      </Button>{' '}
      <NextBtn
        className="half-of-width-btn label-mg"
        onClick={handleClickNextTab}
      />{' '}
    </>
  );
};

Photos.propTypes = {
  maxCountOfImages: PropTypes.number,
  handleChangeImg: PropTypes.func,
  error: PropTypes.bool,
  handleCheckErrorImg: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      dataUrl: PropTypes.string,
    }),
  ),
  toggleTab: PropTypes.func,
  toggleError: PropTypes.func,
  warning: PropTypes.string,
};

Photos.defaultProps = {
  maxCountOfImages: 5,
  handleChangeImg: () => {},
  error: false,
  handleCheckErrorImg: () => {},
  images: [],
  toggleTab: () => {},
  toggleError: () => {},
  warning: '',
};

export default Photos;
