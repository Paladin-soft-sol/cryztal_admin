import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PropTypes from 'prop-types';
import './customTab.css';
/**
 *
 * @param {object} props - require props in CustomTab component
 * @returns {React.ReactElement} - returns the CustomTab component
 */
export const CustomTab = (props) => {
  const { tabList, handleChange, value } = props;

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      {tabList?.map((item, index) => {
        const key = index;
        return (
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: item.tabColor
                // left: '10px',
                // width: '90%'
                // height: '3px'
              }
            }}
          >
            <Tab
              value={key}
              label={item.tabText}
              className="tabValue"
              sx={{
                '&.MuiTab-root': {
                  color: '#C7D1D9',
                  // fontWeight: 300,
                  fontSize: '21px',
                  '&.Mui-selected': {
                    color: item.tabColor,
                    // fontWeight: 100,
                    fontSize: '21px'
                  }
                }
              }}
            />
          </Tabs>
        );
      })}
    </Box>
  );
};
CustomTab.propTypes = {
  tabList: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};
