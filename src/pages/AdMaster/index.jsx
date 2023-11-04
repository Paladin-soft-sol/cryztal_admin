/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { Table, CustomTypography,CustomButton,CustomDropdown,TextInput,CustomFileUploader, MultiImage} from '../../components/index';
import { useNavigate } from 'react-router-dom';
import CustomIcons from '../../utils/icon/index';
import actions from '../../actions';
import AdView from './adViewModal';
import { AdMasterEntries } from './AdMasterEntries';
import './main.css';

/**
 *
 * @returns
 */
function AdScreen() {
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({
		// defaultValues: editAbleValues,
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const formWatchFields = watch();

	const customer = useSelector((state) => state?.customer);
	console.log(customer, 'customer');
	const [table, setTable] = useState([]);
	const [multiImage, setMultiImage] = useState(null);
	const [logoImage, setLogoImage] = useState(null);
	const [adView, setAdView] = useState(false);
	const [viewId, setViewId] = useState();

	const header = [
		'S.No',
		'Title',
		'URL',
		'Locations',
		'Start Date',
		'End Date',
		'Action',
	];

	const handleOpen = (id) => {
		setAdView(!adView);
		setViewId(id);
	};

	React.useEffect(() => {
		const data = {
			data: {
				isSearch: false,
			},
			method: 'post',
			apiName: 'getAllUsers',
		};
		dispatch(actions.CUSTOMER(data));
	}, []);
	useEffect(() => {
		const tmpArr = [];
		customer?.customer?.data?.map((values) =>
			tmpArr.push({
				id: values.id,
				first_name: values.name,
				contact_number: values.phone_number,
				email: values.email,
				joindate: values.created_on,
				status: values.status === 0 ? 'InActive' : 'active',
				
			})
		);
		setTable(tmpArr);
	}, [customer]);

	

	const getImage = (value) => {
		setLogoImage(value);
	};
	const getMultipleImage = (value) => {
		setMultiImage(value[0]);
	};
	const handleCancel = () => {
		reset({
			ad_master: '',
			
		});
	
	
	};
	return (
		<Grid p={2.5} item md={12}>
			<Grid container md={12}>
				<CustomTypography
					type="header" 
					text="Ad Master"
					customClass="headText"
				/>
			</Grid>
			<Grid container item p={2} md={12} display="flex">
						<Grid container item md={12} sm={12} spacing={1} display="flex">
							{AdMasterEntries?.map((keyValue) => (
								<Grid item md={keyValue.breakpoint} pl={2} sm={6}>
									<Controller
										name={keyValue.name}
										rules={{
											required: keyValue?.validation?.required,
											pattern: keyValue.pattern,
										}}
										control={control}
										render={({ field: { onChange, value } }) => (
											<>
												{keyValue?.isTextInput && (
													<Grid item md={12} sm={12}>
														<TextInput
															type="text"
															label={keyValue.label}
															onHandleChange={onChange}
															value={value}
															multiline={keyValue.multiline}
															rows={keyValue.rows}
															customClass="capitalize"
														/>
													</Grid>
												)}
												
												{keyValue?.isDropdown && (
													<Grid item md={12} sm={12}>
														<CustomDropdown
															label={keyValue.label}
															handleChange={onChange}
															value={value || ''}
															// data={dropdownList}
															placeholder={keyValue.placeholder}
															returnId={keyValue.returnId}
														/>
													</Grid>
												)}
													{/* {keyValue?.isFileUploader && (
													<Grid item md={12} sm={12}>
														<CustomFileUploader
															label={keyValue.label}
															handleChange={onChange}
															value={value || ''}
															// data={dropdownList}
															placeholder={keyValue.placeholder}
															returnId={keyValue.returnId}
														/>
													</Grid>
												)} */}
												{keyValue?.isMultiImageUpload && (
											<Grid item md={12} sm={12} className="shop_img_align">
												<div className="fex">
													{Array.isArray(formWatchFields?.shop_images) &&
														formWatchFields?.shop_images.map(
															(imageSrc, key) => (
																<div className="shop_img" key={imageSrc}>
																	<img src={imageSrc} alt="mm" />
																</div>
															)
														)}
												</div>

												<MultiImage
													label="Shop image"
													upLoad={CustomIcons.UploadIcon}
													getImage={(val) => {
														onChange(val);
														getMultipleImage(val);
													}}
													// customClass="shop_img_align"
												/>
											</Grid>
										)}
												{keyValue?.isSingleImageUpload && (
											<Grid item md={12} sm={12} className="shop_img_align">
												<div className="shop_img">
													<img src={formWatchFields.shop_logo} alt="" />
												</div>

												<CustomFileUploader
													Label="Shop Logo"
													upLoad={CustomIcons.UploadIcon}
													getImage={(val) => {
														onChange(val);
														getImage(val);
													}}
													// customClass="shop_img_align"
												/>
											</Grid>
										)}
											
											</>
										)}
									/>
									{errors && errors[keyValue?.name]?.type === 'required' && (
										<Grid>
											<CustomTypography
												text={`${keyValue?.label} is Required`}
												type="error"
											/>
										</Grid>
									)}
									{errors && errors[keyValue?.name]?.type === 'pattern' && (
										<Grid>
											<CustomTypography
												text={`${keyValue?.label} is Invalid`}
												type="error"
											/>
										</Grid>
									)}
								</Grid>
							))}
						</Grid>
						<Grid
							item
							columnGap={2}
							display="flex"
							md={12}
							sm={12}
							pt={2}
							name="position"
							className="position-select"
						>
							<>
								<CustomButton
									customClass="submit_button"
									// btnTitle={btnTitle}
									btnTitle="SUBMIT"
									variant="contained"
									color="primary"
									btnStyles={{
										color: '#fff',
										background: '#F4A01C',
										border: '1px solid #F4A01C',
										padding: '5px 25px',
										fontSize: '17px',
									}}
									// onClickHandle={handleSubmit(onSubmit)}
								/>
								<CustomButton
									customClass="cancel_button"
									btnTitle="CANCEL"
									variant="outlined"
									color="primary"
									btnStyles={{
										color: '#FF748B',
										background: '#FF748B38',
										border: '1px solid #FF748B',
										padding: '5px 25px',
										fontSize: '17px',
									}}
									onClickHandle={() => handleCancel()}
								/>
							</>
						</Grid>
					</Grid>
			<Table
				header={header}
				rows={table}
				printer={CustomIcons.Printer1}
				view={CustomIcons.View}
				modalOpen={(id) => handleOpen(id)}
				action
				actionItem={{ view: true }}
				tableSearch
				isDrop={false}
			/>
			{adView && <AdView viewId={viewId} />}
		</Grid>
	);
}

export default AdScreen;
