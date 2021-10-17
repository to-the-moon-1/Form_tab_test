import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const Check = ({ checked, setChecked }) => (
  <FormGroup check className="service-mg">
    <Label check className="label-mg">
      <Input
        className="checkbox"
        defaultChecked={checked}
        onChange={setChecked}
        type="checkbox"
      />{' '}
      <span className="label-checkbox">{checked ? 'ON' : 'OFF'}</span>
    </Label>
  </FormGroup>
);

Check.propTypes = {
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
};

Check.defaultProps = {
  checked: false,
  setChecked: () => {},
};

export default Check;
