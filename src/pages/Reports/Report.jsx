/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector, useDispatch } from 'react-redux';
import { CustomTypography } from '../../components/index';
import actions from '../../actions';
import './Report.css';
import './style.css';

function ReportModal() {
	const { report_details } = useSelector((state) => state?.report);

	const firstLabel = 'Deal Name';
	const SecondLabel = 'Product Category';
	const ThirdLabel = 'Reference Code';
	const FourthLabel = 'Product';
	const FifthLabel = 'Address';
	const SixthLabel = 'Offer';
	const Tittle = 'Description';
	const Footer = 'Store Images';

	const [searchParams] = useSearchParams();
	const [isLoader, setIsLoader] = React.useState(true);

	const dispatch = useDispatch();

	const id = searchParams.get('id');
	useEffect(() => {
		const actionData = {
			data: {},
			method: 'get',
			apiName: `getPartnerReports/${id}`,
		};
		dispatch(actions.REPORT_DETAILS(actionData));
	}, []);

	const data = report_details?.data;
	const result = report_details.data[0]?.partner_id?.shop_images;

	useEffect(() => {
		if (result) {
			setTimeout(() => {
				setIsLoader(false);
			}, 2000);
		}
	}, [report_details]);

	return (
		<Grid item p={2.5} md={12} pl={1.9}>
			{isLoader && <LinearProgress color="success" />}

			<Grid container item md={12} sm={12}>
				<div className="logo_pic_report">
					<img
						src={report_details.data[0]?.partner_id?.shop_logo}
						alt=""
						className="Dog"
					/>
				</div>
				<Grid className="Dell_Name">
					<h3>{report_details.data[0]?.partner_id?.store_name}</h3>
				</Grid>
			</Grid>
			<div className="second_div">
				<Grid container item md={12} sm={12}>
					<Grid item md={4} sm={5} className="Discount_Title">
						<h3>Discount Image</h3>

						<div className="Discount_Image">
							<img src={data[0]?.image} alt="" className="Dog" />
						</div>
					</Grid>
					<Grid item md={8} sm={7}>
						<Grid display="flex">
							<Grid item md={4} sm={6}>
								<div className="main_div">
									<div className="titleEdit">
										<CustomTypography type="title" text={firstLabel} />
									</div>
									<CustomTypography
										type="caption"
										text={data[0]?.deal_name || ' --'}
										customClass="reportData"
									/>
								</div>
								<Grid>
									<div className="titleEdit">
										<CustomTypography type="title" text={SecondLabel} />
									</div>
									<CustomTypography
										type="caption"
										text={report_details.data[0]?.category || '--'}
										customClass="reportData"
									/>
								</Grid>
							</Grid>
							<Grid item md={4} sm={6}>
								<Grid>
									<div className="main_div">
										<div className="titleEdit">
											<CustomTypography type="caption" text={ThirdLabel} />
										</div>
										<CustomTypography
											type="caption"
											text={report_details.data[0]?.reference_code || ' --'}
											customClass="reportData"
										/>
									</div>
								</Grid>

								<Grid>
									<div className="titleEdit">
										<CustomTypography type="title" text={FourthLabel} />
									</div>
									<CustomTypography
										type="caption"
										text={report_details.data[0]?.sub_category || ' --'}
										customClass="reportData"
									/>
								</Grid>
							</Grid>
							<Grid item md={4} sm={6}>
								<Grid>
									<div className="main_div">
										<div className="titleEdit">
											<CustomTypography type="title" text={FifthLabel} />
										</div>
										<CustomTypography
											type="caption"
											text={
												report_details.data[0]?.partner_id?.store_name || ' --'
											}
											customClass="reportData"
										/>
									</div>
								</Grid>
								<Grid>
									<div className="titleEdit">
										<CustomTypography type="title" text={SixthLabel} />
									</div>
									<CustomTypography
										type="caption"
										text={report_details.data[0]?.offer || ' --'}
										customClass="reportData"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={10} sm={12}>
							<div className="main_div">
								<div className="titleEdit">
									<CustomTypography type="title" text={Tittle} />
								</div>
								<CustomTypography
									type="caption"
									text={data[0]?.discount_description || ' --'}
									customClass="reportData"
								/>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</div>

			<div className="Footer">
				<Grid container item md={12} sm={12}>
					<CustomTypography type="title" customClass="title" text={Footer} />
					<Grid item md={12} sm={12} display="flex">
						{result?.map((item) => {
							return (
								<Grid item md={3} sm={12}>
									<div className="store_Image">
										<img src={item} alt="" className="Dog" />
									</div>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
}
export default ReportModal;
