/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CustomTypography, CustomButton } from '../../../components/index';
import actions from '../../../actions';

import './Model.css';
import CustomIcons from '../../../utils/icon';

function ApprovalView() {
	const { approval_details } = useSelector((state) => state?.approval);
	const [isLoader, setIsLoader] = useState(true);

	const [open] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	const firstLabel = 'Deal Name';
	const SecondLabel = 'Product Category';
	const ThirdLabel = 'Reference Code';
	const FourthLabel = 'Product';
	const FifthLabel = 'Address';
	const SixthLabel = 'Offers';
	const Tittle = 'Description';
	const Footer = 'Store Images';

	const handleClose = () => {
		navigate('/cryztal/approval');
	};
	useEffect(() => {
		const actionData = { data: {}, method: 'get', apiName: `getDeal/${id}` };
		dispatch(actions.APPROVAL_DETAILS(actionData));
	}, []);

	const result = approval_details?.data?.status;
	console.log(result, 'approval_details?.data');
	const img = approval_details?.data?.partner_id?.shop_images;

	const statusHandle = (value) => {
		const data = {
			data: {
				status: value,
			},
			method: 'put',
			apiName: `updateDealsApprovalById/${id}`,
		};
		dispatch(actions.APPROVAL_STATUS(data));
		navigate('/cryztal/approval');
	};

	useEffect(() => {
		if (approval_details?.data?.partner_id?.shop_images) {
			setTimeout(() => {
				setIsLoader(false);
			}, 2000);
		}
	}, [approval_details]);

	return (
		<Grid
			open={open}
			onclose={handleClose}
			CloseAfterTransition
			className="dealApproveGrid"
			pl={3}
		>
			{isLoader && <LinearProgress color="success" />}

			<Grid container item md={12} sm={12}>
				<Grid item className="logo_pic">
					<Grid item>
						<img
							src={approval_details?.data?.partner_id?.shop_logo}
							alt="printer"
							className="Dog"
						/>
						<h3>{approval_details?.data?.partner_id?.store_name}</h3>
					</Grid>
				</Grid>
				<Grid sx={{ marginLeft: 'auto', pt: '10px' }}>
					<NavLink to="/cryztal/approval">
						<img src={CustomIcons.crossIcon} alt="" width={30} />
					</NavLink>
				</Grid>
				<Grid className="lineInnerEdit" item md={12} sm={12}>
					<h2>Discount Image</h2>
				
				</Grid>
			</Grid>
			<div className="second_div">
				<Grid container item md={12} sm={12}>
					<Grid item md={4} sm={12}>
						<div className="Discount_Image">
							<img src={approval_details?.data?.image} alt="" className="Dog" />
						</div>
					</Grid>
					<Grid item md={8} sm={12}>
						<Grid display="flex">
							<Grid item md={4} sm={12}>
								<div className="main_div">
									<div className="Heading_color">
										<CustomTypography type="title" text={firstLabel} />
									</div>
									<CustomTypography
										customClass="customarData"
										type="caption"
										text={approval_details?.data?.deal_name}
									/>
								</div>
								<Grid>
									<div className="Heading_color">
										<CustomTypography type="title" text={SecondLabel} />
									</div>
									<CustomTypography
										customClass="customarData"
										type="caption"
										text={approval_details?.data?.category}
									/>
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
											text={approval_details?.data?.reference_code}
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
										text={approval_details?.data?.sub_category}
									/>
								</Grid>
							</Grid>
							<Grid item md={4} sm={12}>
								<Grid>
									<div className="main_div">
										<div className="Heading_color">
											<CustomTypography type="title" text={FifthLabel} />
										</div>
										<CustomTypography
											customClass="customarData"
											type="caption"
											text={approval_details?.data?.partner_id?.address}
										/>
									</div>
								</Grid>
								<Grid>
									<div className="Heading_color">
										<CustomTypography type="title" text={SixthLabel} />
									</div>
									<CustomTypography
										customClass="customarData"
										type="caption"
										text={approval_details?.data?.offer}
									/>{' '}
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={10} sm={12}>
							<div className="main_div">
								<div className="Heading_color">
									<CustomTypography type="title" text={Tittle} />
								</div>
								<CustomTypography
									customClass="customarData"
									type="caption"
									text={approval_details.data.discount_description || '--'}
								/>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</div>
			<div className="Footer">
				<Grid container item md={12} sm={12}>
					<CustomTypography type="title" text={Footer} />
					<Grid item md={12} sm={12} display="flex" pt={1}>
						{img?.map((item) => (
							<Grid item md={3}>
								<div className="store_Image">
									<img src={item} alt="" className="Dog" />
								</div>
							</Grid>
						))}
					</Grid>
				</Grid>
			</div>
			<Grid sx={{ display: 'flex', justifyContent: 'end' }}>
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
		</Grid>
	);
}
export default ApprovalView;
