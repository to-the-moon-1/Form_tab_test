import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import { NextBtn } from './buttons';

const Contacts = ({
  handleChangeEmail,
  handleChangePhone,
  handleCheckRequiredField,
  phone: { value },
  prevTab,
}) => {
  const handleClickNextTab = () => handleCheckRequiredField(value);

  return (
    <>
      <FormGroup>
        <Label className="label" for="example-phone">
          Phone number*
        </Label>
        <Input
          id="example-phone"
          name="phone"
          onChange={handleChangePhone}
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
          onChange={handleChangeEmail}
          placeholder="Your email"
          type="text"
        />
      </FormGroup>
      <Button className="half-of-width-btn left-btn label-mg" onClick={prevTab}>
        Prev
      </Button>{' '}
      <NextBtn
        className="half-of-width-btn label-mg"
        onClick={handleClickNextTab}
      />{' '}
    </>
  );
};

Contacts.propTypes = {
  phone: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  prevTab: PropTypes.func,
  handleCheckRequiredField: PropTypes.func,
  handleChangeEmail: PropTypes.func,
  handleChangePhone: PropTypes.func,
};

Contacts.defaultProps = {
  phone: { value: '', index: 2 },
  prevTab: () => {},
  handleCheckRequiredField: () => {},
  handleChangeEmail: () => {},
  handleChangePhone: () => {},
};

export default Contacts;
