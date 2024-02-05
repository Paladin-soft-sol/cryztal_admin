import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { CustomTypography } from "../Typography/Typography";
import { CustomDropdown } from "../CustomDropdown";
import CustomIcons from "../../utils/icon/index";
import { Grid } from "@mui/material";
import "./pincode.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Pincode", "City Wide", "State Wide", "Nation Wide"];

export const PincodeDropdown = (props) => {
  const dispatch = useDispatch();

  const {
    label,
    requiredField,
    value,
    stateDropdownList,
    cityDropdownList,
    nationDropdownList,
    onChange,
    onPincodeChange,
    onCityChange,
    onStateChange,
    onNationChange,
  } = props;
  const [personName, setPersonName] = useState("");
  const [customInput, setCustomInput] = useState("");

  const handleChange = (event) => {
    setPersonName(event.target.value);
    setCustomInput("");
    props.onChange(event.target.value);
  };
  const handlePincodeInputChange = (event) => {
    onChange(event.target.value);
  };

  const handleCustomInputChange = (event) => {
    setCustomInput(event.target.value);
    console.log(setCustomInput, "customInput");
    onChange(event.target.value);
  };
  //state
  const [stateInput, setStateInput] = useState("");
  const [stateName, setStateName] = useState("");

  const handleStateInputChange = (event) => {
    setStateInput(event.target.value);
    console.log(setStateInput, "stateInput");
  };
  //city
  const [cityInput, setCityInput] = useState("");
  const [cityName, setCityName] = useState("");

  const handleCityInputChange = (event) => {
    setCityInput(event.target.value);
    console.log(setCityInput, "cityInput");
  };
  //Nation

  const [nationInput, setNationInput] = useState("");
  const [nationName, setNationName] = useState("");

  const handleNationInputChange = (event) => {
    setNationInput(event.target.value);
    console.log(setNationInput, "nationInput");
  };

  const handleCityChange = (event) => {
    setCityName(event.target.value);
    setCityInput("");
    onCityChange(event.target.value);
  };

  const handleStateChange = (event) => {
    setStateName(event.target.value);
    setStateInput("");
    onStateChange(event.target.value);
  };

  const handleNationChange = (event) => {
    setNationName(event.target.value);
    setNationInput("");
    onNationChange(event.target.value);
  };

  return (
    <div className="pincodeHeader">
      <CustomTypography
        type="caption"
        text={label}
        customClass="labelTextDrop"
        colorType="senary"
        requiredField={requiredField}
      />
      <FormControl className="formControl" fullWidth size="small">
        <Select
          labelId="demo-radio-label"
          id="demo-radio"
          value={personName}
          onChange={(event) => handleChange(event)}
          input={<OutlinedInput label="Tag" />}
          MenuProps={MenuProps}
          className="hai"
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>

        {personName === "Pincode" && (
          <Grid className="pincodeBoxes">
            <TextField
              // label="Enter Pincode"
              variant="outlined"
              size="small"
              margin="normal"
              className="PincodeTextInput"
              value={value}
              onChange={handlePincodeInputChange}
            />

            <Grid className="addIconPincode">
              <img src={CustomIcons.AddIcon} alt="" />
            </Grid>
          </Grid>
        )}
        {personName === "City Wide" && (
          <CustomDropdown
            data={cityDropdownList}
            placeholder="Select City"
            customClass="PincodeDropdown"
            onChange={(event) => {
              onChange(event.target.value);
              handleCityChange(event);
            }}
            handleChange={handleChange}
          />
        )}
        {personName === "State Wide" && (
          <CustomDropdown
            data={stateDropdownList}
            placeholder="Select State"
            customClass="PincodeDropdown"
            onChange={(event) => {
              onChange(event.target.value);
              handleStateChange(event);
            }}
            handleChange={handleChange}
          />
        )}
        {personName === "Nation Wide" && (
          <CustomDropdown
            data={nationDropdownList}
            placeholder="Select Nation"
            customClass="PincodeDropdown"
            onChange={(event) => {
              onChange(event.target.value);
              handleNationChange(event);
            }}
            handleChange={handleChange}
          />
        )}
      </FormControl>
    </div>
  );
};
