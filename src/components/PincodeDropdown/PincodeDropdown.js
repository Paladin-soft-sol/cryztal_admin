import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { CustomTypography } from '../Typography/Typography';
import { CustomDropdown } from '../CustomDropdown';
import CustomIcons from "../../utils/icon/index";
import {Grid} from '@mui/material';
import './pincode.css';

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

const names = ['Pincode', 'City Wide', 'State Wide', 'Nation Wide'];

export const PincodeDropdown = (props) => {
  const dispatch = useDispatch();
  const { label, requiredField ,value,handleInputChange,stateDropdownList,cityDropdownList,nationDropdownList,onChange} = props;
  const [personName, setPersonName] = useState('');
  const [customInput, setCustomInput] = useState('');





  // const handleChange = (event) => {
  //   setPersonName(event.target.value);
  //   setCustomInput('');
   
  // };
  

  // const handleCustomInputChange = (event) => {
  //   setCustomInput(event.target.value);
  //   console.log(setCustomInput,"customInput")
  // };
  const handleChange = (event) => {
    setPersonName(event.target.value);
    setCustomInput('');
    onChange(event.target.value); // Call the onChange prop with the selected value
  };

  // ... existing code

  const handleCustomInputChange = (event) => {
    setCustomInput(event.target.value);
    console.log(setCustomInput, "customInput");
    onChange(event.target.value); // Call the onChange prop with the custom input value
  };
  //state
  const [stateInput, setStateInput] = useState('');
  const [stateName, setStateName] = useState('');

  const handleStateChange = (event) => {
    setStateName(event.target.value);
    setStateInput('');
   
  };
  

  const handleStateInputChange = (event) => {
    setStateInput(event.target.value);
    console.log(setStateInput,"stateInput")
  };
//city
  const [cityInput, setCityInput] = useState('');
  const [cityName, setCityName] = useState('');

  const handleCityChange = (event) => {
    setCityName(event.target.value);
    setCityInput('');
   
  };
  

  const handleCityInputChange = (event) => {
    setCityInput(event.target.value);
    console.log(setCityInput,"cityInput")
  };
//Nation

const [nationInput, setNationInput] = useState('');
const [nationName, setNationName] = useState('');

const handleNationChange = (event) => {
  setNationName(event.target.value);
  setNationName('');
 
};


const handleNationInputChange = (event) => {
  setNationInput(event.target.value);
  console.log(setNationInput,"nationInput")
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
          onChange={handleChange}
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

        {personName === 'Pincode' && (
          <Grid className='pincodeBoxes'>
          <TextField
            label="Enter Pincode"
            variant="outlined"
            size="small"  
           
            margin="normal"
            className= "PincodeTextInput"
           
            value={value}
          
            onChange={handleInputChange}
          />
        
          <Grid className="addIconPincode">
                  <img src={CustomIcons.AddIcon} alt="" />
                  </Grid>
          </Grid>
        )}  
         {personName === 'City Wide' && (
          <CustomDropdown
          data={cityDropdownList}
          placeholder="Select City"
          customClass= "PincodeDropdown"
          onChange={handleCityChange}
        />
        )}
         {personName === 'State Wide' && (  
          <CustomDropdown
         
          data={stateDropdownList}
          placeholder="Select State"
          customClass= "PincodeDropdown"
          onChange={handleStateChange}
        />
        )}
          {personName === 'Nation Wide' && (
          <CustomDropdown
          data={nationDropdownList}
          placeholder="Select Nation"
          customClass= "PincodeDropdown"
          onChange={handleNationChange}
        />
        )}
      </FormControl>
    </div>
  );
};
