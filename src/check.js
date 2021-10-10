import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const Check = props => {
  const { checked, setChecked } = props;

  let message;

  if (checked) {
    message = 'ON';
  } else {
    message = 'OFF';
  }

  return (
    <>
      <FormGroup check>
        <Label check className="label-bottom">
          <Input
            className="check"
            defaultChecked={checked}
            onChange={setChecked}
            type="checkbox"
          />{' '}
          <span className="label-check">{message}</span>
        </Label>
      </FormGroup>
    </>
  );
};

Check.propTypes = {
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
};

Check.defaultProps = {
  checked: false,
  setChecked: () => {},
};

export default Check;
