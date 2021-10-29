import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

import Checkbox from './checkbox';
import { NextBtn } from './buttons';

const Information = ({
  checked,
  checkTitle,
  handleChangeDescription,
  handleChangeHeader,
  handleCheck,
  handleCheckRequiredField,
  header: { value },
}) => {
  const handleClickNextTab = () => handleCheckRequiredField(value);

  return (
    <>
      <FormGroup>
        <Label className="label" for="example-header">
          Header*
        </Label>
        <Input
          id="example-header"
          name="header"
          onChange={handleChangeHeader}
          placeholder="Your header"
          required
          type="text"
          value={value}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label label-mg" for="example-text">
          Description
        </Label>
        <Input
          id="example-text"
          name="text"
          onChange={handleChangeDescription}
          placeholder="Your description"
          type="textarea"
        />
      </FormGroup>
      <Checkbox
        checked={checked}
        checkTitle={checkTitle}
        setChecked={handleCheck}
      />
      <NextBtn
        className="full-of-width-btn label-mg"
        onClick={handleClickNextTab}
      />{' '}
    </>
  );
};

Information.propTypes = {
  checked: PropTypes.bool,
  checkTitle: PropTypes.string,
  header: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  handleChangeDescription: PropTypes.func,
  handleChangeHeader: PropTypes.func,
  handleCheck: PropTypes.func,
  handleCheckRequiredField: PropTypes.func,
};

Information.defaultProps = {
  checked: false,
  checkTitle: 'OFF',
  header: { value: '', index: 1 },
  handleChangeDescription: () => {},
  handleChangeHeader: () => {},
  handleCheck: () => {},
  handleCheckRequiredField: () => {},
};

export default Information;
