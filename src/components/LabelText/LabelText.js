import { React } from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { CustomTypography } from '../Typography';
import './labelText.css';
/**
 *
 * @param {object} props - required props in LabelText component
 * @returns {React.ReactElement} - returns the LabelText component
 */
export const LabelText = (props) => {
  const { label, value } = props;
  return (
    <Grid>
      <CustomTypography text={label} type="link" colorType="text" />
      <p className="para">{value}</p>
    </Grid>
  );
};
LabelText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};
LabelText.defaultProps = {
  label: '',
  value: ''
};
