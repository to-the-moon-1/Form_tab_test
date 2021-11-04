import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

import { initialPhone } from '../constants/initial-state';

import { PrimaryBtn, SecondaryBtn } from './buttons';

const Contacts = ({
  onChangeEmail,
  onChangePhone,
  onCheckReqField,
  phone: { value },
  prevTab,
}) => {
  const onClickNextTab = () => onCheckReqField(value);

  return (
    <>
      <FormGroup>
        <Label className="label" for="example-phone">
          Phone number*
        </Label>
        <Input
          id="example-phone"
          name="phone"
          onChange={onChangePhone}
          placeholder="Your phone number"
          required
          type="text"
          value={value}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label label-mg" for="example-email">
          Email
        </Label>
        <Input
          id="example-email"
          name="email"
          onChange={onChangeEmail}
          placeholder="Your email"
          type="text"
        />
      </FormGroup>
      <SecondaryBtn
        className="half-of-width-btn left-btn label-mg"
        onClick={prevTab}
      >
        Prev
      </SecondaryBtn>
      <PrimaryBtn
        className="half-of-width-btn label-mg"
        onClick={onClickNextTab}
      >
        Next
      </PrimaryBtn>
    </>
  );
};

Contacts.propTypes = {
  phone: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  prevTab: PropTypes.func,
  onCheckReqField: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePhone: PropTypes.func,
};

Contacts.defaultProps = {
  phone: initialPhone,
  prevTab: () => {},
  onCheckReqField: () => {},
  onChangeEmail: () => {},
  onChangePhone: () => {},
};

export default Contacts;
