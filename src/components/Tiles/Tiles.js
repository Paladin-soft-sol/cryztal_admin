import React, { useState } from "react";
import { Select } from "react-select-tile";
import { CustomTypography } from "../Typography/Typography";
import PropTypes from "prop-types";
import { FormControl } from "@mui/material";
import "./Tiles.css";

const options = [
  { value: "url1", label: "Tile 1" },
  { value: "url2", label: "Tile 2" },
  { value: "url3", label: "Tile 3" },
  { value: "url4", label: "Tile 4" },
  { value: "url5", label: "Tile 5" },
  { value: "url6", label: "Tile 6" },
  { value: "url7", label: "Tile 7" },
  { value: "url8", label: "Tile 8" },
  { value: "url9", label: "Tile 9" },
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

        <FormControl className="colorBanner" fullWidth size="small">
          <Select
            value={value}
            options={options}
            className="colorBannerDrop"
            onChange={handleSelectChange}
          >
       
          </Select>
          <button
        onClick={handleTileClick}
        style={{
          width: '100%',
          padding: '10px',
          marginTop: '10px',
          background: '#FFFFFF 0% 0% no-repeat padding-box',
          border: '1px solid #707070',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
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