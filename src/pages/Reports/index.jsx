import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";
import { CustomTab, CustomTypography, Table } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import CustomIcons from "../../utils/icon/index";
import actions from "../../actions";

function Report() {
  const report = useSelector((state) => state?.report);

  const [table, setTable] = useState([]);
  const [value, setValue] = React.useState(0);
  const [header, setHeader] = React.useState([
    "S.No",
    "Name",
    "Mobile Number",
    "Email",
    "Join Date",
  ]);
  const [dropdownList, setDropdownList] = useState([]);
  const [postCodeFilter, setPostCodeFilter] = useState("");
  const [suburbFilter, setSuburbFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [entries, setEntries] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    const dropdownData = {
      data: {},
      method: "get",
      apiName: "getCategoryDropdown",
    };
    dispatch(actions.GET_CATEGORY(dropdownData));
    const dropdownData1 = {
      data: {},
      method: "get",
      apiName: "getReportDropdownState",
    };
    dispatch(actions.GET_STATE(dropdownData1));
    const dropdownData2 = {
      data: {},
      method: "get",
      apiName: "getReportDropdownSuburb",
    };
    dispatch(actions.GET_SUBURB(dropdownData2));
    const dropdownData3 = {
      data: {},
      method: "get",
      apiName: "getReportDropdownPostCode",
    };
    dispatch(actions.GET_ZIPCODE(dropdownData3));

    const userStateDropdown = {
      data: {},
      method: "get",
      apiName: "getReportDropdownUserState",
    };
    dispatch(actions.GET_USER_STATE(userStateDropdown));
    const userSuburbDropdown = {
      data: {},
      method: "get",
      apiName: "getReportDropdownUserSuburb",
    };
    dispatch(actions.GET_USER_SUBURB(userSuburbDropdown));
    const userZipcode = {
      data: {},
      method: "get",
      apiName: "getReportDropdownUserPostCode",
    };
    dispatch(actions.GET_USER_ZIPCODE(userZipcode));
  }, []);
  const {
    getCategoryDropdown,
    getReportDropdownState,
    getReportDropdownSuburb,
    getReportDropdownPostCode,
    getReportDropdownUserState,
    getReportDropdownUserSuburb,
    getReportDropdownUserPostCode,
  } = useSelector((state) => state?.categoryDropdown);

  // const getALL = useSelector((state) => state?.categoryDropdown);
  console.log(getCategoryDropdown, "getCategoryDropdown");

  useEffect(() => {
    const tempArr = [
      {
        id: 0,
        value: "ALL",
      },
    ];
    const tempArr1 = [
      {
        id: 0,
        value: "ALL",
      },
    ];
    const tempArr2 = [
      {
        id: 0,
        value: "ALL",
      },
    ];
    const tempArr3 = [
      {
        id: 0,
        value: "ALL",
      },
    ];

    getCategoryDropdown?.data?.map((values, index) =>
      tempArr.push({
        id: index + 1,
        value: values?.category_master,
      })
    );
    if (value === 0) {
      getReportDropdownUserState?.data?.map((values, index) =>
        tempArr1.push({
          id: index + 1,
          value: values?.user_state,
        })
      );
      console.log(getReportDropdownUserState, "getReportDropdownUserState");
    }
    if (value === 1) {
      getReportDropdownState?.data?.map((values, index) =>
        tempArr1.push({
          id: index + 1,
          value: values?.state,
        })
      );
    }
    if (value === 0) {
      getReportDropdownUserPostCode?.data?.map((values, index) =>
        tempArr2.push({
          id: index + 1,
          value: values?.user_zipcode,
        })
      );
    }
    if (value === 1) {
      getReportDropdownPostCode?.data?.map((values, index) =>
        tempArr2.push({
          id: index + 1,
          value: values?.zipcode,
        })
      );
    }
    if (value === 0) {
      getReportDropdownUserSuburb?.data?.map((values, index) =>
        tempArr3.push({
          id: index + 1,
          value: values?.user_suburb,
        })
      );
    }
    if (value === 1) {
      getReportDropdownSuburb?.data?.map((values, index) =>
        tempArr3.push({
          id: index + 1,
          value: values?.suburb,
        })
      );
    }

    setDropdownList({
      Category: tempArr,
      State: tempArr1,
      Suburb: tempArr3,
      Postcode: tempArr2,
    });
  }, [
    getCategoryDropdown,
    getReportDropdownState,
    getReportDropdownSuburb,
    getReportDropdownPostCode,
    getReportDropdownUserSuburb,
    getReportDropdownUserPostCode,
    getReportDropdownUserState,
    value,
  ]);

  useEffect(() => {
    if (value === 0) {
      const data = {
        data: {
          user_state: stateFilter,
          user_zipcode: postCodeFilter,
          // location: "",
          user_suburb: suburbFilter,
          // created_on: '',
        },
        method: "post",
        apiName: "getUserFilterList",
      };
      dispatch(actions.REPORTS(data));
      setHeader([
        "S.No",
        "Name",
        "Mobile Number",
        "Email",
        "Join Date",
        "State",
        "Suburb",
        "PostCode",
        "Location",
        "Country",
        "Reference Code",
      ]);
    } else if (value === 1) {
      setHeader([
        "S.No",
        "Store Name",
        "Category",
        "Contact Mobile",
        "Email",
        "Create Date",
        "ABN Number",
        "State",
        "Location",
        "Country",
        "Suburb",
        "Post Code",
        "Reference Code",
      ]);
      const data = {
        data: {
          category: categoryFilter,
          state: stateFilter,
          suburb: suburbFilter,
          // address: '',
          zipcode: postCodeFilter,
        },
        method: "post",
        apiName: "getPartnersFilterList",
      };
      dispatch(actions.USER_DETAILS(data));
    }
  }, [value, postCodeFilter, suburbFilter, stateFilter, categoryFilter]);

  const tabList = [
    {
      id: 1,
      tabText: "User",
      tabColor: "#ffc51c",
    },
    {
      id: 2,
      tabText: "Partner",
      tabColor: "#ffc51c",
    },
  ];

  const handleChange = (event, newValue) => {
    setCategoryFilter("");
    setStateFilter("");
    setSuburbFilter("");
    setPostCodeFilter("");
    setValue(newValue);
  };
  useEffect(() => {
    const tmpArr = [];
    if (value === 0) {
      report?.report?.data?.map((values) =>
        tmpArr.push({
          id: values.id,
          name: values.name,
          phone_number: values.phone_number,
          email: values.email || "--",
          created_on: values?.created_on,
          state: values?.state,
          suburb: values?.suburb,
          postCode: values?.zipcode,
          location: values?.location,
          country: values?.country,
          referenceCode: values?.reference_code,
        })
      );
      setTable(tmpArr);
    } else if (value === 1) {
      report?.user_details?.data?.map((values) =>
        tmpArr.push({
          id: values.id,
          name: values?.store_name,
          category: values?.type_of_store,
          phone_number: values?.primary_contact,
          email: values?.store_email || "--",
          created_on: values?.created_on,
          abn_number: values?.ABN_number,
          state: values?.state,
          location: values?.address,
          country: values?.country,
          suburb: values?.suburb,
          postCode: values?.zipcode,
          referenceCode: values?.partner_referance_code,
        })
      );
      setTable(tmpArr);
    }
  }, [report]);

  /**
   *
   * @param e
   */
  const dropdownHandleChange = (e, val) => {
    console.log(val, "value");
    console.log(e.target.value, "value");
    if (val === "Postcode" && e.target.value !== "ALL") {
      setPostCodeFilter(e.target.value);
    } else if (val === "Postcode" && e.target.value === "ALL") {
      setPostCodeFilter("");
    }
    if (val === "Suburb" && e.target.value !== "ALL") {
      setSuburbFilter(e.target.value);
    } else if (val === "Suburb" && e.target.value === "ALL") {
      setSuburbFilter("");
    }
    if (val === "State" && e.target.value !== "ALL") {
      setStateFilter(e.target.value);
    } else if (val === "State" && e.target.value === "ALL") {
      setStateFilter("");
    }
    if (val === "Category" && e.target.value !== "ALL") {
      setCategoryFilter(e.target.value);
    } else if (val === "Category" && e.target.value === "ALL") {
      setCategoryFilter("");
    }
  };
  console.log(dropdownList, "asldkfjaskhrt");
  useEffect(() => {
    if (value === 0) {
      setEntries([
        {
          name: "userstate",
          label: "State",
          data: dropdownList?.State,
        },
        {
          name: "suburb",
          label: "Suburb",
          data: dropdownList?.Suburb,
        },
        {
          name: "postcode",
          label: "Postcode",
          data: dropdownList?.Postcode,
        },
      ]);
    } else {
      setEntries([
        {
          name: "category",
          label: "Category",
          data: dropdownList?.Category,
        },
        {
          name: "patnerstate",
          label: "State",
          data: dropdownList?.State,
        },
        {
          name: "suburb",
          label: "Suburb",
          data: dropdownList?.Suburb,
        },
        {
          name: "postcode",
          label: "Postcode",
          data: dropdownList?.Postcode,
        },
      ]);
    }
  }, [value, dropdownList]);

  const getCsvStyle = () => {
    const style = document.createElement("style");
    style.innerHTML = `
      .csv-link {
        font-weight: bold;
        /* Add more custom styles here */
      }
    `;
    return style;
  };

  const handleDownloadClick = () => {
    document.head.appendChild(getCsvStyle());
  };

  console.log(table, "table");
  console.log(header, "header");
  return (
    <Grid container item md={12} sm={12}>
      <Grid item md={12} p={2}>
        <CustomTypography type="header" text="Report" customClass="headText" />
      </Grid>
      <Grid item pl={1} md={12} sm={12}>
        <CustomTab
          tabList={tabList}
          handleChange={handleChange}
          value={value}
        />
      </Grid>
      <Grid item p={2} md={12}>
        <Table
          header={header}
          rows={table}
          printer={CustomIcons.Printer1}
          tableDropdown
          dropdownData={dropdownList}
          model={CustomIcons.model}
          optional
          tableSearch
          dropPlaceholder="Location"
          viewPath="reportsView"
          dropDownEntries={entries}
          showSno
          dropdownHandleChange={dropdownHandleChange}
          newModule={value}
          isDrop
          isShopFilter={value !== 0}
          tabValue={value}
          downloadj
          handleDownloadClick={handleDownloadClick}
        />
      </Grid>
    </Grid>
  );
}
export default Report;
