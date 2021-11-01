import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';

import { CloseBtn } from './buttons';

const Error = ({ error, toggleError, warning }) => (
  <Modal className="position-of-error" isOpen={error} toggle={toggleError}>
    <div className="card-pd">
      <ModalBody>
        <span>{warning}</span>
        <CloseBtn className="error-btn" onClick={toggleError} />
      </ModalBody>
    </div>
  </Modal>
);

Error.propTypes = {
  error: PropTypes.bool,
  toggleError: PropTypes.func,
  warning: PropTypes.string,
};

Error.defaultProps = {
  error: false,
  toggleError: () => {},
  warning: '',
};

export default Error;
