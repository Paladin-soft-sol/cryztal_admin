import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './sideMenu.css';

/**
 *
 * @param {object} props  - required props in NavBar
 * @returns {React.ReactElement} - returns the NavBar component
 */
export const Navbar = (props) => {
  const { navList, menuCollapse } = props;
  const Location = useLocation();
  /**
   *
   * @param {string} nav - passing nav
   * @returns {Function} - nav active color
   */
  const getNavActiveColor = (nav) => {
    if (
      nav === Location.pathname ||
      `${nav}/Register` === Location.pathname ||
      `${nav}/Register/` === Location.pathname ||
      `${nav}/approvalView/` === Location.pathname ||
      `${nav}/reportsView/` === Location.pathname ||
      `${nav}/customerView/` === Location.pathname ||
      `${nav}/AdView/` === Location.pathname
    ) {
      return 'static';
    }

    return 'highlight';
  };
  return (
    <div className="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarContent>
          <Menu iconShape="square">
            {navList?.map((nav) => {
              return (
                <div>
                  <NavLink to={nav.nav} style={{ textDecoration: 'none' }}>
                    <MenuItem>
                      <span className={getNavActiveColor(nav.nav)} />
                      <span className="icon_size">
                        <div className="navIconHold">
                          <img src={nav.icon} alt="" />
                        </div>
                        {!menuCollapse ? nav.name : ''}
                      </span>
                    </MenuItem>
                  </NavLink>
                </div>
              );
            })}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};
Navbar.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  menuCollapse: PropTypes.bool
};
Navbar.defaultProps = {
  menuCollapse: false
};
