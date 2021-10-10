import { Button, Modal, ModalBody } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const Error = props => {
  const { header, phone, error, toggleError } = props;

  let warning;

  if (header.length === 0) {
    warning = 'Fill the required field: header';
  } else if (phone.length === 0) {
    warning = 'Fill the required field: phone number';
  } else {
    warning = "Can't download more pictures than 5";
  }

  return (
    <>
      <Modal className="positionError" isOpen={error} toggle={toggleError}>
        <div className="card-pd">
          <ModalBody>
            <span>{warning}</span>
            <Button
              className="littleBtn"
              color="secondary"
              onClick={toggleError}
            >
              Okay
            </Button>
          </ModalBody>
        </div>
      </Modal>
    </>
  );
};

Error.propTypes = {
  header: PropTypes.string,
  phone: PropTypes.string,
  error: PropTypes.bool,
  toggleError: PropTypes.func,
};

Error.defaultProps = {
  header: '',
  phone: '',
  error: false,
  toggleError: () => {},
};

export default Error;
