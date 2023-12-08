/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { Table, CustomTypography,CustomButton,CustomDropdown,TextInput,CustomFileUploader,PincodeDropdown,ColorBanner, MultiImage, Tiles} from '../../components/index';
import { useNavigate } from 'react-router-dom';
import CustomIcons from '../../utils/icon/index';
import actions from '../../actions';
import AdView from './adViewModal';
import { AdMasterEntries,DefaultAdMasterEntriesValues} from './AdMasterEntries';
import './main.css';

/**
 *
 * @returns
 */
function AdScreen() {
	const defaultValues = DefaultAdMasterEntriesValues;
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues,
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const formWatchFields = watch();

	const admaster = useSelector((state) => state?.admaster);
	console.log(admaster, 'admaster');
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
			data: {},
			method: 'get',
			apiName: 'getAdMaster',
		};
		dispatch(actions.ADMASTER(data));
	}, []);
	useEffect(() => {
		const tmpArr = [];
		admaster?.admaster?.data?.map((values) =>
			tmpArr.push({
				ad_id: values.ad_id,
				ad_title: values.ad_title,
				shop_ad: values.shop_ad,
				ad_vis_location: values.ad_vis_location,
				ad_from_date: values.ad_from_date,
				ad_to_date: values.ad_to_date,
				status: values.status === 0 ? 'InActive' : 'active',
				
			})
		);
		setTable(tmpArr);
	}, [admaster]);

	

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
	const [resetValue, setResetValue] = React.useState([]);
	console.log(resetValue,"resetValue")
	function onSubmit(data1) {
		console.log(data1,"data1admaster")
		const formData = new FormData();
		formData.append("ad_title", data1.ad_title);
		formData.append("shop_id", data1.shop_id);
		formData.append("shop_ad", data1.shop_ad);
		formData.append("tiles",[1]);
		formData.append("palette_id", 1);
		formData.append("ad_vis_id", 1);
		formData.append("ad_vis_location", 600040);
		formData.append("ad_from_date", 2023/11/24);
		formData.append("ad_to_date", 2023/11/30);
		formData.append("created_by", 1);
		formData.append("updated_by", 1);
		const data = {
		  data: formData,
		  method: "post",
		  apiName: "createAdMaster",
		};
	
		dispatch(actions.ADMASTER(data));
		reset(defaultValues);
		setResetValue(defaultValues);
	  }


	return (
		<Grid p={2.5} item md={12}>
			<Grid container md={12}  className='adMaster_Title'>
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
															// resetValue={resetValue}
														/>
													</Grid>
												)}
													{keyValue?.isChooseTiles && (
													<Grid item md={12} sm={12}>
														<Tiles
															label={keyValue.label}
															handleChange={onChange}
															value={value || ''}
															// data={dropdownList}
															placeholder={keyValue.placeholder}
															returnId={keyValue.returnId}
															// resetValue={resetValue}
														/>
													</Grid>
												)}
													
													{keyValue?.isColorBanner && (
													<Grid item md={12} sm={12}>
														<ColorBanner
															label={keyValue.label}
															handleChange={onChange}
															value={value || ''}
															// data={dropdownList}
															placeholder={keyValue.placeholder}
															returnId={keyValue.returnId}
															
														/>
													</Grid>
												)}
													{keyValue?.isPincodeDropdown && (
													<Grid item md={12} sm={12}>
														<PincodeDropdown
															label={keyValue.label}
															handleChange={onChange}
															value={value || ''}
															// data={dropdownList}
															placeholder={keyValue.placeholder}
															returnId={keyValue.returnId}
														/>
													</Grid>
												)}
												{keyValue?.isDropdown && (
													<Grid item md={12} sm={12}>
														<CustomDropdown
															label={keyValue.label}
															handleChange={onChange}
															value={value || ''}
															data={keyValue.DropdownData}
															placeholder={keyValue.placeholder}
															returnId={keyValue.returnId}
														/>
													</Grid>
												)}
													
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
													Label="Upload Ad"
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
									onClickHandle={handleSubmit(onSubmit)}
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
				// tableSearch
				isDrop={false}
			/>
			{adView && <AdView viewId={viewId} />}
		</Grid>
	);
}

export default AdScreen;
