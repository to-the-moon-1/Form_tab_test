import React from 'react';
import ImageUploading from 'react-images-uploading';
import { Button, TabPane, Form } from 'reactstrap';
import PropTypes from 'prop-types';

import Error from './error';

const Photo = ({
  maxCountOfImages,
  handleChangeImg,
  handleCheckErrorImg,
  error,
  images,
  header,
  phone,
  toggleTab,
  toggleError,
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
                  <div key={image.data_url} className="image-item">
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
  maxCountOfImages: PropTypes.number,
  handleChangeImg: PropTypes.func,
  error: PropTypes.bool,
  handleCheckErrorImg: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      data_url: PropTypes.string,
    }),
  ),
  header: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  phone: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  toggleTab: PropTypes.func,
  toggleError: PropTypes.func,
};

Photo.defaultProps = {
  maxCountOfImages: PropTypes.number,
  handleChangeImg: () => {},
  error: false,
  handleCheckErrorImg: () => {},
  images: [],
  header: { value: '', index: 1 },
  phone: { value: '', index: 2 },
  toggleTab: () => {},
  toggleError: () => {},
};

export default Photo;
