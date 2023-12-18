import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css';
import PropTypes from "prop-types";
import { CustomTypography } from "../Typography/Typography";
import { FormControl, Select, MenuItem, Box, Grid } from "@mui/material";

export const DateRangePicker = (props) => {
  const {
    data,
    handleChange,  
    // dropDownChange,
    value,
    disabled,
    name,
    label,
    customClass,
    placeholder,
    requiredField,
    returnId,
  } = props;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
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
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
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
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
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
  // dropDownChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  customClass: PropTypes.string,
  requiredField: PropTypes.bool,
  placeholder: PropTypes.string,
  returnId: PropTypes.bool,
};
DateRangePicker.defaultProps = {
  disabled: false,
  label: "",
  customClass: "",
  requiredField: false,
  placeholder: "",
  returnId: false,
};
