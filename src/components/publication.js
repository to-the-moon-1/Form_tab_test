import React from 'react';
import { Button, TabPane, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import ModalBtn from './modal';

const Publication = ({
  checked,
  description,
  email,
  handlePaidService,
  header,
  images,
  paidService,
  phone,
  toggleTab,
}) => {
  const handleClickPrevTab = () => toggleTab(3);

  return (
    <TabPane tabId={4}>
      <Form>
        {paidService.map(({ number, checked }) => (
          <FormGroup key={number} check>
            <Label check className="service-mg">
              <Input
                className="checkbox"
                defaultChecked={checked}
                name={number}
                onChange={handlePaidService}
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
          header={header.value}
          images={images}
          paidService={paidService}
          phone={phone.value}
        />
      </Form>
    </TabPane>
  );
};

Publication.propTypes = {
  description: PropTypes.string,
  email: PropTypes.string,
  header: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  phone: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  checked: PropTypes.bool,
  handlePaidService: PropTypes.func,
  toggleTab: PropTypes.func,
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
  header: { value: '', index: 1 },
  phone: { value: '', index: 2 },
  checked: false,
  handlePaidService: () => {},
  toggleTab: () => {},
  images: [],
  paidService: [],
};

export default Publication;
