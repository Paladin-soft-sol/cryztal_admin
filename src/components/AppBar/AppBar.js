/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Grid,
  ListItemText,
  ListItemIcon,
  Avatar
} from '@mui/material';
import PropTypes from 'prop-types';
import './appBar.css';
/**
 *
 * @param {object} props  - required props in CustomAppBar
 * @returns {React.ReactElement} - returns the CustomAppBar component
 */
export const CustomAppBar = (props) => {
  const {
    menuItemList,
    onClickListItem,
    batch,
    onClickMenu,
    userIcon,
    logoutIcon,
    logout,
    // notificationIcon,
    logoImage
    // menuIcon
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  /**
   *
   * @param {*} event - passing event
   */
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  /**
   *
   */
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  /**
   *
   */
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  /**
   *
   */
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className="menuList"
    >
      <MenuItem onClick={handleMenuClose} className="profile">
        <ListItemIcon>
          <Avatar
            alt="Image"
            src={userIcon}
            className="profileICon"
            style={{ height: '30px', width: '30px' }}
          />
        </ListItemIcon>
        <ListItemText className="avatarList">John Doe</ListItemText>
      </MenuItem>
      {menuItemList?.map((item, index) => {
        const key = index;
        return (
          <MenuItem className="mainMenu" onClick={handleMenuClose} key={key}>
            <ListItemIcon>
              <img src={item.source} alt="icon" />
            </ListItemIcon>
            <ListItemText onClick={onClickListItem} className="menuText">
              {item.menuText}
            </ListItemText>
          </MenuItem>
        );
      })}
    </Menu>
  );
  /**
   *
   */
  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right'
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right'
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       />
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appBar">
        <Toolbar
          sx={{
            background: 'white',
            pl: 0,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Grid display="flex">
            <img src={logoImage} className="logo" alt="logo" />
            {/* <img
              src={menuIcon}
              className="menuIcon"
              alt="menu"
              onClick={onClickMenu}
              aria-hidden
            /> */}
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="show 5 new notifications"
                color="inherit"
              >
                <Badge badgeContent={batch}>
                  <img
                    src={notificationIcon}
                    className="notification"
                    alt="notification"
                  />
                </Badge>
              </IconButton>
            </Box> */}
            <Box sx={{ flexGrow: 1, cursor: 'pointer' }}>
              <Grid onClick={handleProfileMenuOpen} display="flex" pl={1}>
                <p className="userName1">Admin</p>
                <img
                  src={logoutIcon}
                  alt="customer"
                  className="logoutIcon"
                  onClick={logout}
                  aria-hidden
                />
              </Grid>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* {renderMenu} */}
      {/* {renderMobileMenu} */}
    </Box>
  );
};

CustomAppBar.propTypes = {
  menuItemList: PropTypes.arrayOf(PropTypes.objectOf),
  onClickListItem: PropTypes.func,
  batch: PropTypes.number,
  onClickMenu: PropTypes.func,
  userIcon: PropTypes.string,
  logoutIcon: PropTypes.string,
  logout: PropTypes.func,
  // notificationIcon: PropTypes.string,
  logoImage: PropTypes.string
  // menuIcon: PropTypes.string
};
CustomAppBar.defaultProps = {
  menuItemList: [],
  onClickListItem: () => null,
  batch: 0,
  onClickMenu: () => null,
  userIcon: '',
  logoutIcon: '',
  logout: () => {},
  // notificationIcon: '',
  logoImage: ''
  // menuIcon: ''
};
