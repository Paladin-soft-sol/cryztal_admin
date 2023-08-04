import React, { useState } from "react";
import { Table, CustomTypography, CustomTab } from "../../components/index";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./partner.css";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import CustomIcons from "../../utils/icon/index";
import PartnerModal from "./PartnerModal";
// import Toast from '../../utils/Notification/Toast';

import actions from "../../actions";
/**
 *
 * @returns
 */

function Partner() {
  const [value, setValue] = React.useState(0);
  const [table, setTable] = useState([]);
  const [partnerView, setPartnerView] = useState(false);
  const [viewId, setViewId] = useState(0);

  const dispatch = useDispatch();
  const { partner, partnerCreate } = useSelector((state) => state?.partner);

  React.useEffect(() => {
    // alert('asdfsd');

    const data = {
      data: {
        // isFilter: false,
        // isSearch: false,
        isFilter: true,
        isSearch: false,
        keyword: value,
        filter: value,
      },
      method: "post",
      apiName: "getAllPartners",
    };
    dispatch(actions.PARTNER(data));
  }, [dispatch, partnerCreate, value]);

  React.useEffect(() => {
    const tmpArr = [];
    partner?.data?.map((values) =>
      tmpArr.push({
        id: values.id,
        store_name: values.store_name,
        type_of_store: values?.type_of_store,
        store_email: values.store_email,
        primary_contact: values.primary_contact,
        Created_Date: values?.created_on,
        ABN_number: values.ABN_number,
        store_status:
          // eslint-disable-next-line no-nested-ternary
          values.store_status === 0
            ? "InActive"
            : values.store_status === 1
            ? "Active"
            : "Quarantine",
      })
    );
    setTable(tmpArr);
  }, [partner]);
  console.log(partner, "partner");

  const header = [
    "S.No",
    "Store Name",
    "Type of Store",
    "Store Email",
    "Contact Mobile",
    "Create Date",
    "ABN Number",
    "Status",
    "Action",
  ];
  // const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setPartnerView(!partnerView);
    setViewId(id);
  };

  const label = "Partner Registration";
  const tabList = [
    {
      id: 1,
      tabText: "Pending",
      tabColor: "#ffc51c",
    },
    {
      id: 2,
      tabText: "Approved",
      tabColor: "#00ebc2",
    },
    {
      id: 3,
      tabText: "Rejected",
      tabColor: "#ff4485",
    },
    {
      id: 4,
      tabText: "Quarantine",
      tabColor: "#0083ff",
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container item p={3.5} md={12} sm={12} xs={12}>
      {!partner?.data && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="success" />
        </Stack>
      )}
      <Grid item className="title_head" p={2}>
        <CustomTypography
          type="header"
          customClass="headTextReg"
          text={label}
        />
        {/* <NavLink to="Register">
					<img src={CustomIcons.AddIcon} alt="" />
				</NavLink> */}
      </Grid>

      <Grid item p={2.5} className="table">
        <CustomTab
          tabList={tabList}
          handleChange={handleChange}
          value={value}
        />
        <Table
          header={header}
          rows={table}
          name="status"
          dropPlaceholder="Status"
          action
          actionItem={{ view: true, edit: true, deleteData: true }}
          edit={CustomIcons.EditIcon}
          view={CustomIcons.View}
          deleteData={CustomIcons.DeleteIcon}
          tableSearch
          modalOpen={(id) => handleOpen(id)}
          editPath="Register"
          searchIcon={CustomIcons.Search}
          newModule={value}
        />
        {partnerView && <PartnerModal tabvalue={value} viewId={viewId} />}
      </Grid>
    </Grid>
  );
}

export default Partner;
