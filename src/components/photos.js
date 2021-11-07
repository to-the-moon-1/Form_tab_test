import React from 'react';
import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';

import { DangerBtn } from './buttons';
import PrevNextBtn from './prev-next-btn';
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
        dataURLKey="dataURL"
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
                {imageList.map(({ dataURL, key }) => {
                  const handleImageRemove = () => onImageRemove(key);
                  return (
                    <li key={`${dataURL}_${key}_load`} className="image-item">
                      <img
                        alt="Your img"
                        className="image-size"
                        src={dataURL}
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
      <PrevNextBtn funkNext={onClickNextTab} funkPrev={onClickPrevTab} />
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
      dataURL: PropTypes.string,
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
