/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { Backdrop, Box, Modal, Fade, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { CustomTypography, CustomButton } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomIcons from "../../utils/icon/index";
import actions from "../../actions";
import "./adView.css";
/**
 *
 * @returns
 */
function AdView(props) {
  const { viewId } = props;
  console.log(viewId,"viewId");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Name = "Title";
  const label1 = "URL";
  const label2 = "Locations";
  const label3 = "Start Date";
  const label4 = "End Date";

  const { admaster_details } = useSelector((state) => state?.admaster);

  const data = admaster_details?.data;
  console.log(admaster_details?.data,"admaster_details?.data")

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const actionData = {
      data: {},
      method: "get",
      apiName: `getAdMasterById/${viewId}`,
    };

    dispatch(actions.ADMASTER_DETAILS(actionData));
  }, []);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className="modalBox">
          <Grid className="firstDiv">
            <Grid className="profileEdit" container item md={12} sm={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 20,
                }}
              ></div>
              <Grid className="close" onClick={handleClose}>
                <img src={CustomIcons.ModalClose} alt="close" />
              </Grid>
            </Grid>
            <Grid className="sec_div" container item md={12} sm={12}>
              <Grid item md={3} sm={6}>
                <Grid className="titleEdit">
                  <CustomTypography type="header" text={label1} />
                </Grid>
                <Grid className="text">
                  <CustomTypography type="subHeading" text={data?.ad_title} />
                </Grid>
              </Grid>
              <Grid item md={3} sm={6}>
                <Grid className="titleEdit">
                  <CustomTypography type="header" text={label2} />
                </Grid>
                <Grid className="text">
                  <CustomTypography type="subHeading" text={data?.shop_ad} />
                </Grid>
              </Grid>
              <Grid className="textEdit" item md={3} sm={6}>
                <Grid className="titleEdit">
                  <CustomTypography type="header" text={label3} />
                </Grid>
                <Grid className="text">
                  <CustomTypography type="subHeading" text={data?.palette_id} />
                </Grid>
              </Grid>
              <Grid className="textEdit" item md={3} sm={6}>
                <Grid className="titleEdit">
                  <CustomTypography type="header" text={label4} />
                </Grid>
                <Grid className="text">
                  <CustomTypography
                    type="subHeading"
                    text={data?.ad_vis_location}
                  />
                </Grid>
              </Grid>
              <Grid className="textEdit" item md={3} sm={6}>
                <Grid className="titleEdit">
                  <CustomTypography type="header" text="Join Date" />
                </Grid>
                <Grid className="text">
                  <CustomTypography type="subHeading" text={data?.created_on} />
                </Grid>
              </Grid>
            </Grid>

            <Grid className="edit" container item md={12} sm={12}></Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}
export default AdView;
AdView.propTypes = {
  viewId: PropTypes.number,
};
AdView.defaultProps = {
  viewId: "",
};
