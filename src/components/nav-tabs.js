import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import cn from 'classnames';
import PropTypes from 'prop-types';

import tabs from '../constants/tabs-for-nav';

const Navigation = ({ activeTab, onChangeActiveTab }) => (
  <Nav tabs>
    {tabs.map(({ index, name }) => {
      const activeClass = cn({ active: activeTab === index + 1 });
      const handleActibeTab = () => onChangeActiveTab(index);
      return (
        <NavItem key={name} className="tab-name">
          <NavLink className={activeClass} onClick={handleActibeTab}>
            {name}
          </NavLink>
        </NavItem>
      );
    })}
  </Nav>
);

Navigation.propTypes = {
  activeTab: PropTypes.number,
  onChangeActiveTab: PropTypes.func,
};

Navigation.defaultProps = {
  activeTab: 1,
  onChangeActiveTab: () => {},
};

export default Navigation;
