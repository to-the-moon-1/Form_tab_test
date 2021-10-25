import React from 'react';
import { Button, TabPane, Form, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import ModalWindow from './modal';

const Publication = ({
  checked,
  checkPaidService,
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
        <ul className="clear-list-style">
          {paidService.map(({ number, checked }) => (
            <li key={number}>
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
            </li>
          ))}
        </ul>
        <Button
          className="half-of-width-btn service-btn left-btn label-mg"
          color="secondary"
          onClick={handleClickPrevTab}
        >
          Prev
        </Button>{' '}
        <ModalWindow
          checked={checked}
          checkPaidService={checkPaidService}
          description={description}
          email={email}
          header={header.value}
          images={images}
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
  checkPaidService: PropTypes.arrayOf(
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
  checkPaidService: [],
};

export default Publication;
