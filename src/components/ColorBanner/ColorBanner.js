import React, { useState } from "react";
import { CustomTypography } from "../Typography/Typography";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import "./style.css";

export const ColorBanner = (props) => {
  const { label, colors, requiredField, handleChange } = props;

  const [selectedColors, setSelectedColors] = useState([]);
  console.log(selectedColors, "handleChangekkk");

  const handleColorClick = (color) => {
    const isColorSelected = selectedColors.some((selectedColor) => selectedColor.id === color.id);

    if (isColorSelected) {
      setSelectedColors((prevColors) => prevColors.filter((c) => c.id !== color.id));
    } else {
      setSelectedColors((prevColors) => [...prevColors, color]);
    }
  };

  const useStyles = makeStyles({
    select: {
      "& ul": {
        display: "flex !important",
      },
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
      <FormControl className="formControl" fullWidth size="small">
        <Select
          size="small"
          className="color-vertical"
          fullWidth
          labelId="demo-select-small"
          id="demo-select-small"
          // onChange={(e) => handleChange(e)}
          onChange={(event) => handleChange(event.target.value.id)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={{ classes: { paper: classes.select } }}
        >
          {colors.map((color) => (
            <MenuItem
              key={color.id}
              value={color}
              className={`color_button ${selectedColors.some((c) => c.id === color.id) ? 'selected' : ''}`}
              onClick={() => handleColorClick(color)}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: color.value,   
                  cursor: "pointer",
                }}
              />
            </MenuItem>
          ))}
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
