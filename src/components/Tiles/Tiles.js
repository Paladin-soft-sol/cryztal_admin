import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel, FormGroup, Select, MenuItem } from "@mui/material";
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

const STORAGE_KEY = "selectedTiles";

export const Tiles = (props) => {
  const { label, requiredField } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [placeholder, setPlaceholder] = useState("");
  const maxSelection = 3;

  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setSelectedOptions(storedOptions);
  }, []);

  useEffect(() => {
    generatePlaceholder(selectedOptions);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  const handleCheckboxChange = (option) => {
    const isOptionSelected = selectedOptions.some((selectedOption) => selectedOption.value === option.value);

    if (isOptionSelected) {
      setSelectedOptions((prevOptions) => prevOptions.filter((o) => o.value !== option.value));
    } else {
      if (selectedOptions.length < maxSelection) {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      }
    }
  };



  const generatePlaceholder = (selectedOptions) => {
    if (selectedOptions.length === maxSelection) {
      const sortedValues = selectedOptions.map((option) => parseInt(option.value.replace("url", ""), 10)).sort((a, b) => a - b);
      setPlaceholder(sortedValues.join(", "));
    } else {
      setPlaceholder("");
    }
  };

  const isOptionDisabled = (option) => selectedOptions.length === maxSelection && !selectedOptions.some((o) => o.value === option.value);

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
            value=""
          
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="tiles-select"
          >
             <MenuItem value="" disabled>{placeholder}</MenuItem>
        
          <FormGroup className="checkbox-grid">
            <div className="grid-container">  
              {options.map((option) => (
                <div key={option.value} className="grid-item">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.some((o) => o.value === option.value)}
                        onChange={() => handleCheckboxChange(option)}
                        disabled={isOptionDisabled(option)}
                      />
                    }
                    label={option.label}
                  />
                </div>  
              ))}
            </div>
          </FormGroup>

       
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
