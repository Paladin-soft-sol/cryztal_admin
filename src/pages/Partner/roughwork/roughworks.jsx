// /* eslint-disable array-callback-return */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-nested-ternary */
// import React, { useEffect, useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import {
// 	CustomTypography,
// 	CustomButton,
// 	MultiImage,
// 	CustomFileUploader,
// 	TextInput,
// 	CustomDropdown,
// 	MultipleSelectChip,
// 	// eslint-disable-next-line import/no-unresolved
// } from 'pss-react-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { Grid } from '@mui/material';
// import { useNavigate, NavLink, useSearchParams } from 'react-router-dom';
// import { ref, uploadBytes, getDownloadURL } from '@firebase/storage';
// import Stack from '@mui/material/Stack';
// import LinearProgress from '@mui/material/LinearProgress';
// import Toast from '../../utils/Notification/Toast';
// import {
// 	RegFormEntries,
// 	RegFormDefaultValues,
// 	RegFormEntriesEdit,
// } from './regFormEntries';
// import { storage } from '../../firebase';
// import actions from '../../actions';
// import CustomIcons from '../../utils/icon';
// import './partner.css';

// /**
//  *
//  * @returns
//  */

// function Register() {
// 	const label = 'Partner Registration';
// 	const [defaultValue, setDefaultValue] = useState(RegFormDefaultValues);
// 	const [values, setValues] = React.useState([]);
// 	const [multiImage, setMultiImage] = useState(null);
// 	const [logoImage, setLogoImage] = useState(null);
// 	const [dropdownList, setDropdownList] = useState([]);

// 	const [ableToGetLogoUrl, setAbleToGetLogoUrl] = useState(false);
// 	const [logoName, setLogoName] = useState('');
// 	// eslint-disable-next-line no-unused-vars
// 	const [multiImageCount, setMultiImageCount] = useState(0);
// 	const [shopImagesName, setShopImagesName] = useState('');
// 	const [logoFireBaseurl, setLogoFireBaseurl] = useState('');
// 	const [shopImagesFireBaseUrl, setShopImagesFireBaseUrl] = useState([]);
// 	const [list, setList] = useState();
// 	// eslint-disable-next-line no-unused-vars
// 	const [uniqueContact, setUniqueContact] = useState();
// 	const { getCategoryDropdown } = useSelector(
// 		(state) => state?.categoryDropdown
// 	);
// 	const { partnerimage } = useSelector((state) => state?.partner);
// 	const [logos, setLogos] = useState([]);
// 	const [mulitples, setMulitples] = useState([]);

// 	const logo = partnerimage?.data;
// 	const mulitple = partnerimage?.data;
// 	console.log(logos, 'logos');
// 	const {
// 		control,
// 		handleSubmit,
// 		reset,
// 		watch,
// 		formState: { errors },
// 	} = useForm({
// 		defaultValues: defaultValue,
// 	});

