import React from 'react';
import PropTypes from 'prop-types';

import { PrimaryBtn, SecondaryBtn } from './buttons';

const PrevNextBtn = ({ funkNext, funkPrev }) => (
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

PrevNextBtn.propTypes = {
  funkNext: PropTypes.func,
  funkPrev: PropTypes.func,
};

PrevNextBtn.defaultProps = {
  funkNext: () => {},
  funkPrev: () => {},
};

export default PrevNextBtn;
