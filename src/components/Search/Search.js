/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";

import "./searchBar.css";
import CustomIcons from "../../utils/icon";

/**
 *
 * @param {object} props - required props in search bar component
 * @returns {React.ReactElement} - returns the search bar component
 */
export const SearchBar = (props) => {
  const { handleChange, handleClear, showInput, iconClick, searchValue } =
    props;
  // const [showBox, setShowBox] = React.useState(showInput);
  const [showIcon, setShowIcon] = useState(false);
  /**
   *@param {event} e event
   */
  const changeIcon = (e) => {
    setShowIcon(e.target.value !== "");
  };
  /**
   *
   * @param {} e - passing event
   */
  const onCrossClick = (e) => {
    if (iconClick) {
      setShowIcon(false);
      // setShowBox(false);
    } else setShowIcon(false);
  };
  return (
    <div className="view_search">
      <div className="searchDiv">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            handleChange(e);
            changeIcon(e);
          }}
          value={searchValue}
          className="search_input"
        />

        {!showIcon && (
          <img
            src={CustomIcons.Search}
            alt="Search"
            className="searchIcon"
            // onClick={() => iconClick(!showBox)}
          />
        )}
        {showIcon && (
          <img
            src={CustomIcons.crossIcon}
            alt="Search"
            className="crossIcon"
            onClick={() => {
              onCrossClick();
              handleClear();
            }}
          />
        )}
      </div>
    </div>
  );
};
SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleClear: PropTypes.func,
  showInput: PropTypes.bool,
  iconClick: PropTypes.bool,
};
SearchBar.defaultProps = {
  handleChange: () => {},
  handleClear: () => {},
  showInput: true,
  iconClick: true,
};
