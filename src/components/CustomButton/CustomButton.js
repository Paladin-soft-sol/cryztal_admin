import React from 'react';
import { Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';
/**
 *
 * @param {*} props --
 * @returns {React.ReactElement} returns the CustomButton
 */
export const CustomButton = (props) => {
  const { btnTitle, variant, color, btnStyles, customClass, onClickHandle } =
    props;

  return (
    <Grid>
      <Button
        variant={variant}
        color={color}
        sx={btnStyles}
        onClick={onClickHandle}
        className={customClass}
        type="submit"
      >
        {btnTitle}
      </Button>
    </Grid>
  );
};
CustomButton.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  customClass: PropTypes.string,
  btnStyles: PropTypes.oneOfType([PropTypes.object]),
  onClickHandle: PropTypes.func
};
CustomButton.defaultProps = {
  variant: 'contained',
  color: '',
  customClass: '',
  btnStyles: {},
  onClickHandle: () => null
};
