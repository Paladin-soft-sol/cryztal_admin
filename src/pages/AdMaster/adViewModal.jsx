
import React, { useState,useEffect } from 'react';
import { Backdrop, Box, Modal, Fade, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import {CustomTypography} from '../../components/index';
import CustomIcons from '../../utils/icon/index';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';

/**
 *
 * @returns
 */
  

function AdView(props) {

 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: 700,
    height: 550,
    backgroundColor: '#fff',
    boxShadow: 24,
  };

  const { viewId ,editId } = props;

	const dispatch = useDispatch();

	const admasterGet  = useSelector((state) => state?.admaster);

	const [open, setOpen] = useState(true);
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const actionData = {
			data: {},
			method: 'get',
			apiName: `getAdMasterById/${viewId}`,
		};
    console.log(actionData,"actionData");
		dispatch(actions.ADMASTER_GET(actionData));
	}, [dispatch]);

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
        <Box sx={style} className="modalBox">
          <Grid container md={12} lg={12} sm={12} xs={12} className="modalHeader">
            <Grid item md={12} lg={12} sm={12} xs={12} className="close" onClick={handleClose}>
              <img src={CustomIcons.ModalClose} alt="close" />
            </Grid>
            {/* <Grid className="modalTitle" item md={12} sm={12} lg={12} xs={12}>
              <CustomTypography type="heading" text="Patient Registration Record" customClass="NameEdit" />
            </Grid> */}
          </Grid>
          <Grid container md={12} lg={12} pl={2} className="scrollType">
            {/* <Grid item md={12} sm={12} lg={12} xs={12} pt={2}>
              <CustomTypography type="view_title" text="Patient Details" />
            </Grid> */}
            {/* <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" text="ID" customClass="NameEdit" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" colon=": &nbsp;" text={Id} customClass="NameEdit" />
            </Grid> */}
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" text="Ad Id" customClass="NameEdit" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="caption" colon=": &nbsp;" text={admasterGet?.admasterGet?.data?.[0]?.ad_id} customClass="" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" text="Ad Title" customClass="NameEdit" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="caption" colon=": &nbsp;" text={admasterGet?.admasterGet?.data?.[0]?.ad_title} customClass="" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" text="Ad Location" customClass="NameEdit" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" colon=": &nbsp;" text={admasterGet?.admasterGet?.data?.[0]?.ad_vis_location} customClass="" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" text="Ad From Date" customClass="NameEdit" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" colon=": &nbsp;" text={admasterGet?.admasterGet?.data?.[0]?.ad_from_date} customClass="" />
            </Grid>
           
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" text="Ad To Date" customClass="NameEdit" />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} pt={2}>
              <CustomTypography type="sub_heading" colon=": &nbsp;" text={admasterGet?.admasterGet?.data?.[0]?.ad_to_date} customClass="" />
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}
export default AdView;
AdView.propTypes = {
  viewId: PropTypes.number,
    viewId: PropTypes.number,
  Id: PropTypes.string,
  AdId: PropTypes.string,
  AdTitle: PropTypes.string,
  AdLocation: PropTypes.string,
  AdFromDate: PropTypes.string,
  AdToDate: PropTypes.string,
};

AdView.defaultProps = {
  viewId: 0,
  
  Id: '',
  AdId: '',
  AdTitle: '',
  AdLocation: '',
  AdFromDate: '',
  AdToDate: '',
}
