import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';

const ModalBtn = props => {
  const {
    className,
    header,
    description,
    phone,
    email,
    checked,
    images,
    service1,
    service2,
    service3,
    service4,
    service5,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button className="twoBtn label-bottom" color="success" onClick={toggle}>
        Save
      </Button>
      <Modal className={className} isOpen={modal} toggle={toggle}>
        <div className="card-pd modalPosition">
          <ModalHeader>Your ad</ModalHeader>
          <ModalBody>
            <div className="save-element">Header: {header}</div>
            {description ? (
              <div className="save-element">Description: {description}</div>
            ) : null}
            <div className="save-element">Phone number: {phone}</div>
            {email ? <div className="save-element">Email: {email}</div> : null}
            <div className="save-element">
              Checkbox: {checked === false ? 'OFF' : 'ON'}
            </div>
            <div className="image-items">
              {images.map((image, index) => (
                <div key={index} className="image-item-save">
                  <img alt="" height="210" src={image.data_url} width="157" />
                </div>
              ))}
            </div>
            <ul className="serviceItems">
              {service1 === true ? (
                <li className="save-element">Paid service one</li>
              ) : null}
              {service2 === true ? (
                <li className="save-element">Paid service two</li>
              ) : null}
              {service3 === true ? (
                <li className="save-element">Paid service three</li>
              ) : null}
              {service4 === true ? (
                <li className="save-element">Paid service four</li>
              ) : null}
              {service5 === true ? (
                <li className="save-element">Paid service five</li>
              ) : null}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button
              className="twoBtn modal-footerBtn"
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

ModalBtn.propTypes = {
  header: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  description: PropTypes.string,
  checked: PropTypes.bool,
  images: PropTypes.array,
  className: PropTypes.func,
  service1: PropTypes.bool,
  service2: PropTypes.bool,
  service3: PropTypes.bool,
  service4: PropTypes.bool,
  service5: PropTypes.bool,
};

ModalBtn.defaultProps = {
  header: '',
  phone: '',
  email: '',
  description: '',
  checked: false,
  images: [],
  className: () => {},
  service1: false,
  service2: false,
  service3: false,
  service4: false,
  service5: false,
};

export default ModalBtn;
