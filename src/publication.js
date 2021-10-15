import React from 'react';
import { Button, TabPane, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import ModalBtn from './modal';

const Publication = ({
  checked,
  description,
  email,
  header,
  images,
  paidService,
  phone,
  setCheckedService,
  toggle,
}) => {
  const handleClickPrevTab = () => toggle(3);

  return (
    <TabPane tabId={4}>
      <Form>
        {paidService.map(({ number, checked }, index) => (
          <FormGroup key={`${number}_${index}`} check>
            <Label check className="service-mg">
              <Input
                className="checkbox"
                defaultChecked={checked}
                name={number}
                onChange={setCheckedService}
                type="checkbox"
              />{' '}
              <span className="label-checkbox no-text-transform">
                Paid service {number}
              </span>
            </Label>
          </FormGroup>
        ))}
        <Button
          className="half-of-width-btn service-btn left-btn label-mg"
          color="secondary"
          onClick={handleClickPrevTab}
        >
          Prev
        </Button>{' '}
        <ModalBtn
          checked={checked}
          description={description}
          email={email}
          header={header}
          images={images}
          paidService={paidService}
          phone={phone}
        />
      </Form>
    </TabPane>
  );
};

Publication.propTypes = {
  description: PropTypes.string,
  email: PropTypes.string,
  header: PropTypes.string,
  phone: PropTypes.string,
  checked: PropTypes.bool,
  setCheckedService: PropTypes.func,
  toggle: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      data_url: PropTypes.string,
    }),
  ),
  paidService: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};

Publication.defaultProps = {
  description: '',
  email: '',
  header: '',
  phone: '',
  checked: false,
  setCheckedService: () => {},
  toggle: () => {},
  images: [],
  paidService: [],
};

export default Publication;
