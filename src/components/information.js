import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

import Checkbox from './checkbox';
import { NextBtn } from './buttons';

const Information = ({
  checked,
  checkTitle,
  onChangeDescript,
  onChangeHeader,
  onCheck,
  onCheckReqField,
  header: { value },
}) => {
  const onClickNextTab = () => onCheckReqField(value);

  return (
    <>
      <FormGroup>
        <Label className="label" for="example-header">
          Header*
        </Label>
        <Input
          id="example-header"
          name="header"
          onChange={onChangeHeader}
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
          onChange={onChangeDescript}
          placeholder="Your description"
          type="textarea"
        />
      </FormGroup>
      <Checkbox
        checked={checked}
        checkTitle={checkTitle}
        setChecked={onCheck}
      />
      <NextBtn
        className="full-of-width-btn label-mg"
        onClick={onClickNextTab}
      />
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
  onChangeDescript: PropTypes.func,
  onChangeHeader: PropTypes.func,
  onCheck: PropTypes.func,
  onCheckReqField: PropTypes.func,
};

Information.defaultProps = {
  checked: false,
  checkTitle: 'OFF',
  header: { value: '', index: 1 },
  onChangeDescript: () => {},
  onChangeHeader: () => {},
  onCheck: () => {},
  onCheckReqField: () => {},
};

export default Information;