// 	const formWatchFields = watch();
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	const { partnerdetails, partnerCreate } = useSelector(
// 		(state) => state?.partner
// 	);
// 	const [searchParams] = useSearchParams();
// 	const isEdit = searchParams.get('isEdit');
// 	const getId = searchParams.get('id');
// 	const [entries, setEntries] = useState(
// 		isEdit ? RegFormEntriesEdit : RegFormEntries
// 	);

// 	useEffect(() => {
// 		if (isEdit) setEntries(RegFormEntriesEdit);
// 	}, [isEdit]);
// 	const onClickHandle = () => {
// 		navigate(-1);
// 	};
// 	useEffect(() => {
// 		reset(RegFormDefaultValues);

// 		const data = {
// 			data: {},
// 			method: 'get',
// 			apiName: `getPartner/${getId}`,
// 		};
// 		if (isEdit) {
// 			if (entries.find((item) => item.name === 'type_of_store')) {
// 				entries.find((item) => item.name === 'type_of_store').disabled = true;
// 			}
// 			dispatch(actions.PARTNER_DETAILS(data));
// 		}
// 	}, []);
// 	useEffect(() => {
// 		const fieldValue = partnerdetails?.data;

// 		const newObj = {
// 			store_name: fieldValue?.store_name,
// 			type_of_store: fieldValue?.type_of_store,
// 			shop_description: fieldValue?.shop_description,
// 			ABN_number: fieldValue?.ABN_number,
// 			GST_number: fieldValue?.GST_number,
// 			address: fieldValue?.address || '',
// 			state: fieldValue?.state,
// 			country: fieldValue?.country,
// 			suburb: fieldValue?.suburb,
// 			shop_logo: fieldValue?.shop_logo,
// 			shop_images: fieldValue?.shop_images,
// 			zipcode: fieldValue?.zipcode,
// 			contact_person_name: fieldValue?.contact_person_name,
// 			store_email: fieldValue?.store_email,
// 			primary_contact: fieldValue?.primary_contact,
// 			secondary_contact: fieldValue?.secondary_contact,
// 			password: fieldValue?.password,

// 			store_status:
// 				fieldValue?.store_status === 1
// 					? 'Active'
// 					: fieldValue?.store_status === 0
// 					? 'InActive'
// 					: 'Quarantine',
// 		};

// 		reset(newObj);
// 	}, [partnerdetails]);

// 	useEffect(() => {
// 		console.log('Mounted');

// 		return () => {
// 			dispatch(actions.PARTNER_RESET());
// 		};
// 	}, []);

// 	useEffect(() => {
// 		setList([
// 			{
// 				id: 1,
// 				title: 'REGISTRATION',
// 				description: `${partnerCreate?.message}`,
// 				backgroundColor: 'warning',
// 				icon: 'warning',
// 			},
// 		]);
// 		setAbleToGetLogoUrl(true);
// 		setTimeout(() => {
// 			setAbleToGetLogoUrl(false);
// 		});
// 	}, [partnerCreate]);

// 	useEffect(() => {
// 		const dropdownData = {
// 			data: {},
// 			method: 'get',
// 			apiName: 'getCategoryDropdown',
// 		};
// 		dispatch(actions.GET_CATEGORY(dropdownData));
// 	}, []);

// 	useEffect(() => {
// 		const tempArr = [];
// 		getCategoryDropdown?.data?.map((value) =>
// 			tempArr.push({
// 				id: value?.category_id,
// 				value: value?.category_master,
// 			})
// 		);
// 		setDropdownList(tempArr);
// 	}, [getCategoryDropdown]);

// 	useEffect(() => {
// 		if (logoImage === null) return;
// 		// eslint-disable-next-line no-unused-vars
// 		Object.entries(logoImage)?.map(async ([key, value]) => {
// 			const imageRef = ref(storage, `images/${value.name}`);
// 			setList([
// 				{
// 					id: 1,
// 					title: 'FILE UPLOAD',
// 					description: 'Image uploading Please wait',
// 					backgroundColor: 'warning',
// 					icon: 'warning',
// 				},
// 			]);
// 			setAbleToGetLogoUrl(true);
// 			try {
// 				uploadBytes(imageRef).then(() => {
// 					setLogoName(value.name);
// 				});
// 			} catch {
// 				alert('Image upload failed try again!!');
// 			}
// 		});
// 	}, [logoImage]);

// 	useEffect(() => {
// 		if (multiImage === null) return;
// 		setList([
// 			{
// 				id: 1,
// 				title: 'FILE UPLOAD',
// 				description: 'Image uploading Please wait',
// 				backgroundColor: 'warning',
// 				icon: 'warning',
// 			},
// 		]);
// 		setAbleToGetLogoUrl(true);
// 	}, [multiImage]);

// 	/**
// 	 *
// 	 * @param {*} e
// 	 */
// 	const onSubmit = async (data) => {
// 		const finalData = data;
// 		const formData = new FormData();
// 		formData.append('store_name', data?.store_name);
// 		formData.append('ABN_number', data?.ABN_number);
// 		formData.append('GST_number', data?.GST_number);
// 		formData.append('contact_person_name', data?.contact_person_name);
// 		formData.append('primary_contact', data?.primary_contact);
// 		formData.append('secondary_contact', data?.secondary_contact);
// 		formData.append('email', data?.email);
// 		formData.append('state', data?.state);
// 		formData.append('country', data?.country);
// 		formData.append('type_of_store', JSON.stringify(data?.type_of_store));
// 		formData.append('suburb', data?.suburb);
// 		formData.append('zipcode', data?.zipcode);
// 		formData.append('address', data?.address);
// 		formData.append('shop_description', data?.shop_description);
// 		formData.append('isShop', 1);
// 		formData.append('store_status', 1);
// 		formData.append(
// 			'status',
// 			data?.status === 'InActive' ? 0 : data?.status === 'Active' ? 1 : 2
// 		);
// 		formData.append('shop_logo', JSON.stringify(logos) || '');
// 		formData.append('shop_images', JSON.stringify(mulitples) || '');

// 		// setList([
// 		// 	{
// 		// 		id: 1,
// 		// 		title: 'PARTNER REGISTRATION',
// 		// 		description: 'Partner register successfully',
// 		// 		backgroundColor: 'check',
// 		// 		icon: 'check',
// 		// 	},
// 		// ]);

// 		// if (data?.shop_images.length > 0) {
// 		// 	data?.shop_images.map((item) => {
// 		// 		const tempArr = [];
// 		// 		Object.entries(item).map(([key, value]) => tempArr.push(value));
// 		// 		tempArr.forEach((image) => {
// 		// 			formData.append('shop_images', image || '');
// 		// 		});
// 		// 	});
// 		// }
// 		// if (data?.shop_logo.length > 0) {
// 		// 	data?.shop_logo.forEach((item) => {
// 		// });
// 		// }
// 		// shop_description;
// 		// setList([
// 		// 	{
// 		// 		id: 1,
// 		// 		title: 'PARTNER REGISTRATION',
// 		// 		description: 'Partner register successfully',
// 		// 		backgroundColor: 'check',
// 		// 		icon: 'check',
// 		// 	},
// 		// ]);
// 		// setAbleToGetLogoUrl(true);

// 		if (isEdit) {
// 			const submitData = {
// 				data: formData,
// 				method: 'put',
// 				apiName: 'partnerApproval',
// 				id: getId,
// 			};
// 			dispatch(actions.PARTNER_EDIT(submitData));
// 		} else {
// 			// if (data?.shop_images.length > 0) {
// 			// 	data?.shop_images.map((item) => {
// 			// 		const tempArr = [];
// 			// 		Object.entries(item).map(([key, value]) => tempArr.push(value));
// 			// 		tempArr.forEach((image) => {
// 			// 			// formData.append('shop_images', image || '');
// 			// 		});
// 			// 	});
// 			// }

// 			if (data?.shop_logo.length > 0) {
// 				data?.shop_logo.forEach((item) => {
// 					// formData.append('shop_logo', item || '');
// 				});
// 			}

// 			const submitData = {
// 				data: formData,
// 				method: 'post',
// 				apiName: 'createAdminRegistrationPartner',
// 			};

// 			dispatch(actions.PARTNER_CREATE(submitData));
// 		}
// 		reset({
// 			store_name: '',
// 			type_of_store: '',
// 			ABN_number: '',
// 			GST_number: '',
// 			contact_person_name: '',
// 			email: '',
// 			secondary_contact: '',
// 			state: '',
// 			suburb: '',
// 			zipcode: '',
// 			location: '',
// 			shop_description: '',
// 			shop_logo: '',
// 		});
// 		navigate(-1);
// 	};
// 	const getMultipleImage = (datas) => {
// 		console.log(datas, 'dsadasdas');
// 		const formData = new FormData();
// 		// formData.append('image', value);
// 		if (datas.length > 0) {
// 			datas.map((item) => {
// 				const tempArr = [];
// 				Object.entries(item).map(([key, value]) => tempArr.push(value));
// 				tempArr.forEach((image) => {
// 					formData.append('image', image || '');
// 				});
// 			});
// 		}
// 		const image = {
// 			data: formData,
// 			method: 'post',
// 			apiName: 'imageUpload',
// 		};
// 		dispatch(actions.PARTNER_IMAGE(image));
// 		setMulitples(mulitple);
// 		// setMultiImage(value[0], 'asfasdfsad');
// 	};

// 	const getImage = (value) => {
// 		const formData = new FormData();
// 		// formData.append('image', value);
// 		if (value.length > 0) {
// 			value.forEach((item) => {
// 				formData.append('image', item || '');
// 			});
// 		}
// 		const image = {
// 			data: formData,
// 			method: 'post',
// 			apiName: 'imageUpload',
// 		};
// 		dispatch(actions.PARTNER_IMAGE(image));
// 		setLogos(logo);
// 	};

// 	/**
// 	 *
// 	 * @param {*} data
// 	 */
// 	const onSelectValue = (data) => {
// 		setValues(data);
// 	};
// 	/**
// 	 *
// 	 * @param {*} e
// 	 * @param {*} value
// 	 */
// 	const handleDelete = (e, value) => {
// 		e.preventDefault();
// 		setValues(values.filter((name) => name !== value));
// 	};

// 	const handleCancel = () => {
// 		reset({
// 			store_name: '',
// 			type_of_store: '',
// 			ABN_number: '',
// 			GST_number: '',
// 			contact_person_name: '',
// 			email: '',
// 			secondary_contact: '',
// 			state: '',
// 			suburb: '',
// 			zipcode: '',
// 			location: '',
// 			shop_description: '',
// 			shop_logo: '',
// 			shop_images: '',
// 		});
// 	};

// 	// useEffect(() => {
// 	// 	// reset form with user data
// 	// 	reset(logoImage);
// 	// }, [logoImage]);

// 	return (
// 		<Grid container item md={12}>
// 			<Grid
// 				container
// 				item
// 				md={12}
// 				display="flex"
// 				justifyContent="space-between"
// 				pl={2}
// 				// pr={4.3}
// 				className="title_head"
// 			>
// 				<Grid>
// 					<CustomTypography
// 						type="header"
// 						text={label}
// 						customClass="headTextReg"
// 					/>
// 				</Grid>

// 				<NavLink to="/cryztal/Partner">
// 					<Grid onChange={onClickHandle} pt={1.5}>
// 						<img src={CustomIcons.MinIcon} alt="" />
// 					</Grid>
// 				</NavLink>
// 			</Grid>
// 			<Grid container item p={2} md={12} display="flex">
// 				<Grid container item md={12} spacing={3} display="flex">
// 					{entries?.map((keyValue) => (
// 						<Grid item md={keyValue.breakpoint} sm={6}>
// 							<Controller
// 								name={keyValue.name}
// 								control={control}
// 								rules={{
// 									required: keyValue?.validation?.required,
// 									pattern: keyValue?.pattern,
// 									maxLength: keyValue?.validation?.maxLength,
// 								}}
// 								render={({ field: { onChange, value } }) => (
// 									<>
// 										{keyValue?.isTextInput && (
// 											<Grid item md={12} sm={12}>
// 												<TextInput
// 													label={keyValue.label}
// 													onHandleChange={onChange}
// 													value={value}
// 													multiline={keyValue.multiline}
// 													rows={keyValue.rows}
// 													type={keyValue.type}
// 													disabled={keyValue?.disabled}
// 													uniqueText={keyValue.uniqueText}
// 												/>
// 											</Grid>
// 										)}
// 										{keyValue?.isDropdown && (
// 											<Grid item md={12} sm={12}>
// 												<CustomDropdown
// 													label={keyValue.label}
// 													handleChange={onChange}
// 													value={value || ''}
// 													data={keyValue.DropdownData}
// 													disabled={keyValue.disabled}
// 													placeholder={keyValue.placeholder}
// 												/>
// 											</Grid>
// 										)}
// 										{keyValue?.isMultipleSelectChip && (
// 											<Grid item md={12} sm={12}>
// 												<MultipleSelectChip
// 													// onSelectValue={(data) => onSelectValue(data)}
// 													onSelectValue={(e) => {
// 														onChange(e);
// 														onSelectValue(e);
// 													}}
// 													selectValue={values}
// 													onChipClose={(e, val) => handleDelete(e, val)}
// 													label={keyValue.label}
// 													dropDownList={dropdownList}
// 													placeholder={keyValue.placeholder}
// 												/>
// 											</Grid>
// 										)}

// 										{keyValue?.isSingleImageUpload && (
// 											<Grid item md={12} sm={12} className="shop_img_align">
// 												<div>
// 													<div className="shop_img">
// 														<img src={formWatchFields.shop_logo} alt="as" />
// 													</div>
// 												</div>
// 												<div>
// 													<CustomFileUploader
// 														Label="Shop Logo"
// 														upLoad={CustomIcons.UploadIcon}
// 														getImage={(val) => {
// 															onChange(val);
// 															getImage(val);
// 														}}
// 														// customClass="shop_img_align"
// 													/>
// 												</div>
// 											</Grid>
// 										)}

// 										{keyValue?.isMultiImageUpload && (
// 											<Grid item md={12} sm={12} className="shop_img_align">
// 												<div className="flex">
// 													{formWatchFields.shop_images.length > 0 &&
// 														formWatchFields.shop_images.map((imageSrc, key) => (
// 															<div className="shop_img">
// 																<img src={imageSrc} alt="as" />
// 															</div>
// 														))}
// 												</div>

// 												<MultiImage
// 													label="Shop image"
// 													upLoad={CustomIcons.UploadIcon}
// 													getImage={(val) => {
// 														onChange(val);
// 														getMultipleImage(val);
// 													}}
// 													// customClass="shop_img_align"
// 												/>
// 											</Grid>
// 										)}
// 										{keyValue?.isEmptySpace && (
// 											<Grid md={keyValue?.breakpoint} />
// 										)}
// 									</>
// 								)}
// 							/>
// 							{errors && errors[keyValue?.name]?.type === 'required' && (
// 								<Grid>
// 									<CustomTypography
// 										text={`${keyValue?.label} is Required`}
// 										type="error"
// 									/>
// 								</Grid>
// 							)}
// 							{errors && errors[keyValue?.name]?.type === 'maxLength' && (
// 								<Grid>
// 									<CustomTypography
// 										text={`${keyValue?.label} is not valid`}
// 										type="error"
// 									/>
// 								</Grid>
// 							)}
// 							{errors && errors[keyValue?.name]?.type === 'pattern' && (
// 								<Grid>
// 									<CustomTypography
// 										text={`${keyValue?.label} invalid format`}
// 										type="error"
// 									/>
// 								</Grid>
// 							)}
// 						</Grid>
// 					))}
// 				</Grid>

// 				<Grid container item md={12} display="flex">
// 					<Grid
// 						container
// 						display="flex"
// 						spacing={3}
// 						justifyContent="flex-end"
// 						className="bottom-select"
// 					>
// 						<Grid item>
// 							<CustomButton
// 								btnTitle={isEdit ? 'UPDATE' : 'SUBMIT'}
// 								variant="contained"
// 								color="primary"
// 								btnStyles={{
// 									color: '#fff',
// 									background: '#F4A01C',
// 									border: '1px solid #F4A01C',
// 								}}
// 								onClickHandle={handleSubmit(onSubmit)}
// 							/>
// 						</Grid>

// 						{!isEdit && (
// 							<Grid item>
// 								<CustomButton
// 									className="can-button"
// 									btnTitle="CANCEL"
// 									variant="outlined"
// 									color="primary"
// 									onClickHandle={() => handleCancel()}
// 								/>
// 							</Grid>
// 						)}
// 					</Grid>
// 				</Grid>
// 			</Grid>
// 			{/* </Grid> */}
// 		</Grid>
// 	);
// }

// export default Register;
