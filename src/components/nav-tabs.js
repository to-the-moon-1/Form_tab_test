import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = ({ activeTab, onChangeActiveTab, tabs }) => (
  <Nav tabs>
    {tabs.map(({ index, name }) => {
      const activeClass = cn({ active: activeTab === index + 1 });
      const handleActibeTab = () => onChangeActiveTab(index);
      return (
        <NavItem key={`${name}_tab`} className="tab-name">
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
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  activeTab: 1,
  onChangeActiveTab: () => {},
  tabs: [],
};

export default Navigation;
