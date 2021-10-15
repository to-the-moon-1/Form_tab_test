import React from 'react';
import ImageUploading from 'react-images-uploading';
import { Button, TabPane, Form } from 'reactstrap';
import PropTypes from 'prop-types';

import Error from './error';

const Photo = ({
  maxNumberOfImages,
  changeImg,
  error,
  errorImg,
  images,
  header,
  phone,
  toggle,
  toggleError,
}) => {
  const handleClickPrevTab = () => toggle(2);
  const handleClickNextTab = () => toggle(4);

  return (
    <TabPane tabId={3}>
      <Form>
        <ImageUploading
          dataURLKey="data_url"
          maxNumber={maxNumberOfImages}
          multiple
          onChange={changeImg}
          onError={errorImg}
          value={images}
        >
          {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
            <div>
              <div
                {...dragProps}
                className="image-download-btn"
                onClick={onImageUpload}
              >
                Click or drop here . . .
              </div>
              <Error
                error={error}
                header={header}
                phone={phone}
                toggleError={toggleError}
              />
              {imageList.map((image, index) => {
                const handleImageRemove = () => onImageRemove(index);
                return (
                  <div key={index} className="image-item">
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
                  </div>
                );
              })}
            </div>
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

Photo.propTypes = {
  maxNumberOfImages: PropTypes.number,
  changeImg: PropTypes.func,
  error: PropTypes.bool,
  errorImg: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      data_url: PropTypes.string,
    }),
  ),
  header: PropTypes.string,
  phone: PropTypes.string,
  toggle: PropTypes.func,
  toggleError: PropTypes.func,
};

Photo.defaultProps = {
  maxNumberOfImages: PropTypes.number,
  changeImg: () => {},
  error: false,
  errorImg: () => {},
  images: [],
  header: '',
  phone: '',
  toggle: () => {},
  toggleError: () => {},
};

export default Photo;
