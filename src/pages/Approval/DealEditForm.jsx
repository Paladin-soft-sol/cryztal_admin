/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
	CustomTypography,
	CustomButton,
	MultiImage,
	CustomFileUploader,
	TextInput,
	CustomDropdown,
	MultipleSelectChip,
	// eslint-disable-next-line import/no-unresolved
} from '../../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useNavigate, NavLink, useSearchParams } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import actions from '../../actions';
import {
	EditFormDefaultValues,
	EditFormEntries,
	EditFormEntriesEdit,
} from './DealEditFormEntries';
import CustomIcons from '../../utils/icon';
import CustomDatePicker from '../../components/DatePicker/datePicker';

/**
 *
 * @returns
 */

function DealEditForm() {
	const currentDate = new Date().toISOString().split('T')[0];
	const label = 'Deals Edit';
	const [defaultValue, setDefaultValue] = useState(EditFormDefaultValues);
	const [values, setValues] = React.useState([]);
	const [multiImage, setMultiImage] = useState(null);
	const [logoImage, setLogoImage] = useState(null);
	const [dropdownList, setDropdownList] = useState([]);
	const [dropdownListid, setDropdownListid] = useState();
	const [dropdownList2, setDropdownList2] = useState([]);

	const [ableToGetLogoUrl, setAbleToGetLogoUrl] = useState(false);
	const [logoName, setLogoName] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [multiImageCount, setMultiImageCount] = useState(0);
	const [shopImagesName, setShopImagesName] = useState('');
	const [logoFireBaseurl, setLogoFireBaseurl] = useState('');
	const [shopImagesFireBaseUrl, setShopImagesFireBaseUrl] = useState([]);
	const [list, setList] = useState();
	// eslint-disable-next-line no-unused-vars
	const [uniqueContact, setUniqueContact] = useState();
	const { getCategoryDropdown } = useSelector(
		(state) => state?.categoryDropdown
	);
	const getSubCategoryDropdown = useSelector(
		(state) => state?.categoryDropdown?.getSubCategoryDropdown
	);

	const { partnerimage } = useSelector((state) => state?.partner);
	const approvaldetails = useSelector((state) => state?.approval);
	const [logos, setLogos] = useState([]);
	const [mulitples, setMulitples] = useState([]);

	const logo = partnerimage?.data;
	const mulitple = partnerimage?.data;
	const {
		control,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: defaultValue,
	});

	const formWatchFields = watch();
	console.log(formWatchFields.category, 'formWatchFields');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	console.log(approvaldetails?.approval_details, 'details');
	const [searchParams] = useSearchParams();
	const isEdit = searchParams.get('isEdit');
	const getId = searchParams.get('id');
	const [entries, setEntries] = useState(
		isEdit ? EditFormEntriesEdit : EditFormEntries
	);

	useEffect(() => {
		if (isEdit) setEntries(EditFormEntriesEdit);
	}, [isEdit]);
	const onClickHandle = () => {
		navigate(-1);
	};
	useEffect(() => {
		reset(EditFormDefaultValues);

		const data = {
			data: {},
			method: 'get',
			apiName: `getDeal/${getId}`,
		};
		dispatch(actions.APPROVAL_DETAILS(data));
		if (isEdit) {
			if (entries.find((item) => item.name === 'type_of_store')) {
				entries.find((item) => item.name === 'type_of_store').disabled = true;
			}
			dispatch(actions.APPROVAL_DETAILS(data));
		}
	}, []);
	console.log();
	const fieldValue = approvaldetails?.approval_details?.data;

	useEffect(() => {
		const fieldValue = approvaldetails?.approval_details?.data;
		const newObj = {
			category: fieldValue?.category,
			sub_category: fieldValue?.sub_category,
			deal_name: fieldValue?.deal_name,
			image: fieldValue?.image,
			offer: fieldValue?.offer,
			from_date: fieldValue?.from_date,
			to_date: fieldValue?.to_date,
			offer_description: fieldValue.discount_description,
			status:
				fieldValue?.status === 1
					? 'Active'
					: fieldValue?.status === 0
					? 'InActive'
					: 'Quarantine',
		};

		reset(newObj);
	}, [approvaldetails]);

	

	useEffect(() => {
		if (logoImage === null) return;
		// eslint-disable-next-line no-unused-vars
		Object.entries(logoImage)?.map(async ([key, value]) => {
			const imageRef = ref(Storage, `images/${value.name}`);
			setList([
				{
					id: 1,
					title: 'FILE UPLOAD',
					description: 'Image uploading Please wait',
					backgroundColor: 'warning',
					icon: 'warning',
				},
			]);
			setAbleToGetLogoUrl(true);
			try {
				uploadBytes(imageRef).then(() => {
					setLogoName(value.name);
				});
			} catch {
				alert('Image upload failed try again!!');
			}
		});
	}, [logoImage]);

	useEffect(() => {
		if (multiImage === null) return;
		setList([
			{
				id: 1,
				title: 'FILE UPLOAD',
				description: 'Image uploading Please wait',
				backgroundColor: 'warning',
				icon: 'warning',
			},
		]);
		setAbleToGetLogoUrl(true);
	}, [multiImage]);

	/**
	 *
	 * @param {*} e
	 */

	const getMultipleImage = (value) => {
		setMultiImage(value[0]);
	};
	const getImage = (value) => {
		setLogoImage(value);
	};

	/**
	 *
	 * @param {*} data
	 */
	const onSelectValue = (data) => {
		setValues(data);
	};
	/**
	 *
	 * @param {*} e
	 * @param {*} value
	 */
	const handleDelete = (e, value) => {
		e.preventDefault();
		setValues(values.filter((name) => name !== value));
	};

	const handleCancel = () => {
		reset({
			category: '',
			sub_category: '',
			deal_name: '',
			offer: '',
			offer_description: '',
			status: 'Active',
			image: '',
			from_date: '',
			to_date: '',
		});
	};

	
	console.log(isEdit, 'adasdasdasdasd');
	const onSubmit = async (data) => {
		console.log(data, 'sjdkfjasrur');
		const finalData = data;
		const formData = new FormData();
		formData.append('deal_name', data?.deal_name);
		formData.append('offer', data?.offer);
		formData.append('offer_description', data?.offer_description);
		formData.append('status', data?.status);
		// formData.append('images', data?.images);
		formData.append('from_date', data?.from_date);
		formData.append('to_date', data?.to_date);
		if (data?.image?.length > 0) {
			if (!Array.isArray(data?.image)) {
				// alert('1');
				formData.append('image', '');
			} else {
				data?.image?.forEach((item) => {
					// alert('12');
					formData.append('image', item || '');
				});
			}
		}

		// if (isEdit) {
		const submitData = {
			data: formData,
			method: 'put',
			apiName: `updateDealsById/${getId}`,
			// id: getId,
		};
		// alert('tare');
		dispatch(actions.APPROVAL_EDIT(submitData));
		// }
		reset({
			category: '',
			sub_category: '',
			deal_name: '',
			offer: '',
			offer_description: '',
			status: 'Active',
			image: '',
			from_date: '',
			to_date: '',
		});
		navigate(-1);
	};

	return (
		<Grid container item md={12} pt={2}>
			<Grid
				container
				item
				md={12}
				display="flex"
				justifyContent="space-between"
				pl={2}
				// pr={4.3}
				className="title_head"
			>
				<Grid>
					<CustomTypography
						type="header"
						text={label}
						customClass="headTextReg"
					/>
				</Grid>

				<NavLink to="/cryztal/approval">
					<Grid onChange={onClickHandle} className="cross-icon">
						<img src={CustomIcons.crossIcon} alt="" className="crossedIcon" />
					</Grid>
				</NavLink>
			</Grid>
			<Grid container item p={2} md={12} display="flex">
				<Grid container item md={12} spacing={3} display="flex">
					{entries?.map((keyValue) => (
						<Grid item md={keyValue.breakpoint} sm={6}>
							<Controller
								name={keyValue.name}
								control={control}
								rules={{
									required: keyValue?.validation?.required,
									pattern: keyValue?.pattern,
									maxLength: keyValue?.validation?.maxLength,
								}}
								render={({ field: { onChange, value } }) => (
									<>
										{keyValue?.isTextInput && (
											<Grid item md={12} sm={12}>
												<TextInput
													InputProps={{ style: { fontSize: 4 } }}
													label={keyValue.label}
													onHandleChange={onChange}
													value={value}
													multiline={keyValue.multiline}
													rows={keyValue.rows}
													type={keyValue.type}
													disabled={keyValue?.disabled}
													uniqueText={keyValue.uniqueText}
												/>
											</Grid>
										)}

										{keyValue?.disableInput && (
											<Grid item md={12} sm={12}>
												<TextInput
													InputProps={{ style: { fontSize: 4 } }}
													label={keyValue.label}
													// onHandleChange={onChange}
													value={value}
													multiline={keyValue.multiline}
													rows={keyValue.rows}
													type={keyValue.type}
													disabled={keyValue?.disabled}
													uniqueText={keyValue.uniqueText}
													placeholder={value}
												/>
											</Grid>
										)}
										
										{keyValue?.isDropdown2 && (
											<Grid item md={12} sm={12}>
												<CustomDropdown
													label={keyValue.label}
													handleChange={onChange}
													value={value || ''}
													data={keyValue.DropdownData}
													disabled={keyValue.disabled}
													placeholder={keyValue.placeholder}
												/>
											</Grid>
										)}

										{keyValue?.isMultipleSelectChip && (
											<Grid item md={12} sm={12}>
												<MultipleSelectChip
												
													onSelectValue={(e) => {
														onChange(e);
														onSelectValue(e);
													}}
													selectValue={values}
													onChipClose={(e, val) => handleDelete(e, val)}
													label={keyValue.label}
													dropDownList={dropdownList2}
													placeholder={keyValue.placeholder}
												/>
											</Grid>
										)}

										{keyValue?.isSingleImageUpload && (
											<Grid item md={12} sm={12} className="shop_img_align">
												<div className="shop_img">
													<img src={formWatchFields.image} alt="" />
												</div>

												<CustomFileUploader
													Label="Discount Image"
													upLoad={CustomIcons.UploadIcon}
													getImage={(val) => {
														onChange(val);
														getImage(val);
													}}
												
												/>
											</Grid>
										)}

										{keyValue?.isMultiImageUpload && (
											<Grid item md={12} sm={12} className="shop_img_align">
												<div className="fex">
													{Array.isArray(formWatchFields?.shop_images)
														? formWatchFields?.shop_images
														: []?.map((imageSrc, key) => (
																<div className="shop_img">
																	<img src={imageSrc} alt="" />
																</div>
														  ))}
												</div>

												<MultiImage
													label="Shop image"
													upLoad={CustomIcons.UploadIcon}
													getImage={(val) => {
														onChange(val);
														getMultipleImage(val);
													}}
													
												/>
											</Grid>
										)}
										{keyValue?.isEmptySpace && (
											<Grid md={keyValue?.breakpoint} />
										)}
										

										{keyValue?.isDatePicker && (
											<Grid item md={12} sm={12}>
												<CustomTypography text={keyValue?.label} type="error" />
												<input
													type="date"
													name={keyValue.name}
													onChange={onChange}
													value={value || ''}
													required
																							/>
											</Grid>
										)}
										{keyValue?.isTypography && (
											<Grid item md={12} sm={12}>
												
												<CustomTypography
													text={keyValue.label}
													type="header3"
												/>
												<CustomTypography
													text={value}
													type="caption"
													colorType="senary"
													customStyle={{ paddingTop: '10px' }}
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
							{errors && errors[keyValue?.name]?.type === 'maxLength' && (
								<Grid>
									<CustomTypography
										text={`${keyValue?.label} is not valid`}
										type="error"
									/>
								</Grid>
							)}
							{errors && errors[keyValue?.name]?.type === 'pattern' && (
								<Grid>
									<CustomTypography
										text={`${keyValue?.label} invalid format`}
										type="error"
									/>
								</Grid>
							)}
						</Grid>
					))}
				</Grid>

				<Grid container item md={12} display="flex">
					<Grid
						container
						display="flex"
						spacing={3}
						justifyContent="flex-end"
						className="bottom-select"
					>
						<Grid item>
							<CustomButton
								btnTitle={isEdit ? 'UPDATE' : 'SUBMIT'}
								variant="contained"
								color="primary"
								btnStyles={{
									color: '#fff',
									background: '#F4A01C',
									border: '1px solid #F4A01C',
								}}
								onClickHandle={handleSubmit(onSubmit)}
							/>
						</Grid>

						{!isEdit && (
							<Grid item>
								<CustomButton
									className="can-button"
									btnTitle="CANCEL"
									variant="outlined"
									color="primary"
									onClickHandle={() => handleCancel()}
								/>
							</Grid>
						)}
					</Grid>
				</Grid>
			</Grid>
			
		</Grid>
	);
}

export default DealEditForm;
