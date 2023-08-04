/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from "@mui/material";
import { CustomTypography } from "../Typography/Typography";
import "./multipleDropdown.css";
import CustomIcons from "../../utils/icon";


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

/**
 *
 * @param {*} props - required props in  MultipleSelectChip
 * @returns {React.ReactElement} - returns the MultipleSelectChip component
 */
export const MultipleSelectChip = (props) => {
  const {
    label,
    dropDownList,
    onSelectValue,
    selectValue,
    onChipClose,
    requiredField,
    disabled,
  } = props;

  /**
   *
   * @param {*} event - onchange event
   */
  const handleChange = (event) => {
    const val = event.target.value;
    onSelectValue(typeof val === "string" ? val.split(",") : val);
  };
  /**
   *
   * @param {*} e - event
   * @param {*} value - selected value
   */
  const handleDelete = (e, value) => {
    onChipClose(e, value);
  };
  return (
    <div>
      <Box>
        <CustomTypography
          type="caption"
          text={label}
          colorType="senary"
          customClass="labelTextDrop11"
          requiredField={requiredField}
        />
      </Box>
      <FormControl className="formControl" fullWidth disabled={disabled}>
        <Select
          size="large"
          fullWidth
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectValue}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <div className="chipHolder">
                  <Chip
                    key={value}
                    label={value}
                    className="chip"
                    clickable
                    deleteIcon={
                      <img
                        src={CustomIcons.ModalClose}
                        alt="close"
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                    onDelete={(e) => handleDelete(e, value)}
                  />
                </div>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {/* <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem> */}
          {dropDownList.map((name) => (
            <MenuItem key={name?.id} value={name?.value} className="listText">
              {name?.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

MultipleSelectChip.propTypes = {
  label: PropTypes.string,
  dropDownList: PropTypes.shape([]).isRequired,
  onSelectValue: PropTypes.func.isRequired,
  selectValue: PropTypes.arrayOf,
  onChipClose: PropTypes.func,
  requiredField: PropTypes.bool,
  disabled: PropTypes.bool,
};
MultipleSelectChip.defaultProps = {
  label: "",
  onChipClose: () => {},
  selectValue: [],
  requiredField: false,
  disabled: false,
};
