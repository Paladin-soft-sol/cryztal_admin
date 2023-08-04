import { Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CustomTypography } from '../Typography';
import './cardStyles.css';
/**
 *
 * @param {*} props -- required props
 * @returns {React.ReactElement} returns the Dashboard Card
 */
export const DashboardCard = (props) => {
  const { dashboardCard } = props;
  return (
    <Grid
      display="flex"
      justifyContent="space-around"
      container
      item
      md={12}
      sm={12}
      xs={12}
      spacing={2}
      className="cardResponsive"
    >
      {dashboardCard?.map((item, index) => {
        const key = index;
        return (
          <Grid key={key} item md={4} sm={12} xs={12} justifyContent="center">
            <NavLink to={item.navPath} style={{ textDecoration: 'none' }}>
              <Grid
                className="cardContainer"
                sx={{
                  background: `linear-gradient(to bottom, ${item.gradient1} , ${item.gradient2})`
                }}
              >
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="column"
                >
                  <Grid
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Grid className="commonCard">
                      <CustomTypography
                        text={item.header}
                        type="header"
                        customClass="dashHead"
                      />
                    </Grid>
                    <Grid
                      display="flex"
                      justifyContent="space-between"
                      flexDirection="row"
                    >
                      {item.partnerCount && (
                        <Grid>
                          <CustomTypography
                            text={item.partnerCount}
                            type="subHeading"
                            customClass="partnerCount"
                          />
                        </Grid>
                      )}
                      {item.iconChange && (
                        <Grid className="icon" mt={-2.2}>
                          <img src={item.iconChange} alt="" />
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    display="flex"
                    justifyContent="space-between"
                    pt={3}
                  >
                    <Grid>
                      {item.iconSource ? (
                        <img src={item.iconSource} alt="" className="product" />
                      ) : (
                        <CustomTypography
                          text={item.subtitle2}
                          type="subtitle2"
                          customClass="dashHead"
                        />
                      )}
                    </Grid>
                    <Grid>
                      {item.count ? (
                        <CustomTypography
                          text={item.count}
                          customClass="count"
                          customStyle={{
                            fontSize: 20,
                            color: 'white',
                            lineHeight: 3.0
                          }}
                        />
                      ) : (
                        <Grid display="flex" flexDirection="column">
                          <CustomTypography
                            text={item.subtitle3}
                            type="subtitle3"
                            customClass="dashHead"
                          />
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                  <Grid
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    <CustomTypography
                      text={item.activeCount}
                      customClass="activeCount"
                    />
                    <CustomTypography
                      text={item.inActiveCount}
                      customClass="activeCount"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
};
DashboardCard.propTypes = {
  dashboardCard: PropTypes.arrayOf(PropTypes.objectOf).isRequired
};
