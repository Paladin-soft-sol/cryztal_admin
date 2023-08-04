/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { Dropdown } from "../Dropdown/Dropdown";
import "./pagination.css";
/**
 *
 * @param {object} props  - required props
 * @returns  {React.ReactElement} - returns the pagination
 */
export const Pagination = (props) => {
  const {
    currentPage,
    onClickPageBtn,
    currentLimit,
    onClickPerPage,
    recordLength,
  } = props;
  const [goPageValue, setGoPageValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [paginationValues, setPaginationValues] = useState({
    start: 1,
    end: 1,
  });
  React.useEffect(() => {
    const totalCount = Math.ceil(recordLength / currentLimit);

    // const initialPage = totalCount === 0 ? 1 : totalCount - 0;
    // console.log(initialPage, 'currentLimit');
    // setTotalPages();
    // setPaginationValues({
    //   ...paginationValues,
    //   start: 1,
    //   end: initialPage > 5 ? 5 : initialPage + 1

    // const initialPage = totalCount === 0 ? 1 : totalCount - 0;
    // console.log(initialPage, 'currentLimit');
    setTotalPages();
    setPaginationValues({
      ...paginationValues,
      start: 1,
      // end: initialPage > 5 ? 7 : initialPage
      end: totalCount,
    });
  }, [recordLength, currentLimit]);
  /**
   *
   * @param {*} e - event
   */
  const goPage = (e) => {
    setGoPageValue(e.target.value);
  };
  const actives = "actives";
  return (
    <div className="paginationcontrol">
      <div className="pagination">
        <Grid className="rows">Rows Per Page:</Grid>
        <Dropdown
          dropdown={[
            { id: 5, value: 5 },
            { id: 10, value: 10 },
            // { id: 15, value: 15 },
            // { id: 20, value: 20 }
          ]}
          // style={{
          //   background: colors.secondary,
          //   border: 'none',
          //   color: colors.primary
          // }}
          value={currentLimit && currentLimit}
          onChangeData={onClickPerPage && onClickPerPage}
        />
        {/* <Grid
          className="padding"
          onClick={() =>
            paginationValues.start !== 1 &&
            setPaginationValues({
              start: paginationValues.start - 5,
              end:
                paginationValues.end -
                (paginationValues.end - paginationValues.start + 1),
            })
          }
        >
          <i className="arrow left cursor" />
        </Grid> */}
        {Array(paginationValues.end - paginationValues.start + 1)
          .fill()
          .map((_, idx) => {
            return (
              <Grid>
                <button
                  type="button"
                  className={
                    currentPage === paginationValues.start + idx
                      ? actives
                      : "normalBtn"
                  }
                  onClick={() =>
                    onClickPageBtn &&
                    onClickPageBtn(paginationValues.start + idx)
                  }
                >
                  {paginationValues.start + idx}
                </button>
              </Grid>
            );
          })}
        {/* <button
          className="goto_page"
          alt="nextPage"
          type="button"
          style={{ width: "50px" }}
        >
          Go to Page
        </button> */}
        {/* <div className="page_box">
          <input type="number" value={goPageValue} onChange={goPage} />
        </div> */}
        <button
          className="go"
          type="button"
          onClick={() => onClickPageBtn && onClickPageBtn(goPageValue)}
        >
          <i className="arrow_go right" />
        </button>
      </div>
    </div>
  );
};
// export default Pagination;
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onClickPageBtn: PropTypes.func,
  currentLimit: PropTypes.number,
  onClickPerPage: PropTypes.func,
  recordLength: PropTypes.number,
};
Pagination.defaultProps = {
  onClickPageBtn: () => {},
  currentLimit: 5,
  onClickPerPage: () => {},
  recordLength: null,
};
