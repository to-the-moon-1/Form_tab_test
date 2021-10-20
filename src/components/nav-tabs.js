import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import cl from 'classnames';
import PropTypes from 'prop-types';

import tabs from '../constants/tabs-for-nav';
import changeTab from '../utilites/change-tab';

const Navigation = ({ activeTab, header, phone, toggleTab, toggleError }) => (
  <Nav tabs>
    {tabs.map(({ index, name }) => {
      const handleActibeTab = () =>
        changeTab(activeTab, header, phone, toggleTab, toggleError, index);
      return (
        <NavItem key={name} className="tab-name">
          <NavLink
            className={cl({ active: activeTab === index + 1 })}
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
  header: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  phone: PropTypes.shape({
    value: PropTypes.string,
    index: PropTypes.number,
  }),
  toggleTab: PropTypes.func,
  toggleError: PropTypes.func,
};

Navigation.defaultProps = {
  activeTab: 1,
  header: { value: '', index: 1 },
  phone: { value: '', index: 2 },
  toggleTab: () => {},
  toggleError: () => {},
};

export default Navigation;
