/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Backdrop, Box, Modal, Fade, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { CustomTypography } from "../../components/index";
import "./DashboardView.css";
import LinearProgress from "@mui/material/LinearProgress";
// import Stack from '@mui/material/Stack';
import CustomIcons from "../../utils/icon/index";
import actions from "../../actions";

function PartnerModal(props) {
  const { viewId } = props;

  const dispatch = useDispatch();
  const { dashboardDetails } = useSelector((state) => state?.dashboard);
  console.log(dashboardDetails, "dashboardDetails");

  const [open, setOpen] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const handleClose = () => setOpen(false);
  const imges = dashboardDetails?.data?.shop_images;

  const style = {
    position: "absolute",
    top: "13%",
    left: "7%",
    right: "7%",
    width: "86%",
    height: 540,
    p: 4,
  };

  React.useEffect(() => {
    const data = {
      data: {},
      method: "get",
      apiName: `getDashboardPartnerById/${viewId}`,
    };

    dispatch(actions.DASHBOARD_DETAILS(data));
  }, []);
  useEffect(() => {
    if (dashboardDetails?.data?.shop_images) {
      setTimeout(() => {
        setIsLoader(false);
      }, 2000);
    }
  }, [dashboardDetails]);

  return (
    <Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={open}>
          <Box className="modalBox" sx={style}>
            {isLoader && <LinearProgress color="success" />}
            <Grid container item md={12} lg={12}>
              <Grid
                item
                md={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRight="1px dashed gray"
              >
                <Grid>
                  {/* <Grid className="img_logo"> */}
                  <div className="logo_Image">
                    <img
                      src={dashboardDetails?.data?.shop_logo}
                      className="images"
                      alt=""
                    />
                  </div>
                  {/* </Grid> */}
                  <Grid>
                    <CustomTypography
                      type="header"
                      text={dashboardDetails?.data?.store_name}
                      customClass="storeName"
                    />
                    <div className="store_id">
                      {/* <CustomTypography type="text" text="2#HGS54$23" /> */}
                    </div>

                    {/* <div className="statusPassword">
											<CustomTypography type="link" text="Reset Password" />
										</div> */}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={9} pl={2}>
                <div className="section1">
                  <Grid
                    item
                    md={12}
                    justify
                    justifyContent="space-between"
                    display="flex"
                  >
                    <Grid>
                      <CustomTypography
                        type="header"
                        text="Store Details"
                        customClass="modalHeader"
                      />
                    </Grid>
                    {/* <Grid className="close">
										<Button onClick={handleClose}>x</Button>
									</Grid> */}
                    <Grid className="close" onClick={handleClose}>
                      <img src={CustomIcons.ModalClose} alt="close" />
                    </Grid>
                  </Grid>
                  <Grid item md={12} pt={2} display="flex">
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text="Store Name"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        customClass="storeData"
                        text={dashboardDetails?.data.store_name}
                      />
                    </Grid>
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text="Type of Store"
                        customClass="storeDataLabel"
                      />
                      {/* {dashboardDetails?.data?.store_name} */}
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data.type_of_store?.join()}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text="ABN Number"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data.ABN_number}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text="GST Number"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data.GST_number}
                        customClass="storeData"
                      />
                    </Grid>
                  </Grid>
                  <Grid item md={12} pt={2} display="flex">
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text="Address"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data?.address}
                        customClass="storeData"
                      />{" "}
                    </Grid>
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text="State"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data?.state}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text="Country"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data?.country}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text="Post Code"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data?.zipcode}
                        customClass="storeData"
                      />
                    </Grid>
                  </Grid>
                  <Grid item md={12} pt={2} display="flex">
                    <Grid item md={9}>
                      <CustomTypography
                        type="subHeading"
                        text="Email"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data?.store_email || "--"}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3}>
                      <CustomTypography
                        type="subHeading"
                        text=" Store Description"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data?.shop_description}
                        customClass="storeData"
                      />
                    </Grid>
                  </Grid>
                </div>
                <Grid item md={12}>
                  <Grid item md={12} pt={3}>
                    <CustomTypography
                      type="header"
                      text="Personal Details"
                      customClass="modalHeader"
                    />
                  </Grid>
                  <Grid item md={12} pt={2} display="flex">
                    <Grid item md={4}>
                      <CustomTypography
                        type="subHeading"
                        text="Contact Person Name"
                        customClass="storeDataLabel"
                      />

                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data?.contact_person_name}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={4}>
                      <CustomTypography
                        type="subHeading"
                        text="Contact Mobile Number"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="caption"
                        text={dashboardDetails?.data?.primary_contact}
                        customClass="storeData"
                      />
                    </Grid>
                    {/* <Grid item md={4}>
											<CustomTypography
												type="subHeading"
												text="Alternate Mobile Number"
												customClass="storeDataLabel"
											/>

											<CustomTypography
												type="caption"
												text={dashboardDetails?.data?.secondary_contact}
												customClass="storeData"
											/>
										</Grid> */}
                  </Grid>
                </Grid>
                <Grid item md={12} display="flex" pt={3}>
                  <Grid item md={8}>
                    <CustomTypography
                      type="header"
                      text="Store Images"
                      customClass="modalHeader"
                    />
                    <Grid display="flex">
                      {/* {imges.map((data) => ( */}
                      <Grid item md={4} className="img_logo" pr={1}>
                        <img
                          src={dashboardDetails?.data.shop_images}
                          className="images"
                          alt=""
                        />
                      </Grid>
                      {/* ))} */}
                    </Grid>
                  </Grid>

                  <Grid item md={4} className="statusFooter">
                    <CustomTypography
                      type="subHeading"
                      text="Status"
                      customClass="storeDataLabel"
                    />
                    <div className="statusActive">
                      <CustomTypography
                        type="link"
                        text={
                          dashboardDetails?.data.store_status === 0
                            ? "InActive"
                            : dashboardDetails?.data?.store_status === 1
                              ? "Active"
                              : "Quarantine"
                        }
                        customClass={
                          dashboardDetails?.data?.store_status === 0
                            ? "inActive"
                            : dashboardDetails?.data?.store_status === 1
                              ? "active"
                              : "quarantine"
                        }
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
}
export default PartnerModal;
