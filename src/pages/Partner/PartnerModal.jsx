/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Backdrop, Box, Modal, Fade, Grid } from "@mui/material";
import { CustomTypography, CustomButton } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import "./partnerModal.css";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import CustomIcons from "../../utils/icon";
import actions from "../../actions";

function PartnerModal(props) {
  const { viewId, tabvalue } = props;
  const dispatch = useDispatch();
  const { partnerdetails } = useSelector((state) => state?.partner);
  const [isLoader, setIsLoader] = useState(false);

  const imges = partnerdetails?.data?.shop_images;
  const logo = partnerdetails?.data;

  const style = {
    position: "absolute",
    top: "13%",
    left: "7%",
    right: "7%",
    width: "86%",
    height: 700,
    bgColor: "background.paper",
    // boxShadow: 24,
    p: 4,
  };
  const result = tabvalue;
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const data = {
      data: {},
      method: "get",
      apiName: `getPartner/${viewId}`,
    };

    dispatch(actions.PARTNER_DETAILS(data));
  }, []);

  useEffect(() => {
    if (partnerdetails?.data?.shop_images?.length) {
      setTimeout(() => {
        setIsLoader(false);
      }, 1000);
    }
  }, [partnerdetails]);
  const statusHandle = (value) => {
    // alert(tabvalue);
    const data = {
      data: {
        status: value,
      },
      method: "put",
      apiName: `updatePartnerApprovalById/${viewId}`,
    };
    dispatch(actions.APPROVALPARTNER_STATUS(data));
    // navigate('/cryztal/approval');
  };
  return (
    <Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ height: "auto" }}
      >
        <Fade in={open}>
          <Box className="modalBox">
            {isLoader && <LinearProgress color="success" />}

            <Grid
              container
              item
              md={12}
              lg={12}
              sm={12}
              sx={{ overflowY: "scroll", height: "90vh", padding: "10px" }}
            >
              <Grid
                item
                md={3}
                sm={12}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRight="1px dashed gray"
              >
                {/* <Grid className="img_logo"> */}
                <div className="logo_Image">
                  <img
                    src={partnerdetails?.data?.shop_logo}
                    className="images"
                    alt=""
                  />
                </div>
                {/* </Grid> */}
                <Grid pt={2}>
                  <CustomTypography
                    type="header"
                    text={partnerdetails?.data?.store_name}
                    customClass="storeName"
                  />
                </Grid>
              </Grid>

              <Grid item md={9} pl={2} sm={12}>
                <div className="section1">
                  <Grid
                    item
                    md={12}
                    sm={12}
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
                    <Grid className="close" onClick={handleClose}>
                      <img src={CustomIcons.crossIcon} alt="" width={30} />
                    </Grid>
                  </Grid>
                  <Grid item md={12} pt={2} sm={12} display="flex">
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="Store Name"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.store_name}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="Type of Store"
                        customClass="storeDataLabel"
                      />
                      {partnerdetails?.data?.type_of_store?.map((item) => (
                        <CustomTypography
                          type="link"
                          text={item?.split(",")}
                          customClass="storeData"
                        />
                      ))}
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="ABN Number"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.ABN_number}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="GST Number"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.GST_number}
                        customClass="storeData"
                      />
                    </Grid>
                  </Grid>
                  <Grid item md={12} pt={2} sm={12} display="flex">
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="Address"
                        customClass="storeDataLabel"
                      />

                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.address}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="State"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.state}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="Country"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.country}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="Post Code"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.zipcode}
                        customClass="storeData"
                      />
                    </Grid>
                  </Grid>
                  <Grid item md={12} pt={2} sm={12} display="flex">
                    <Grid item md={3} sm={12}>
                      <CustomTypography
                        type="subHeading"
                        text="Suburb"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.suburb}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={12}>
                      <CustomTypography
                        type="subHeading"
                        text="Shop Offer"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.discount}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={12}>
                      <CustomTypography
                        type="subHeading"
                        text="Email"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.store_email}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={12}>
                      <CustomTypography
                        type="subHeading"
                        text="Latitude"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.latitude}
                        customClass="storeData"
                      />
                    </Grid>
                  </Grid>
                  <Grid item md={12} pt={2} sm={12} display="flex">
                    <Grid item md={3} sm={12}>
                      <CustomTypography
                        type="subHeading"
                        text="Longitude"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.longitude}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={12} />
                    <Grid item md={3} sm={12} />

                    <Grid item md={3} sm={12}>
                      <CustomTypography
                        type="subHeading"
                        text=" Store Description"
                        customClass="storeDataLabel"
                      />
                      {/* <Box sx={{overflowY: 'scroll', height: '50px',}}> */}
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.shop_description}
                        customClass="storeData"
                      />
                      {/* </Box> */}
                    </Grid>
                  </Grid>
                </div>
                <Grid item md={12} sm={12}>
                  <Grid item md={12} pt={3} sm={12}>
                    <CustomTypography
                      type="header"
                      text="Personal Details"
                      customClass="modalHeader"
                    />
                  </Grid>
                  <Grid item md={12} pt={2} sm={12} display="flex">
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="Contact Person Name"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.contact_person_name}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="Contact Mobile Number"
                        customClass="storeDataLabel"
                      />

                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.primary_contact}
                        customClass="storeData"
                      />
                    </Grid>
                    <Grid item md={3} sm={6}>
                      <CustomTypography
                        type="subHeading"
                        text="Alternate Mobile Number"
                        customClass="storeDataLabel"
                      />
                      <CustomTypography
                        type="link"
                        text={partnerdetails?.data?.secondary_contact}
                        customClass="storeData"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={12}
                  sm={12}
                  display="flex"
                  className="partnerStatus"
                  pt={3}
                >
                  <Grid item md={8} sm={12}>
                    <CustomTypography
                      type="header"
                      text="Store Images"
                      customClass="modalHeader"
                    />
                    <Grid display="flex">
                      {/* {imges?.map((data) => ( */}
                      <Grid item md={4} className="img_logo" pr={1}>
                        <img
                          src={partnerdetails?.data?.shop_images}
                          className="images"
                          alt=""
                        />
                      </Grid>
                      {/* ))} */}
                    </Grid>
                  </Grid>
                  <Grid item md={1} sm={12} />

                  <Grid item md={3} sm={12}>
                    <CustomTypography
                      type="subHeading"
                      text="Status"
                      customClass="storeDataLabel"
                    />
                    <div>
                      <CustomTypography
                        type="link"
                        customClass={
                          partnerdetails?.data?.store_status === 0
                            ? "inActive"
                            : partnerdetails?.data?.store_status === 1
                              ? "active"
                              : "quarantine"
                        }
                        text={
                          partnerdetails?.data?.store_status === 0
                            ? "InActive"
                            : partnerdetails?.data?.store_status === 1
                              ? "Active"
                              : "Quarantine"
                        }
                        // customClass="storeData"
                      />
                    </div>
                  </Grid>
                </Grid>

                <Grid sx={{ display: "flex" }}>
                  {result !== 1 ? (
                    <CustomButton
                      btnTitle="APPROVE"
                      color="primary"
                      variant="contained"
                      btnStyles={{
                        width: "150px",
                        color: "white",
                        margin: "10px",
                        backgroundColor: "#01BF38",
                      }}
                      onClickHandle={() => statusHandle(1)}
                    />
                  ) : (
                    ""
                  )}
                  {result !== 2 ? (
                    <CustomButton
                      btnTitle="REJECT"
                      color="primary"
                      variant="contained"
                      btnStyles={{
                        width: "150px",
                        color: "white",
                        margin: "10px",
                        backgroundColor: "#FF6060",
                      }}
                      onClickHandle={() => statusHandle(2)}
                    />
                  ) : (
                    ""
                  )}
                  {result !== 3 ? (
                    <CustomButton
                      btnTitle="QUARANTINE"
                      iii
                      color="primary"
                      variant="contained"
                      btnStyles={{
                        width: "150px",
                        color: "white",
                        margin: "10px",
                        backgroundColor: "#0093FF",
                      }}
                      onClickHandle={() => statusHandle(3)}
                    />
                  ) : (
                    ""
                  )}
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
