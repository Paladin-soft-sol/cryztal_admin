import React, { useState } from 'react';
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
  const { label, requiredField } = props;
  const [personName, setPersonName] = useState('');
  const [customInput, setCustomInput] = useState('');

  const handleChange = (event) => {
    setPersonName(event.target.value);

    // Reset the customInput when a different option is selected
    setCustomInput('');
  };

  const handleCustomInputChange = (event) => {
    setCustomInput(event.target.value);
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
            // fullWidth
            margin="normal"
            className= "PincodeTextInput"
            value={customInput} 
            onChange={handleCustomInputChange}
          />
        
          <Grid className="addIconPincode">
                  <img src={CustomIcons.AddIcon} alt="" />
                  </Grid>
          </Grid>
        )}  
         {personName === 'City Wide' && (
          <CustomDropdown
          // label={keyValue.label}
          // handleChange={onChange}
          // value={value || ""}
          // data={dropdownList}
          placeholder="Select City"
          customClass= "PincodeDropdown"
          // returnId={keyValue.returnId}
        />
        )}
         {personName === 'State Wide' && (
          <CustomDropdown
          // label={keyValue.label}
          // handleChange={onChange}
          // value={value || ""}
          // data={dropdownList}
          placeholder="Select State"
          customClass= "PincodeDropdown"
          // returnId={keyValue.returnId}
        />
        )}
          {personName === 'Nation Wide' && (
          <CustomDropdown
          // label={keyValue.label}
          // handleChange={onChange}
          // value={value || ""}
          // data={dropdownList}
          placeholder="Select Nation"
          customClass= "PincodeDropdown"
          // returnId={keyValue.returnId}
        />
        )}
      </FormControl>
    </div>
  );
};
