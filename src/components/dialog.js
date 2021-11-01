import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { CloseBtn, SaveBtn } from './buttons';

const Dialog = ({
  checkPaidService,
  checkTitle,
  header,
  descript,
  phone,
  email,
  images,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <SaveBtn
        className="half-of-width-btn service-btn label-mg"
        onClick={toggle}
      />
      <Modal isOpen={modal} toggle={toggle}>
        <div className="card-pd">
          <ModalHeader>Your ad</ModalHeader>
          <ModalBody>
            <div className="save-text-item">Header: {header}</div>
            {descript && (
              <div className="save-text-item">descript: {descript}</div>
            )}
            <div className="save-text-item">Phone number: {phone}</div>
            {email && <div className="save-text-item">Email: {email}</div>}
            <div className="save-text-item">Checkbox: {checkTitle}</div>
            {images.length > 0 && (
              <ul className="image-items clear-list-style">
                {images.map(({ dataUrl }) => (
                  <li key={`${dataUrl}_save`} className="save-image-item">
                    <img alt="Your img" className="image-size" src={dataUrl} />
                  </li>
                ))}
              </ul>
            )}
            {checkPaidService.length > 0 && (
              <ul className="service-items">
                {checkPaidService.map(({ number }) => (
                  <li
                    key={`${number}_save`}
                    className="save-text-item save-service-item"
                  >
                    Paid service {number}
                  </li>
                ))}
              </ul>
            )}
          </ModalBody>
          <ModalFooter>
            <CloseBtn className="half-of-width-btn btn" onClick={toggle} />
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
};

Dialog.propTypes = {
  checkTitle: PropTypes.string,
  header: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  descript: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      dataUrl: PropTypes.string,
    }),
  ),
  checkPaidService: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};

Dialog.defaultProps = {
  checkTitle: 'OFF',
  header: '',
  phone: '',
  email: '',
  descript: '',
  images: [],
  checkPaidService: [],
};

export default Dialog;
