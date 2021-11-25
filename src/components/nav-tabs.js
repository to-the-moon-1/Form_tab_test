import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = ({ activeTab, onChangeActiveTab, tabs, width }) => (
  <Nav tabs>
    {tabs.map(({ index, name, src }) => {
      const activeClass = cn({ active: activeTab === index + 1 });
      const onActibeTab = () => onChangeActiveTab(index);
      return (
        <NavItem key={`${name}_tab`} className="tab-name">
          <NavLink className={activeClass} onClick={onActibeTab}>
            {width < 640 ? (
              <img alt={name} className="tab-img" src={src} />
            ) : (
              name
            )}
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
  width: PropTypes.number,
};

Navigation.defaultProps = {
  activeTab: 1,
  onChangeActiveTab: () => {},
  tabs: [],
  width: 0,
};

export default memo(Navigation);
