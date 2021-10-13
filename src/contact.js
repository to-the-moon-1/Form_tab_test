import React from 'react';
import { Button, FormGroup, Label, Input, TabPane, Form } from 'reactstrap';
import PropTypes from 'prop-types';

const Contact = ({
  phone,
  prevTab,
  reqPhone,
  requiredSuccess,
  setEmail,
  setPhone,
}) => {
  const handleChangePhone = e => setPhone(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleClickNextTab = () => requiredSuccess(phone);

  return (
    <TabPane tabId={2}>
      <Form>
        <FormGroup>
          <Label className="label" for="example-phone">
            Phone number*
          </Label>
          <Input
            ref={reqPhone}
            id="example-phone"
            name="phone"
            onChange={handleChangePhone}
            placeholder="Your phone number"
            required
            type="text"
            value={phone}
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
        <Button
          className="half-of-width-btn left-btn label-mg"
          color="secondary"
          onClick={prevTab}
        >
          Prev
        </Button>{' '}
        <Button
          className="half-of-width-btn label-mg"
          color="primary"
          onClick={handleClickNextTab}
        >
          Next
        </Button>{' '}
      </Form>
    </TabPane>
  );
};

Contact.propTypes = {
  phone: PropTypes.string,
  reqPhone: PropTypes.instanceOf(null),
  setEmail: PropTypes.func,
  setPhone: PropTypes.func,
  prevTab: PropTypes.func,
  requiredSuccess: PropTypes.func,
};

Contact.defaultProps = {
  phone: '',
  reqPhone: null,
  setEmail: () => {},
  setPhone: () => {},
  prevTab: () => {},
  requiredSuccess: () => {},
};

export default Contact;
