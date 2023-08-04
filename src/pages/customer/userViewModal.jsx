/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Backdrop, Box, Modal, Fade, Grid } from '@mui/material';
import PrpoTypes from 'prop-types';
import { CustomTypography, CustomButton } from '../../components/index';
import { useNavigate } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CustomIcons from '../../utils/icon/index';
import actions from '../../actions';
import './userView.css';
/**
 *
 * @returns
 */
function CustomerView(props) {
	const { viewId } = props;
	const navigate = useNavigate();

	const dispatch = useDispatch();

	// const ImgHead = 'Wishlist';
	const Name = 'John Doe';
	const label1 = 'Name';
	const label2 = 'Email';
	const label3 = 'Mobile Number';
	const label4 = 'Location';
	const ImgText = 'Dell Exclusive Store';
	const ImgPercentage = '10% off';
	// const [searchParams] = useSearchParams();
	// const id = searchParams.get('id');
	const { customer_details, customerEdit } = useSelector(
		(state) => state?.customer
	);
	const status = customer_details?.data?.status;
	console.log(customer_details?.data.status, 'customer_details');

	const data = customer_details?.data;
	const img = customer_details?.data?.image;
	const [open, setOpen] = useState(true);
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const actionData = {
			data: {},
			method: 'get',
			apiName: `getUserDetailsById/${viewId}`,
		};

		dispatch(actions.CUSTOMER_DETAILS(actionData));
	}, []);
	// const status = true;

	const statusHandle = () => {
		const data1 = {
			data: {
				block: false,
			},
			method: 'put',
			apiName: `updateUserBlockById/${viewId}`,
		};
		dispatch(actions.CUSTOMEREDIT(data1));

		setOpen(false);
		window.location.reload();
	};

	const unblockHandle = () => {
		const data1 = {
			data: {
				block: true,
			},
			method: 'put',
			apiName: `updateUserUnBlockById/${viewId}`,
		};

		dispatch(actions.CUSTOMERUNBLOCK(data1));

		setOpen(false);
		window.location.reload();
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
				<Box className="modalBox">
					<Grid className="firstDiv">
						<Grid className="profileEdit" container item md={12} sm={12}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									paddingLeft: 20,
								}}
							>
								<Grid className="profile1">
									<img src={data?.profile_image} alt="" />
								</Grid>
								<CustomTypography
									type="title"
									text={data?.first_name}
									customClass="NameEdit"
								/>
							</div>
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
									<CustomTypography type="subHeading" text={data?.name} />
								</Grid>
							</Grid>
							<Grid item md={3} sm={6}>
								<Grid className="titleEdit">
									<CustomTypography type="header" text={label2} />
								</Grid>
								<Grid className="text">
									<CustomTypography type="subHeading" text={data?.email} />
								</Grid>
							</Grid>
							<Grid className="textEdit" item md={3} sm={6}>
								<Grid className="titleEdit">
									<CustomTypography type="header" text={label3} />
								</Grid>
								<Grid className="text">
									<CustomTypography
										type="subHeading"
										text={data?.phone_number}
									/>
								</Grid>
							</Grid>
							<Grid className="textEdit" item md={3} sm={6}>
								<Grid className="titleEdit">
									<CustomTypography type="header" text={label4} />
								</Grid>
								<Grid className="text">
									<CustomTypography type="subHeading" text={data?.location} />
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

						<Grid className="edit" container item md={12} sm={12}>
							<Grid className="BoxImage" item md={12} spacing={2}>
								{img?.map((item) => (
									<Grid item md={3} className="Colum">
										<img src={item} alt="" />
										<Grid className="InnerEdit">
											<CustomTypography type="title" text={ImgText} />
											<CustomTypography type="title" text={ImgPercentage} />
										</Grid>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid display="flex" justifyContent="flex-end" pr={2}>
							{status === 1 && (
								<CustomButton
									btnTitle="Block"
									color="secondary"
									variant="contained"
									btnStyles={{
										width: '100px',
										color: 'white',
										margin: '0px',
										float: 'right',
										right: '20px',
										// backgroundColor: '#01BF38',
									}}
									onClickHandle={() => statusHandle()}
								>
									block
								</CustomButton>
							)}
							<Grid className="unblock">
								{status === 0 && (
									<CustomButton
										btnTitle="Unblock"
										color="primary"
										variant="contained"
										btnStyles={{
											width: '100px',
											color: 'white',
											margin: '0px',
											// backgroundColor: '#01BF38',
										}}
										onClickHandle={() => unblockHandle()}
									>
										Unblock
									</CustomButton>
								)}
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Fade>
		</Modal>
	);
}
export default CustomerView;
CustomerView.propTypes = {
	viewId: PrpoTypes.number,
};
CustomerView.defaultProps = {
	viewId: 0,
};
