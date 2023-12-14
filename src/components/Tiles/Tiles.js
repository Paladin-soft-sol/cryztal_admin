import React, { useState } from "react";
import { Select } from "react-select-tile";
import { CustomTypography } from "../Typography/Typography";
import PropTypes from "prop-types";
import { FormControl } from "@mui/material";
import "./Tiles.css";

const options = [
  { value: "url1", label: "" },
  { value: "url2", label: "" },
  { value: "url3", label: "" },
  { value: "url4", label: "" },
  { value: "url5", label: "" },
  { value: "url6", label: "" },
  { value: "url7", label: "" },
  { value: "url8", label: "" },
  { value: "url9", label: "" },
];


export const Tiles = (props) => {
  const { label, requiredField } = props;
  const [value, setValue] = useState("");
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
  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileClick = (tile) => {
    setSelectedTile(tile);
  };
  const handleButtonClick = () => {
    // Handle submit logic here
    console.log('Selected Tile:', selectedTile);
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

        <FormControl className="colorBanner bye" fullWidth size="small">
          <Select
            value={value}
            options={options}
            className="colorBannerDrop"
            onChange={handleSelectChange}
          >
       
          </Select>
     
        </FormControl>
      </div>
    </div>
  );
};
Tiles.propTypes = {
  label: PropTypes.string,

  requiredField: PropTypes.bool,
};
Tiles.defaultProps = {
  label: "",

  requiredField: false,
};