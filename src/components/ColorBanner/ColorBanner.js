// import React, { useState } from "react";
// import { CustomTypography } from "../Typography/Typography";
// import PropTypes from "prop-types";
// import { FormControl, Select, MenuItem } from "@mui/material";
// import { makeStyles } from "@material-ui/styles";
// import "./style.css";

// export const ColorBanner = (props) => {
//   const { label, colors, requiredField, handleChange } = props;

//   const [selectedColors, setSelectedColors] = useState([]);
//   console.log(selectedColors, "handleChangekkk");

//   const handleColorClick = (color) => {
//     // Check if the color is already selected
//     const isColorSelected = selectedColors.some((selectedColor) => selectedColor.id === color.id);

//     if (isColorSelected) {
//       // If color is already selected, remove it from the list
//       setSelectedColors((prevColors) => prevColors.filter((c) => c.id !== color.id));
//     } else {
//       // If color is not selected, add it to the list
//       setSelectedColors((prevColors) => [...prevColors, color]);
//     }
//   };

//   const useStyles = makeStyles({
//     select: {
//       "& ul": {
//         // backgroundColor: "#cccccc",
//         display: "flex !important",
//       },
//       // "& li": {
//       //     fontSize: 12,
//       // },
//     },
//   });

//   const classes = useStyles();

//   return (
//     <div>
//       <CustomTypography
//         type="caption"
//         text={label}
//         customClass="labelTextDrop"
//         colorType="senary"
//         requiredField={requiredField}
//       />
//       <FormControl className="formControl" fullWidth size="small">
//         <Select
//           size="small"
//           className="color-vertical"
//           fullWidth
//           labelId="demo-select-small"
//           id="demo-select-small"
//           onChange={(e) => handleChange(e)}
//           displayEmpty
//           inputProps={{ "aria-label": "Without label" }}
//           MenuProps={{ classes: { paper: classes.select } }}
//         >
//           {colors.map((color) => (
//             <div
//               key={color.id}
//               className={`color_button ${selectedColors.some((c) => c.id === color.id) ? 'selected' : ''}`}
//               onClick={() => handleColorClick(color)}
//               style={{
//                 width: "30px",
//                 height: "30px",
//                 backgroundColor: color.value,
//                 margin: "5px",
//                 cursor: "pointer",
//               }}
//             />
//           ))}
//           {selectedColors.map((selectedColor) => (
//             <div key={selectedColor.id}>
//               <h3>Selected Color: {selectedColor.name}</h3>
//               <div
//                 style={{
//                   width: "20px",
//                   height: "20px",
//                   backgroundColor: selectedColor.value,
//                 }}
//               />
//             </div>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// };

// ColorBanner.propTypes = {
//   label: PropTypes.string,
//   requiredField: PropTypes.bool,
// };

// ColorBanner.defaultProps = {
//   label: "",
//   requiredField: false,
// };
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
          onChange={(e) => handleChange(e)}
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

      {/* <div style={{ marginTop: "10px" }}>
        {selectedColors.map((selectedColor) => (
          <div key={selectedColor.id}>
            <h3>Selected Color: {selectedColor.name}</h3>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: selectedColor.value,
              }}
            />
          </div>
        ))}
      </div> */}
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
