import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';

const ModalWindow = ({
  checkPaidService,
  header,
  description,
  phone,
  email,
  checked,
  images,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <Button
        className="half-of-width-btn service-btn label-mg"
        color="success"
        onClick={toggle}
      >
        Save
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="card-pd">
          <ModalHeader>Your ad</ModalHeader>
          <ModalBody>
            <div className="save-text-item">Header: {header}</div>
            {description && (
              <div className="save-text-item">Description: {description}</div>
            )}
            <div className="save-text-item">Phone number: {phone}</div>
            {email && <div className="save-text-item">Email: {email}</div>}
            <div className="save-text-item">
              Checkbox: {checked === false ? 'OFF' : 'ON'}
            </div>
            {images.length > 0 && (
              <ul className="image-items clear-list-style">
                {images.map(image => (
                  <li key={image.data_url} className="save-image-item">
                    <img
                      alt="Your img"
                      height="210"
                      src={image.data_url}
                      width="157"
                    />
                  </li>
                ))}
              </ul>
            )}
            {checkPaidService.length > 0 && (
              <ul className="service-items">
                {checkPaidService.map(({ number }) => (
                  <li key={number} className="save-text-item save-service-item">
                    Paid service {number}
                  </li>
                ))}
              </ul>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              className="half-of-width-btn btn"
              color="secondary"
              onClick={toggle}
            >
              Cancel
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
};

ModalWindow.propTypes = {
  header: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  description: PropTypes.string,
  checked: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      data_url: PropTypes.string,
    }),
  ),
  checkPaidService: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};

ModalWindow.defaultProps = {
  header: '',
  phone: '',
  email: '',
  description: '',
  checked: false,
  images: [],
  checkPaidService: [],
};

export default ModalWindow;
