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
  const { label, requiredField, onChangePlaceholder } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [placeholder, setPlaceholder] = useState();
  console.log(placeholder, "placeholder");
  const threeSelection = 3;
  const twoSelection = 2;
  const singleSelection =1;

  
  

  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setSelectedOptions(storedOptions);
  }, []);

  useEffect(() => {
    generatePlaceholder(selectedOptions);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedOptions));
    onChangePlaceholder(placeholder);
  }, [selectedOptions, placeholder, onChangePlaceholder]);


const handleCheckboxChange = (option) => {
  const isOptionSelected = selectedOptions.some((selectedOption) => selectedOption.value === option.value);

  if (isOptionSelected) {
    setSelectedOptions((prevOptions) => prevOptions.filter((o) => o.value !== option.value));
  } else {
    if (selectedOptions?.length < threeSelection) {
      const isValidSelection = selectedOptions.every((selectedOption) => {
        const selectedIndex = parseInt(selectedOption.value.replace("url", ""));
        const optionIndex = parseInt(option.value.replace("url", ""));

        const selectedRow = Math.floor((selectedIndex - 1) / 3);
        const selectedCol = (selectedIndex - 1) % 3;
        const optionRow = Math.floor((optionIndex - 1) / 3);
        const optionCol = (optionIndex - 1) % 3;

        return selectedRow === optionRow || selectedCol === optionCol;
      });

      if (isValidSelection) {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      } else {
        console.log("Diagonal selection is not allowed.");
      }
    } else if (selectedOptions?.length < twoSelection) {
      const isValidSelection = selectedOptions.every((selectedOption) => {
        const selectedIndex = parseInt(selectedOption.value.replace("url", ""));
        const optionIndex = parseInt(option.value.replace("url", ""));

        const selectedRow = Math.floor((selectedIndex - 1) / 2);
        const selectedCol = (selectedIndex - 1) % 2;
        const optionRow = Math.floor((optionIndex - 1) / 2);
        const optionCol = (optionIndex - 1) % 2;

        return selectedRow === optionRow || selectedCol === optionCol;
      });

      if (isValidSelection) {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      } else {
        console.log("Diagonal selection is not allowed.");
      }
    } else if (selectedOptions?.length < singleSelection) {
      const isValidSelection = selectedOptions.every((selectedOption) => {
        const selectedIndex = parseInt(selectedOption.value.replace("url", ""));
        const optionIndex = parseInt(option.value.replace("url", ""));

        const selectedRow = Math.floor((selectedIndex - 1) / 2);
        const selectedCol = (selectedIndex - 1) % 2;
        const optionRow = Math.floor((optionIndex - 1) / 2);
        const optionCol = (optionIndex - 1) % 2;

        return selectedRow === optionRow || selectedCol === optionCol;
      });

      if (isValidSelection) {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
      } else {
        console.log("Diagonal selection is not allowed.");
      }
    }
  }
};


  const generatePlaceholder = (selectedOptions) => {
    if (selectedOptions?.length === threeSelection) {
      const sortedValues = selectedOptions
        .map((option) => parseInt(option.value.replace("url", ""), 10))
        .sort((a, b) => a - b);
      setPlaceholder(sortedValues.join(", "));
    }  else if (selectedOptions?.length === twoSelection) {
      const sortedValues = selectedOptions
        .map((option) => parseInt(option.value.replace("url", ""), 10))
        .sort((a, b) => a - b);
      setPlaceholder(sortedValues.join(", "));
    } else if (selectedOptions?.length === singleSelection) {
      const sortedValues = selectedOptions
        .map((option) => parseInt(option.value.replace("url", ""), 10))
        .sort((a, b) => a - b);
      setPlaceholder(sortedValues.join(", "));
    }
    else {
      setPlaceholder("");
    }
  };

  const isOptionDisabled = (option) => selectedOptions?.length === threeSelection && !selectedOptions.some((o) => o.value === option.value);

  return (
    <div className="App">
      <div className="col-sm">
        <CustomTypography type="caption" text={label} customClass="labelTextDrop" colorType="senary" requiredField={requiredField} />

        <FormControl className="colorBanner bye" fullWidth size="small">
          <Select value="" displayEmpty inputProps={{ "aria-label": "Without label" }} className="tiles-select">
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>

            <FormGroup className="checkbox-grid">
              <div className="grid-container Grid_alignment">
                {options.map((option) => (
                  <div key={option.value} className="grid-item">
                    <FormControlLabel
                      control={
                        <>
                          <Checkbox
                            checked={selectedOptions.some((o) => o.value === option.value)}
                            onChange={() => handleCheckboxChange(option)}
                            disabled={isOptionDisabled(option)}
                          />
                          <span className="disabled"></span>
                        </>
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
  onChangePlaceholder: PropTypes.func.isRequired,
};

Tiles.defaultProps = {
  label: "",
  requiredField: false,
};

export default Tiles;
