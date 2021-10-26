import React from 'react';
import ImageUploading from 'react-images-uploading';
import { Button, TabPane, Form } from 'reactstrap';
import PropTypes from 'prop-types';

import Error from './error';

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
    <TabPane tabId={3}>
      <Form>
        <ImageUploading
          dataURLKey="data_url"
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
              <Error
                error={error}
                toggleError={toggleError}
                warning={warning}
              />
              {imageList.length > 0 && (
                <ul className="clear-list-style">
                  {imageList.map((image, index) => {
                    const handleImageRemove = () => onImageRemove(index);
                    return (
                      <li
                        key={Math.floor(Math.random() * 1000)}
                        className="image-item"
                      >
                        <img
                          alt="Your img"
                          height="210"
                          src={image.data_url}
                          width="159"
                        />
                        <div>
                          <Button
                            className="one-third-of-width-btn"
                            color="danger"
                            onClick={handleImageRemove}
                            outline
                          >
                            Remove
                          </Button>
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
          color="secondary"
          onClick={handleClickPrevTab}
        >
          Prev
        </Button>{' '}
        <Button
          className="half-of-width-btn label-mg"
          color="primary"
          onClick={handleClickNextTab}
        >
          Next
        </Button>{' '}
      </Form>
    </TabPane>
  );
};

Photos.propTypes = {
  maxCountOfImages: PropTypes.number,
  handleChangeImg: PropTypes.func,
  error: PropTypes.bool,
  handleCheckErrorImg: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      data_url: PropTypes.string,
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
