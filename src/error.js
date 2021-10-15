import { Button, Modal, ModalBody } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

import Warning from './warning';

const Error = ({ header, phone, error, toggleError }) => {
  return (
    <Modal className="position-of-error" isOpen={error} toggle={toggleError}>
      <div className="card-pd">
        <ModalBody>
          <span>
            <Warning header={header} phone={phone} />
          </span>
          <Button className="error-btn" color="secondary" onClick={toggleError}>
            Okay
          </Button>
        </ModalBody>
      </div>
    </Modal>
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
