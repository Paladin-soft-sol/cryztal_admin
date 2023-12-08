import React, { useState } from "react";
import { Select } from "react-select-tile";
import { CustomTypography } from "../Typography/Typography";
import PropTypes from "prop-types";
import { FormControl,MenuItem } from "@mui/material";
import "./Tiles.css";

const options = [
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " },
  { value: " ", label: " " }
];

export const Tiles = (props) => {
  const {label,requiredField}=props;
  const [value, setValue] = useState("");

  // const handleSubmit = value => {
  //   setValue(value);
  //   console.log(`Option selected:`, value);
  // };
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption);
  };
  const handleSubmit = () => {
    if (selectedValue) {
      console.log(`Selected Tile:`, selectedValue.value);
      // Add your submission logic here
    } else {
      console.log("Please select a tile before submitting.");
    }
  };

  return (
    <div className="App">
     
      <div className="col-sm">  
      <CustomTypography
          type="caption"
          text={label}
          customClass="labelTextDrop"
          colorType="senary"
          requiredField={requiredField}
        />
       
           <FormControl
        className="colorBanner"
        fullWidth
        // disabled={disabled}
        size="small"
      >
     
         <Select
          // placeholder="Please select ..."
          value={value}
          options={options}
          className="colorBannerDrop"
          onChange={handleSelectChange}
          // onItemClick={handleItemClick}
         
        >
          {/* <MenuItem>{placeholder}</MenuItem> */}
    
        </Select>
      </FormControl>
      </div>
    </div>
  );
}
Tiles.propTypes = {

  label: PropTypes.string,
 
  requiredField: PropTypes.bool,

};
Tiles.defaultProps = {
 
  label: "",
 
  requiredField: false,
 
};