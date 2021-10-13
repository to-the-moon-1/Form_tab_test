import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Navigation = ({
  activeTab,
  changeActiveTab,
  reqHeader,
  reqPhone,
  toggle,
}) => {
  const tabs = [
    { id: 0, name: 'Information' },
    { id: 1, name: 'Contact' },
    { id: 2, name: 'Photo' },
    { id: 3, name: 'Publication' },
  ];

  const newActiveTab = i => {
    if (i === 0) {
      toggle(i + 1);
    }
    if (i === 1) {
      changeActiveTab(reqHeader, i + 1);
    }
    if (i === 2 || i === 3) {
      changeActiveTab(reqPhone, i + 1);
    }
  };

  return (
    <Nav tabs>
      {tabs.map((t, i) => {
        const handleActibeTab = () => newActiveTab(i);
        return (
          <NavItem key={i} className="tab-name">
            <NavLink
              className={classnames({ active: activeTab === i + 1 })}
              onClick={handleActibeTab}
            >
              {t.name}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
};

Navigation.propTypes = {
  activeTab: PropTypes.number,
  reqHeader: PropTypes.instanceOf(null),
  reqPhone: PropTypes.instanceOf(null),
  changeActiveTab: PropTypes.func,
  toggle: PropTypes.func,
};

Navigation.defaultProps = {
  activeTab: 1,
  reqHeader: null,
  reqPhone: null,
  changeActiveTab: () => {},
  toggle: () => {},
};

export default Navigation;
