
import React, { useState,useEffect } from 'react';
import { Backdrop, Box, Modal, Fade, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { CustomTypography, CustomButton } from '../../components/index';
import { useNavigate } from 'react-router-dom';
import CustomIcons from '../../utils/icon/index';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import './adView.css';

/**
 *
 * @returns
 */
  

function AdView(props) {
const { admaster_details } = useSelector((state) => state?.admaster);
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: 1000,
    height: 600,
    backgroundColor: '#fff',
    boxShadow: 24,
  };

  const { viewId ,editId } = props;

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const admasterGet  = useSelector((state) => state?.admaster);

	const [open, setOpen] = useState(true);
	const handleClose = () => {
    setOpen(false);
    	navigate('/cryztal/AdMaster');
  };
  	// const firstLabel = 'Ad Id';
	const SecondLabel = 'Ad Title';
	const ThirdLabel = 'Shop Name';
	const FourthLabel = 'Tiles';
	const FifthLabel = 'Banner Color';
	const SixthLabel = 'Ad Visibility Location';
  const FromDate = 'From Date';
  	const ToDate = 'To Date';
  const Footer = 'Store Images';
  
  const result = admaster_details?.data?.approval_status;
  console.log(result,"resultresult");

	useEffect(() => {
		const actionData = {
			data: {},
			method: 'get',
			apiName: `getAdMasterById/${viewId}`,
		};
    console.log(actionData,"actionData");
		dispatch(actions.ADMASTER_GET(actionData));
	}, [dispatch]);


  	const statusHandle = (value) => {
      const data = {
			data: {
				approval_status: value,
			},
			method: 'put',
			apiName: `updateAdmasterApprovalById/${viewId}`,
		};
		dispatch(actions.ADMASTER_STATUS(data));
		navigate('/cryztal/AdMaster');
	};


  
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
         
          </Grid>
  



<div className="second_div">
				<Grid container item md={12} sm={12}>
					<Grid item md={4} sm={12}>
						<div className="Discount_Image">
							<img src={admasterGet?.admasterGet?.data?.[0]?.shop_images} alt="" className="Dog" />
						</div>
					</Grid>
					<Grid item md={8} sm={12}>
						<Grid display="flex">
							<Grid item md={4} sm={12}>
						
                    <Grid>
                      <Grid className='main_div'>
									<div className="Heading_color">
										<CustomTypography type="title" text={SecondLabel} />
									</div>
									<CustomTypography
										customClass="customarData"
										type="caption"
										text={admasterGet?.admasterGet?.data?.[0]?.ad_title}
                        />
                        </Grid>
                      <Grid>
                      <div className="Heading_color">
										<CustomTypography type="title" text={SixthLabel} />
									</div>
									<CustomTypography
										customClass="customarData"
										type="caption"
										text={admasterGet?.admasterGet?.data?.[0]?.ad_vis_location}
                        />{' '}
                        </Grid>
								</Grid>
							</Grid>
							<Grid item md={4} sm={12}>
								<Grid>
									<div className="main_div">
										<div className="Heading_color">
											<CustomTypography type="title" text={ThirdLabel} />
										</div>
										<CustomTypography
											customClass="customarData"
											type="caption"
											text={admasterGet?.admasterGet?.data?.[0]?.store_name}
										/>
									</div>
								</Grid>

								<Grid>
									<div className="Heading_color">
										<CustomTypography type="title" text={FourthLabel} />
									</div>

									<CustomTypography
										type="caption"
										customClass="customarData"
										text={admasterGet?.admasterGet?.data?.[0]?.tiles}
									/>
								</Grid>
							</Grid>
							<Grid item md={6} sm={12}>
								<Grid>
									<div className="main_div">
										<div className="Heading_color">
											<CustomTypography type="title" text={FifthLabel} />
										</div>
										<CustomTypography
											customClass="customarData"
											type="caption"
											text={admasterGet?.admasterGet?.data?.[0]?.palette_color}
										/>
									</div>
								</Grid>
								<Grid>
									
                    {/* </Grid>
                    <Grid> */}
                        <Grid container md={12}>
                      <Grid item md={6}>
									<div className="Heading_color">
										<CustomTypography type="title" text={FromDate} />
									</div>
									<CustomTypography
										customClass="customarData"
										type="caption"
										text={admasterGet?.admasterGet?.data?.[0]?.ad_from_date}
									/>{' '}
                    </Grid>
                    <Grid item md={6}>
									<div className="Heading_color">
										<CustomTypography type="title" text={ToDate} />
									</div>
									<CustomTypography
										customClass="customarData"
										type="caption"
										text={admasterGet?.admasterGet?.data?.[0]?.ad_to_date}
                        />{' '}
                        </Grid>
                        </Grid>
								</Grid>
							</Grid>
						</Grid>
						
					</Grid>
				</Grid>
			</div>
			{/* <div className="Footer">
				<Grid container item md={12} sm={12}>
					<CustomTypography type="title" text={Footer} />
				</Grid>
			</div> */}








          <Grid sx={{ display: 'flex', justifyContent: 'end',paddingTop:"80px" }}>
				{result !== 1 ? (
					<CustomButton
						btnTitle="APPROVE"
						color="primary"
						variant="contained"
						btnStyles={{
							width: '150px',
							color: 'white',
							margin: '10px',
							backgroundColor: '#01BF38',
						}}
						onClickHandle={() => statusHandle(1)}
					/>
				) : ( 
					'' 
				)} 
				{result !== 2 ? (
					<CustomButton
						btnTitle="REJECT"
						color="primary"
						variant="contained"
						btnStyles={{
							width: '150px',
							color: 'white',
							margin: '10px',
							backgroundColor: '#FF6060',
						}}
						onClickHandle={() => statusHandle(2)}
					/>
				 ) : ( 
					 '' 
				 )} 
				 {result !== 3 ? ( 
					<CustomButton
						btnTitle="QUARANTINE"
						iii
						color="primary"
						variant="contained"
						btnStyles={{
							width: '150px',
							color: 'white',
							margin: '10px',
							backgroundColor: '#0093FF',
						}}
						onClickHandle={() => statusHandle(3)}
					/>
				 ) : ( 
					 '' 
				 )} 
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
