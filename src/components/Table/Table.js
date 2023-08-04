/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
// import { downloadExcel } from "react-export-table-to-excel";
import { Pagination } from "../Pagination/Pagination";
import { SearchBar } from "../Search/Search";
import "./table.css";
import { CustomTypography } from "../Typography/Typography";
import { CustomDropdown } from "../CustomDropdown/Dropdown";
import CustomIcons from "../../utils/icon";
import CustomImages from "../../utils/images";
import { CSVLink } from "react-csv";
/**
 *
 * @param {object} props - required props in Table component
 * @returns {React.ReactElement} - returns the Table component
 */
export const Table = (props) => {
  const {
    tableTitle,
    rows,
    header,
    dropdownData,
    filter,
    actionItem,
    editOpen,
    deleteIconSrc,
    deleteData,
    view,
    edit,
    handleDownloadClick,
    downloadj,
    action,
    editPath,
    viewPath,
    modalOpen,
    printer,
    isShopFilter,
    // tableDropdown,
    name,
    dropdownValue,
    dropdownHandleChange,
    dropPlaceholder,
    tableSearch,
    newModule,
    isDrop,
    customStyles,
    placeholder,
    tabValue,
    dropDownEntries,
  } = props;
  const [page, setPage] = React.useState(0);
  const [rowData, setRowData] = React.useState(rows || []);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = React.useState("");
  const [totalDataForDownload, setTotalDataForDownload] = React.useState([]);

  React.useEffect(() => {
    // const totalArr = [];
    // if (totalDataForDownload.length === 0) {
    const result = rows?.map(({ type, id, ...rest }) => ({ ...rest }));
    // rows?.map((value) => {
    //   console.log(value, 'key');
    //   const tmpArr = [];
    //   Object.values(value)?.map((val) => {
    //     return tmpArr.push(val);
    //   });
    //   return totalArr.push(tmpArr);
    // });
    console.log(result, "rows");
    setTotalDataForDownload(result);
    // }
  }, [rows]);
  console.log(dropDownEntries, "dropDownEntries");
  React.useEffect(() => {
    setRowsPerPage(10);
    setPage(0);
  }, [newModule]);
  /**
   *
   */
  function handleDownloadExcel() {
    let finalData;
    let finalData1;

    const removeItem1 = header.find((item) => item === "S.No");
    const removeItem2 = header.find((item) => item === "Action");

    if (removeItem1 && removeItem2) {
      finalData = header?.filter((item) => item !== removeItem1);
      finalData1 = finalData?.filter((item) => item !== removeItem2);
    }
    if (removeItem1) {
      finalData = header?.filter((item) => item !== removeItem1);
    }
    if (removeItem2) {
      finalData = header?.filter((item) => item !== removeItem1);
      finalData1 = finalData?.filter((item) => item !== removeItem2);
    }
    console.log(finalData1, "totalDataForDownload");
    handleDownloadExcel({
      fileName: tableTitle,
      sheet: tableTitle,
      tablePayload: {
        header: finalData1 || finalData,
        body: totalDataForDownload,
      },
    });
  }
  /**
   *
   * @param {object}i -- item to download
   */
  function handler(i) {
    // const finalData;
    const removeItem = header.find(
      (item) => item === "Action" || item === "S.No"
    );
    delete i.id;
    // if (removeItem) {
    const finalData = header.filter((item) => item !== removeItem);
    // }
    handleDownloadExcel({
      fileName: tableTitle,
      sheet: tableTitle,
      tablePayload: {
        header: finalData,
        // accept two different data structures
        body: [i],
      },
    });
  }

  /**
   * @function descendingComparator used for descendingComparator action
   * @param {string} a input value
   * @param {string} b input value
   * @param {string} orderBy input value
   * @returns {string} value
   */
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  /**
   * @function getComparator used for descendingComparator action
   * @param {string} order input value
   * @param {string} orderBy input value
   * @returns {string} value
   */
  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  /**
   * @function stableSort used for descendingComparator action
   * @param {string} array input value
   * @param {string} comparator input value
   * @returns {string} value
   */
  function stableSort(array, comparator) {
    const stabilizedThis = array?.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  /**
   *
   * @param {*} eventValue - passing event
   */
  const handleChangePage = (eventValue) => {
    if (eventValue > 0) {
      if (eventValue) {
        setPage(eventValue - 1);
      } else {
        setPage(eventValue - 0);
      }
    }
  };

  /**
   *
   * @param {*} event -passing event
   * @param eventValue
   */
  const handleChangeRowsPerPage = (eventValue) => {
    // eslint-disable-next-line radix
    setRowsPerPage(parseInt(eventValue));
    setPage(0);
  };

  useEffect(() => {
    setRowData(rows || "");
  }, [rows]);

  /**
   *
   * @param {*} data table data
   * @returns {boolean} false when data contains only letters and whitespace
   */
  const isString = (data) => {
    return !/[a-zA-Z]/g.test(data);
  };
  /**
   * @param {event} e event object on changing search bar
   */
  const onSearch = (e) => {
    const filters = [];
    const uniqueIds = {};
    if (e.target.value) {
      // eslint-disable-next-line array-callback-return
      rows.map((item) => {
        const keys = Object.keys(item);

        for (let i = 0; i <= keys.length + 1; i += 1) {
          // alert(`loop${i}`);

          if (
            item[keys[i]] &&
            !uniqueIds[item.id] &&
            item[keys[i]] !== null &&
            item[keys[i]]
              .toString()
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          ) {
            if (item.id) {
              uniqueIds[item.id] = 1;
            }
            filters.push(item);
          }
        }
      });
      setSearchValue(e.target.value);
      setRowData(filters);
      setPage(0);
    } else {
      setRowData(rows);
      setSearchValue("");
    }
  };
  /**
   *
   */
  const handleClearSearch = () => {
    setRowData(rows);
    setSearchValue("");
  };

  return (
    <Grid>
      {/* <Grid> */}
      <Grid display="flex" justifyContent="space-between" pb={1}>
        <CustomTypography
          text={tableTitle}
          type="SubHeading"
          customClass="tableTitle"
        />
        <Grid md={12} display="flex">
          {/* {isDrop && isShopFilter && (
            <CustomDropdown
              handleChange={(e) => dropdownHandleChange(e, 'Category')}
              placeholder="Category"
              customClass="tableDropdown"
              data={dropdownData?.Category}
              name={name}

              // label="Category"
            />
          )} */}
          {/* {isDrop && (
            <CustomDropdown
              handleChange={(e) => dropdownHandleChange(e, 'State')}
              placeholder="State"
              customClass="tableDropdown"
              data={dropdownData?.State}
              name={name}
              // value={dropdownValue || ''}
              // label="State"
            />
          )} */}
          {/* {isDrop && (
            <CustomDropdown
              handleChange={(e) => dropdownHandleChange(e, 'Suburb')}
              // placeholder={dropPlaceholder?.Suburb}
              placeholder="Suburb"
              customClass="tableDropdown"
              data={dropdownData?.Suburb}
              // label="Suburb"
              name={name}
            />
          )} */}
          {/* {isDrop && (
            <CustomDropdown
              handleChange={(e) => dropdownHandleChange(e, 'Postcode')}
              // placeholder={dropPlaceholder?.Postcode}
              placeholder="Postcode"
              customClass="tableDropdown"
              data={dropdownData?.Postcode}
              name={name}
              // label="Postcode"
            />
          )} */}
          {tabValue === 0 &&
            dropDownEntries?.map((item) => {
              return (
                <CustomDropdown
                  handleChange={(e) => dropdownHandleChange(e, item?.label)}
                  // placeholder={dropPlaceholder?.Postcode}
                  // value={item?.label}
                  placeholder={item?.label}
                  customClass="tableDropdown"
                  data={item?.data}
                  name={item?.name}
                  // label="Postcode"
                />
              );
            })}
          {tabValue === 1 &&
            dropDownEntries?.map((item) => {
              return (
                <CustomDropdown
                  handleChange={(e) => dropdownHandleChange(e, item?.label)}
                  // placeholder={dropPlaceholder?.Postcode}
                  // value={item?.label}
                  placeholder={item?.label}
                  customClass="tableDropdown"
                  data={item?.data}
                  name={item?.name}
                  // label="Postcode"
                />
              );
            })}
          {tableSearch && (
            <SearchBar
              handleChange={(e) => onSearch(e)}
              // handleClear={() => setRowData(rows)}
              handleClear={() => handleClearSearch()}
              searchValue={searchValue}
            />
          )}
          {downloadj && (
            <CSVLink
              data={rows}
              filename="data.xls"
              target="_blank"
              onClick={handleDownloadClick}
              className="csv-link"
            >
              <button type="button" className="button-position">
                <img src={CustomIcons.download} alt="download" />
              </button>
            </CSVLink>
          )}
          {filter && (
            <Grid display="flex" flexDirection="row">
              <CustomTypography
                text="Filters"
                type="caption"
                customClass="filter"
              />
              <img src={filter} alt="filter" className="filterIcon" />
            </Grid>
          )}
          {printer && (
            <Grid pt={2.4} pl={1.8}>
              <img
                src={CustomIcons.DownloadData}
                className="iconStyles"
                alt="printer"
                onClick={() => handleDownloadExcel()}
                aria-hidden
              />
            </Grid>
          )}
        </Grid>
      </Grid>
      {/* <div> */}
      <table className="tables">
        <thead className="thead">
          <tr>
            {header?.map((val, idx) => {
              const key = idx;
              // const filterStyles = customStyles.filter(
              //   (item, index) => item.key === val
              // );
              // const customSty = filterStyles[0] ? filterStyles[0].styles : {};
              return (
                <th
                  className="thData"
                  key={key}
                  // style={{
                  //   paddingLeft: idx === 0 ? '25px' : '',
                  //   paddingRight: idx === header.length - 1 ? '25px' : '',
                  //   ...customSty
                  // }}
                >
                  {val}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowData?.length > 0 ? (
            stableSort(rowData, getComparator())
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((objValues, index) => {
                const keyVal = index;
                return (
                  <tr key={keyVal}>
                    {Object.entries(objValues).map(([key, value]) => {
                      const keys = key;
                      return key !== "id" ? (
                        <td
                          key={keys}
                          className={`${
                            isString(value) && "tdDataNumber"
                          } tdData`}
                        >
                          {value || "--"}
                        </td>
                      ) : (
                        <td
                          key={keys}
                          className={`${
                            isString(value) && "tdDataNumber"
                          } tdData`}
                        >
                          {rowsPerPage * (page + 1) -
                            (rowsPerPage - (index + 1))}
                        </td>
                      );
                    })}
                    {action && (
                      <td className="optionalIcon">
                        {actionItem.view && viewPath && (
                          <NavLink
                            to={`${viewPath}/?id=${
                              objValues?.id
                            }&isEdit=${false}`}
                          >
                            <img
                              src={view}
                              className="iconStyle"
                              alt="view"
                              // onClick={() =>
                              //   !viewPath ? modalOpen(objValues?.id) : null
                              // }
                              aria-hidden
                            />
                          </NavLink>
                        )}
                        {actionItem?.view && !viewPath && (
                          <img
                            src={view}
                            className="iconStyle"
                            alt="view"
                            onClick={() =>
                              !viewPath ? modalOpen(objValues?.id) : null
                            }
                            aria-hidden
                          />
                        )}
                        {actionItem.edit && editPath && (
                          <NavLink
                            to={`${editPath}/?id=${
                              objValues?.id
                            }&isEdit=${true}`}
                          >
                            <img
                              src={edit}
                              className="iconStyle"
                              alt="edit"
                              // onClick={() =>
                              //   !editPath ? editOpen(objValues?.id) : null
                              // }
                              aria-hidden="true"
                            />
                          </NavLink>
                        )}
                        {actionItem.edit && !editPath && (
                          <img
                            src={edit}
                            className="iconStyle"
                            alt="edit"
                            onClick={() =>
                              !editPath ? editOpen(objValues?.id) : null
                            }
                            aria-hidden="true"
                          />
                        )}
                        {actionItem?.deleteIcon && (
                          <img
                            src={deleteIconSrc}
                            alt="delete"
                            onClick={() => deleteData(objValues?.id)}
                            aria-hidden="true"
                            className="iconStyle"
                          />
                        )}
                        {actionItem?.printer && (
                          <img
                            src={CustomIcons.DownloadData}
                            alt="printer"
                            className="iconStyles"
                            onClick={() => handler(objValues)}
                            aria-hidden
                          />
                        )}
                      </td>
                    )}
                  </tr>
                );
              })
          ) : (
            <tr>
              <td colSpan="12">
                <div className="emptyDataDiv">
                  <img
                    src={CustomImages.EmptyData}
                    alt="emptyData"
                    className="emptyData"
                  />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <Grid> */}
      <Pagination
        onClickPageBtn={handleChangePage}
        currentPage={parseInt(page + 1, 10)}
        onClickPerPage={handleChangeRowsPerPage}
        currentLimit={rowsPerPage}
        rows={rowData}
        className="pagination"
        recordLength={rowData?.length}
      />
    </Grid>
  );
};

Table.propTypes = {
  tableTitle: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  header: PropTypes.arrayOf.isRequired,
  editOpen: PropTypes.func,
  deleteData: PropTypes.func,
  edit: PropTypes.bool,
  deleteIconSrc: PropTypes.bool,
  dropdownData: PropTypes.arrayOf(PropTypes.objectOf),
  filter: PropTypes.bool,
  action: PropTypes.bool,
  editPath: PropTypes.string,
  viewPath: PropTypes.string,
  printer: PropTypes.string,
  actionItem: PropTypes.oneOfType([PropTypes.object]),
  view: PropTypes.string,
  // tableDropdown: PropTypes.bool,
  tableSearch: PropTypes.bool,
  // isDrop: PropTypes.bool,
  modalOpen: PropTypes.func,
  dropPlaceholder: PropTypes.string,
  name: PropTypes.string,
  // dropdownHandleChange: PropTypes.func,
  newModule: PropTypes.bool,
  isShopFilter: PropTypes.bool,
};
Table.defaultProps = {
  newModule: false,
  tableTitle: "",
  modalOpen: () => {},
  editOpen: () => {},
  deleteData: () => {},
  edit: false,
  // isDrop: false,
  deleteIconSrc: false,
  dropdownData: [],
  filter: false,
  action: false,
  editPath: "",
  viewPath: "",
  printer: "",
  actionItem: {
    view: false,
    edit: false,
    deleteIcon: false,
    printer: false,
  },
  view: "",
  // tableDropdown: false,
  name: "",
  dropPlaceholder: "",
  tableSearch: false,
  isShopFilter: false,
  // dropdownHandleChange: () => {}
};
