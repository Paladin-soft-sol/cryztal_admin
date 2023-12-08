
import React, { useState } from "react";
import { CustomTypography } from "../Typography/Typography";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem } from "@mui/material";
  
export const ColorBanner = (props) => {
    const {label,requiredField,handleChange}= props;
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    { id: 1, name: "Red", value: "#FF0000" },
    { id: 2, name: "Green", value: "#00FF00" },
    { id: 3, name: "Blue", value: "#0000FF" },
    { id: 4, name: "Yellow", value: "#FFFF00" },
    // Add more colors as needed
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
     <CustomTypography
          type="caption"
          text={label}
          customClass="labelTextDrop"
          colorType="senary"
          requiredField={requiredField}
        />
          <FormControl
        className="formControl"
        fullWidth
        // disabled={disabled}
        size="small"
      >
        <Select
          size="small"
         
          fullWidth
          labelId="demo-select-small"
          id="demo-select-small"
          onChange={(e) => handleChange(e)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
         
       {colors.map((color) => (
          <div
            key={color.id}
          className="color_button"
            onClick={() => handleColorClick(color)}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color.value,
              margin: "5px",
              cursor: "pointer",
            }}
          />
        ))}
            {selectedColor && (
        <div>
          <h3>Selected Color: {selectedColor.name}</h3>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: selectedColor.value,
            }}
          />
        </div>
      )}
        </Select>
      </FormControl>
     
    </div>
  );
};
ColorBanner.propTypes = { 
    label: PropTypes.string,
    requiredField: PropTypes.bool,
  };
  ColorBanner.defaultProps = {
 label: "",
requiredField: false, 
  };

