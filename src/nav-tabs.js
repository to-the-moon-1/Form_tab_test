import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import tabs from './tabs-for-nav';
import changeTab from './change-tab';

const Navigation = ({
  activeTab,
  reqHeader,
  reqPhone,
  toggle,
  toggleError,
}) => (
  <Nav tabs>
    {tabs.map(({ index, name }) => {
      const handleActibeTab = () =>
        changeTab(activeTab, reqHeader, reqPhone, toggle, toggleError, index);
      return (
        <NavItem key={`${name}_${index}`} className="tab-name">
          <NavLink
            className={classnames({ active: activeTab === index + 1 })}
            onClick={handleActibeTab}
          >
            {name}
          </NavLink>
        </NavItem>
      );
    })}
  </Nav>
);

Navigation.propTypes = {
  activeTab: PropTypes.number,
  reqHeader: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
  reqPhone: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) }),
  ]),
  toggle: PropTypes.func,
  toggleError: PropTypes.func,
};

Navigation.defaultProps = {
  activeTab: 1,
  reqHeader: null,
  reqPhone: null,
  toggle: () => {},
  toggleError: () => {},
};

export default Navigation;
