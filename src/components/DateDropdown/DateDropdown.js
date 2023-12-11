
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import './DateDropdown.css';
// import { CustomTypography } from "../Typography/Typography";
import {CustomTypography } from '../Typography/Typography';

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

const names = [
  'Single Day',
  '2 Days',
  'Weeks',
  '1 Month',
  '2 Months'
];
console.log(names,"namesnames")
export const DateDropdown = (props) => {
  const {label,requiredField}=props;
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div className="DateHeader">
      <CustomTypography
          type="caption"
          text={label}
          customClass="labelTextDrop"
          colorType="senary"
          requiredField={requiredField}
        />
      <FormControl sx={{ m: 1, width: 300 }}>
        {/* <InputLabel id="demo-radio-label">Tag</InputLabel> */}
        <Select
          labelId="demo-radio-label"
          id="demo-radio"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Radio checked={personName === name} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
             {names.length === 0 && (
          <TextField
            label="Enter Single Pincode"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
          />
        )}
        </Select>
      </FormControl>
    </div>
  );
};
