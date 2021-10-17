import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import tabs from '../constants/tabs-for-nav';
import changeTab from '../utilites/change-tab';

const Navigation = ({ activeTab, header, phone, toggle, toggleError }) => (
  <Nav tabs>
    {tabs.map(({ index, name }) => {
      const handleActibeTab = () =>
        changeTab(activeTab, header, phone, toggle, toggleError, index);
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
  header: PropTypes.object,
  phone: PropTypes.object,
  toggle: PropTypes.func,
  toggleError: PropTypes.func,
};

Navigation.defaultProps = {
  activeTab: 1,
  header: { value: '', index: 1 },
  phone: { value: '', index: 2 },
  toggle: () => {},
  toggleError: () => {},
};

export default Navigation;
