import { Button, Modal, ModalBody } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

import getWarning from '../utilites/get-warning';

const Error = ({ header, phone, error, toggleError }) => (
  <Modal className="position-of-error" isOpen={error} toggle={toggleError}>
    <div className="card-pd">
      <ModalBody>
        <span>{getWarning(header.value, phone.value)}</span>
        <Button className="error-btn" color="secondary" onClick={toggleError}>
          Okay
        </Button>
      </ModalBody>
    </div>
  </Modal>
);

Error.propTypes = {
  header: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  phone: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  error: PropTypes.bool,
  toggleError: PropTypes.func,
};

Error.defaultProps = {
  header: { value: '', index: 1 },
  phone: { value: '', index: 2 },
  error: false,
  toggleError: () => {},
};

export default Error;
