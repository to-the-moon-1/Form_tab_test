import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label, Input } from 'reactstrap';

import Dialog from './dialog';

const Publication = ({
  checkPaidService,
  checkTitle,
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
    <>
      <ul className="clear-list-style">
        {paidService.map(({ number, checked }) => (
          <li key={`${number}_checkbox`}>
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
        onClick={handleClickPrevTab}
      >
        Prev
      </Button>{' '}
      <Dialog
        checkPaidService={checkPaidService}
        checkTitle={checkTitle}
        description={description}
        email={email}
        header={header.value}
        images={images}
        phone={phone.value}
      />
    </>
  );
};

Publication.propTypes = {
  checkTitle: PropTypes.string,
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
  checkTitle: 'OFF',
  description: '',
  email: '',
  header: { value: '', index: 1 },
  phone: { value: '', index: 2 },
  handlePaidService: () => {},
  toggleTab: () => {},
  images: [],
  paidService: [],
  checkPaidService: [],
};

export default Publication;
