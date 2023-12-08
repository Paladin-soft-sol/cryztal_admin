import React from "react";
import { Grid, TextField, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import { CustomTypography } from "../Typography";
import "./TextInput.css";
/**
 *
 * @param {object} props - required props in TextInput component
 * @returns {React.ReactElement} - returns the TextInput component
 */
export const TextInput = (props) => {
  const {
    label,
    onHandleChange,
    value,
    multiline,
    rows,
    disabled,
    customClass,
    iconSource,
    type,
    placeholder,
    textInputIcon,
    isLogin,
    uniqueText,
    
  } = props;
  return (
    <Grid>
      <Grid className="textGrid">
        <CustomTypography text={label} type="caption" customClass="textLabel" />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          onChange={onHandleChange}
          value={value}
          type={type}
          multiline={multiline}
          disabled={disabled}
          className={`${isLogin && "loginBox"} ${customClass} ${
            disabled && "disable"
          }textBox`}
          id={uniqueText && "uppercase"}
          rows={rows}
          placeholder={placeholder}
          InputProps={{
            style: { fontSize: 49 },
            endAdornment: (
              <InputAdornment position="start">
                {textInputIcon && <img src={iconSource} alt="password" />}
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  onHandleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  multiline: PropTypes.bool,
  type: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  iconSource: PropTypes.string,
  textInputIcon: PropTypes.bool,
  isLogin: PropTypes.bool,
  placeholder: PropTypes.string,
  uniqueText: PropTypes.bool,
  customClass: PropTypes.string,
};
TextInput.defaultProps = {
  label: "",
  multiline: false,
  rows: 4,
  disabled: false,
  type: "",
  iconSource: "",
  textInputIcon: false,
  isLogin: false,
  placeholder: "",
  uniqueText: false,
  customClass: "",
};
