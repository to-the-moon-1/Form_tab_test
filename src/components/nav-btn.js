import React from 'react';
import PropTypes from 'prop-types';

import { PrimaryBtn, SecondaryBtn } from './buttons';

const NavBtn = ({ funkNext, funkPrev }) => (
  <>
    <SecondaryBtn
      className="half-of-width-btn left-btn label-mg"
      onClick={funkPrev}
    >
      Prev
    </SecondaryBtn>
    <PrimaryBtn className="half-of-width-btn label-mg" onClick={funkNext}>
      Next
    </PrimaryBtn>
  </>
);

NavBtn.propTypes = {
  funkNext: PropTypes.func,
  funkPrev: PropTypes.func,
};

NavBtn.defaultProps = {
  funkNext: () => {},
  funkPrev: () => {},
};

export default NavBtn;
