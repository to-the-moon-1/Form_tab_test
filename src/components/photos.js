import React from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';

import { PrimaryBtn, SecondaryBtn, DangerBtn } from './buttons';
import Error from './error';

const Photos = ({
  maxCountOfImages,
  onChangeImg,
  onCheckErrorImg,
  error,
  images,
  toggleTab,
  toggleError,
  warning,
}) => {
  const onClickPrevTab = () => toggleTab(2);
  const onClickNextTab = () => toggleTab(4);

  return (
    <>
      <ImageUploading
        dataURLKey="dataUrl"
        maxNumber={maxCountOfImages}
        multiple
        onChange={onChangeImg}
        onError={onCheckErrorImg}
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
                {imageList.map(({ dataUrl, key }) => {
                  const handleImageRemove = () => onImageRemove(key);
                  return (
                    <li key={`${dataUrl}_${key}_load`} className="image-item">
                      <img
                        alt="Your img"
                        className="image-size"
                        src={dataUrl}
                      />
                      <div>
                        <DangerBtn
                          className="one-third-of-width-btn"
                          onClick={handleImageRemove}
                        >
                          Remove
                        </DangerBtn>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </ImageUploading>
      <SecondaryBtn
        className="half-of-width-btn left-btn label-mg"
        onClick={onClickPrevTab}
      >
        Prev
      </SecondaryBtn>
      <PrimaryBtn
        className="half-of-width-btn label-mg"
        onClick={onClickNextTab}
      >
        Next
      </PrimaryBtn>
    </>
  );
};

Photos.propTypes = {
  maxCountOfImages: PropTypes.number,
  onChangeImg: PropTypes.func,
  error: PropTypes.bool,
  onCheckErrorImg: PropTypes.func,
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
  onChangeImg: () => {},
  error: false,
  onCheckErrorImg: () => {},
  images: [],
  toggleTab: () => {},
  toggleError: () => {},
  warning: '',
};

export default Photos;
