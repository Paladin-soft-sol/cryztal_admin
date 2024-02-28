import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css';
import PropTypes from "prop-types";
import { CustomTypography } from "../Typography/Typography";
import { FormControl, Select, MenuItem, Box, Grid } from "@mui/material";
const checkData = (val) => {
  try {
    return new Date(val);
  } catch (e) {
    return ''
  }
}
export const DateRangePicker = (props) => {
  const {
    data,
    handleChange,  
    date,
    value,
    disabled,
    name,
    label,
    customClass,
    placeholder,
    requiredField,
    returnId,
    dateKeys = {},
    edit = false,
  } = props;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    console.log('dataeee', props);
    if (date && edit) {
      console.log(date, "date1");
      if (dateKeys.start) {
          console.log(dateKeys.start, "date1hgjh");
        handleStartDateChange(checkData(date[dateKeys.start]));
      }
      if (dateKeys.end) { 
        handleEndDateChange(checkData(date[dateKeys.end]));
      }
    }
  }, [date, edit]);



  const handleStartDateChange = (date) => {
      console.log(date,"datedate");
      setStartDate(date);
      handleChange({ startDate: date, endDate }); // Call handleChange with updated values
    };

    const handleEndDateChange = (date) => {
      setEndDate(date);
      handleChange({ startDate, endDate: date }); // Call handleChange with updated values
    };

  return (
    <Grid container md={12} lg={12} sm={12} xs={12}>
      <Grid item md={6} lg={6} sm={12} xs={12}>
      <Box>
        <CustomTypography
          type="caption"
          text= "From Date"
          customClass="labelTextDrop" 
          colorType="senary"
          requiredField={requiredField}
        />
      </Box>
    
        <DatePicker
          // dateFormat = "yyyy/MM/dd"
          selected={startDate}
          onChange={handleStartDateChange}
          className="fromDate"
        />
      
      </Grid>
      <Grid item md={6} lg={6} sm={12} xs={12}>
      <Box>
        <CustomTypography
          type="caption"
          text= "To Date"
          customClass="labelTextDrop"
          colorType="senary"
          requiredField={requiredField}
        />
      </Box>
       
        <DatePicker
          // dateFormat = "yyyy/MM/dd"
          selected={endDate}
          onChange={handleEndDateChange}
          minDate={startDate}
          className="toDate"
        />
      </Grid>
    </Grid>
  );
};

export default DateRangePicker;

DateRangePicker.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  customClass: PropTypes.string,
  requiredField: PropTypes.bool,
  placeholder: PropTypes.string,
  returnId: PropTypes.bool,
  dateKeys: PropTypes.any
};
DateRangePicker.defaultProps = {
  disabled: false,
  label: "",
  customClass: "",
  requiredField: false,
  placeholder: "",
  returnId: false,
  dateKeys: null,
};
