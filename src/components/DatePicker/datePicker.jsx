/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-globals */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { CustomTypography } from '../Typography';


function CustomDatePicker(props) {
  const {
    labelText,
    label,
    year,
    onHandleChange,
    date,
    disabled,
    minDate,
    maxDate,
    dateStyle,
    requiredField,
    placeholder,
    defaultValue,
    // resetValue,
  } = props;
  // const [onChangeValue, setOnChangeValue] = React.useState(defaultValue);
  // console.log('default', defaultValue);

  // React.useEffect(() => {
  //   setOnChangeValue(defaultValue);
  // }, [defaultValue]);

  // React.useEffect(() => {
  //   setOnChangeValue('');
  // }, [resetValue]);

  return (
    <Grid className="textGrid">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CustomTypography
          text={labelText}
          colorType="primary"
          requiredField={requiredField && 'required'}
          customClass="textLabel"
        />
        <DatePicker
          defaultShow=""
          minDate={minDate && new Date(minDate)}
          // maxDate={maxDate && new Date(maxDate)}
          maxDate={maxDate}
          disableMaskedInput
          views={year ? ['year'] : ['year', 'month', 'day']}
          label={label}
          inputFormat="DD MMM YYYY"
          // value={(!isNaN(new Date(date)) && date) || new Date()}
          value={(!isNaN(new Date(date)) && date) || 'dd-mm-yyyy' || defaultValue || new Date()}
          onChange={(e) => {
            onHandleChange(moment(new Date(e)).format('DD-MMM-yyyy'));
            // setOnChangeValue(e.target.value);
          }}
          // onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              color="secondary"
              sx={{ width: '100%' }}
              className={dateStyle}
              placeholder={placeholder}
            />
          )}
          disabled={disabled}
        />
      </LocalizationProvider>
    </Grid>
  );
}
export default CustomDatePicker;
CustomDatePicker.propTypes = {
  label: PropTypes.string,
  year: PropTypes.bool,
  calendarPicker: PropTypes.bool,
  onHandleChange: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  disabled: PropTypes.bool,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  dateStyle: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  requiredField: PropTypes.string,
  defaultValue: PropTypes.string,
  // resetValue: PropTypes.bool,
};
CustomDatePicker.defaultProps = {
  label: '',
  year: false,
  calendarPicker: false,
  disabled: false,
  minDate: '',
  maxDate: '',
  dateStyle: '',
  placeholder: '',
  labelText: '',
  requiredField: '',
  defaultValue: '',
  // resetValue: false,
};
