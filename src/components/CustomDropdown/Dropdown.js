/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem, Box } from "@mui/material";
import "./customDropdown.css";
import { CustomTypography } from "../Typography/Typography";
/**
 *
 * @param {object} props - props required in normal dropdown
 * @returns {React.ReactElement} - returns the normal dropdown
 */
export const CustomDropdown = (props) => {
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
  return (
    <Box className="box" item md={12} sm={12}>
      <Box>
        <CustomTypography
          type="caption"
          text={label}
          customClass="labelTextDrop"
          colorType="senary"
          requiredField={requiredField}
        />
      </Box>
      <FormControl
        className="formControl"
        fullWidth
        disabled={disabled}
        size="small"
      >
        <Select
          size="small"
          name={name}
          fullWidth
          labelId="demo-select-small"
          id="demo-select-small"
          value={value}
          data={data}
          className={`${customClass} ${disabled && "disable"} customDropdown`}
          onChange={(e) => handleChange(e)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem>{placeholder}</MenuItem>
          {data?.length &&
            data?.map((item) => {
              return (
                <MenuItem
                  value={returnId ? item?.id : item?.value}
                  key={item?.id}
                >
                  {item?.value}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
};

CustomDropdown.propTypes = {
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
CustomDropdown.defaultProps = {
  disabled: false,
  label: "",
  customClass: "",
  requiredField: false,
  placeholder: "",
  returnId: false,
};
