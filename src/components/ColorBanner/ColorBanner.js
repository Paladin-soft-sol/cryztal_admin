
import React, { useState } from "react";
import { CustomTypography } from "../Typography/Typography";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
  
export const ColorBanner = (props) => {
    const {label,requiredField,handleChange}= props;
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    { id: 1, name: "BLUE", value: "#007DB8" },
    { id: 2, name: "RED", value: "#E70012" },
    { id: 3, name: "GREEN", value: "#1AC877" },
    { id: 4, name: "Yellow", value: "#FFC518" },
    { id: 4, name: "PURPLE", value: "#E673EA" },
    { id: 4, name: "SKYBLUE", value: "#1FBCD2" },
    { id: 4, name: "VIOLET", value: "#9A2FAE" },
    { id: 4, name: "PINK", value: "#FF0056" },
    // Add more colors as needed
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  const useStyles = makeStyles({
    select: {
        "& ul": {
            // backgroundColor: "#cccccc",
          display: "flex !important",
        },
        // "& li": {
        //     fontSize: 12,
        // },
    },
  });

  const classes = useStyles();
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
         className="color-vertical"
          fullWidth
          labelId="demo-select-small"
          id="demo-select-small"
          onChange={(e) => handleChange(e)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={{ classes: { paper: classes.select } }}
        >
         
       {colors.map((color) => (
          <div
            key={color.id}
          className="color_button"
            onClick={() => handleColorClick(color)}
            style={{
              width: "30px",
              height: "30px",
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

