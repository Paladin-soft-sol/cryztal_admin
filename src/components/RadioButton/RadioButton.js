import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { CustomTypography } from '../Typography';
import './radioButton.css';
/**
 * @name CustomRadioButton
 * @param {*} props used for the props
 * @returns {React.ReactElement} return the radiobutton
 */
export const CustomRadioButton = (props) => {
  const { handleChange, selectValue, radioData, labelText, defaultValue } =
    props;

  return (
    <Grid>
      <Grid>
        <CustomTypography
          text={labelText}
          type="caption"
          customClass="radioButtonLabelStyles"
        />
      </Grid>
      <Grid>
        <FormControl>
          <RadioGroup
            row
            name="row-radio-buttons-group"
            value={selectValue}
            onChange={(e) => handleChange(e)}
            defaultValue={defaultValue}
          >
            {radioData &&
              radioData.map((data, index) => {
                const key = index;
                return (
                  <Grid>
                    <FormControlLabel
                      key={key}
                      color="error"
                      control={
                        <Radio
                          disableRipple
                          sx={{
                            '&:hover, &:focus': {
                              backgroundColor: 'transparent'
                            }
                          }}
                          color="secondary"
                        />
                      }
                      label={
                        <CustomTypography
                          text={data.name}
                          type="primary"
                          colorType="primary"
                          customClass="radioData"
                        />
                      }
                      value={data.name}
                    />
                  </Grid>
                );
              })}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};
CustomRadioButton.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectValue: PropTypes.string,
  radioData: PropTypes.arrayOf(PropTypes.objectOf()).isRequired,
  labelText: PropTypes.string,
  defaultValue: PropTypes.string
};
CustomRadioButton.defaultProps = {
  selectValue: '',
  labelText: '',
  defaultValue: ''
};
