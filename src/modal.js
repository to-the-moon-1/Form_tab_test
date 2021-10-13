import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';

const ModalBtn = ({
  className,
  header,
  description,
  paidService,
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
      <Modal className={className} isOpen={modal} toggle={toggle}>
        <div className="card-pd modalPosition">
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
            <div className="image-items">
              {images.map((image, index) => (
                <div key={index} className="save-image-item">
                  <img
                    alt="Your img"
                    height="210"
                    src={image.data_url}
                    width="157"
                  />
                </div>
              ))}
            </div>
            <ul className="service-items">
              {paidService.map((s, i) => {
                return (
                  s.checked && (
                    <li key={i} className="save-text-item save-service-item">
                      Paid service {s.number}
                    </li>
                  )
                );
              })}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button
              className="half-of-width-btn"
              color="secondary"
              id="modal-footer-btn"
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

ModalBtn.propTypes = {
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
  paidService: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
  className: PropTypes.func,
};

ModalBtn.defaultProps = {
  header: '',
  phone: '',
  email: '',
  description: '',
  checked: false,
  images: [],
  paidService: [],
  className: () => {},
};

export default ModalBtn;
