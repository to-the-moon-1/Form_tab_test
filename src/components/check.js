import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const Check = ({ checked, checkTitle, setChecked }) => (
  <FormGroup check className="service-mg">
    <Label check className="label-mg">
      <Input
        className="checkbox"
        defaultChecked={checked}
        onChange={setChecked}
        type="checkbox"
      />{' '}
      <span className="label-checkbox">{checkTitle}</span>
    </Label>
  </FormGroup>
);

Check.propTypes = {
  checked: PropTypes.bool,
  checkTitle: PropTypes.string,
  setChecked: PropTypes.func,
};

Check.defaultProps = {
  checked: false,
  checkTitle: 'OFF',
  setChecked: () => {},
};

export default Check;
