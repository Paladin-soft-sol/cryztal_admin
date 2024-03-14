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
import { TextInput } from "../TextInput/TextInput";
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


  const handleChange = (event) => {
    setPersonName(event.target.value);
   
    props.onChange(event.target.value);
  };
  const handlePincodeInputChange = (event) => {
    onChange(event.target.value);
  };





  const handleCityChange = (event) => {
 
    onCityChange(event.target.value);
  };

  const handleStateChange = (event) => {
   
    onStateChange(event.target.value);
  };

  const handleNationChange = (event) => {
   
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
            <TextInput
              variant="outlined"
              size="small"
              margin="normal"
              // className="PincodeTextInput"
              value={value}
              customClass="capitalize"
              type= "number"
              onHandleChange={handlePincodeInputChange}
            />
          </Grid>  
        )}
        {personName === "City Wide" && (
          <CustomDropdown
            data={cityDropdownList} 
            placeholder="Select City"
            customClass="PincodeDropdown"
            handleChange={(event) => {
              onChange(event.target.value);
              handleCityChange(event);
            }}

          />
        )}
        {personName === "State Wide" && (
          <CustomDropdown
            data={stateDropdownList}
            placeholder="Select State"
            customClass="PincodeDropdown"
            handleChange={(event) => {
              onChange(event.target.value);
              handleStateChange(event);
            }}

          />
        )}
        {personName === "Nation Wide" && (
          <CustomDropdown
            data={nationDropdownList}
            placeholder="Select Nation"
            customClass="PincodeDropdown"
            handleChange={(event) => {
              onChange(event.target.value);
              handleNationChange(event);
            }}

          />
        )}
      </FormControl>
    </div>
  );
};
