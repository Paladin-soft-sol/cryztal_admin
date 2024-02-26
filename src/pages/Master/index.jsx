/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	CustomTab,
	TextInput,
	CustomRadioButton,
	CustomDropdown,
	CustomButton,
	Table,
	CustomTypography,
} from '../../components/index';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import actions from '../../actions';
import Toast from '../../utils/Notification/Toast';
import TermsAndConditions from './termsAndCondition';
import PrivacyAndPolicy from './privacyPolicy';
import CustomIcons from '../../utils/icon/index';
import * as MASTER from './MasterTabEntries';

/**
 *
 * @returns
 */
function MasterScreen() {
	const [tabValue, setTabValue] = useState(0);
	const [deleteApi, setDeleteApi] = useState(false);
	const [deleteId, setDeleteId] = useState();
	const [editId, setEditId] = useState();
	const [editAbleValues, setEditAbleValues] = useState({});
	const [showToast, setShowToast] = useState();
	const [list, setList] = useState();
	const [modelView, setModelView] = useState(false);
	const [privacymodel, setPrivacyModel] = useState(false);
	console.log(modelView, privacymodel, 'privacymodel');
	const [dropdownList, setDropdownList] = useState([]);
	const [btnTitle, setBtnTitle] = useState('SUBMIT');
	const [viewId, setViewId] = useState(0);
	const [privacyviewid, setPrivacyViewId] = useState(0);
	console.log(list, 'privacyviewid');
	const [rowTableData, setRowTableData] = useState([
		{
			id: '--',
			SNo: '--',
			Category: '--',
			Created_Date: '--',
			Status: '--',
			Action: '--',
		},
	]);
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);
	const { master, masterGet, masterDelete, masterEdit, masterCreate } =
		useSelector((state) => state?.master);
	const { getCategoryDropdown } = useSelector(
		(state) => state?.categoryDropdown
	);
	console.log(masterGet, 'testasta');
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: editAbleValues,
	});
	const [entries, setEntries] = useState(MASTER.CategoryMaster);
	useEffect(() => {
		const dropdownData = {
			data: {},
			method: 'get',
			apiName: 'getCategoryDropdown',
		};
		
		dispatch(actions.GET_CATEGORY(dropdownData));
	}, []);
	console.log(masterCreate?.message, 'tabValue');
	useEffect(() => {
		const tempArr = [];
		getCategoryDropdown?.data?.map((values) =>
			tempArr.push({
				id: values?.category_id,
				value: values?.category_master,
			})
		);
		setDropdownList(tempArr);
	}, [getCategoryDropdown]);

	useEffect(() => {
		const tempArr = [];
		master?.data?.map((data) => {
			if (tabValue === 0) {
				return tempArr.push({
					id: data?.category_id,
					Category: data?.category_master,
					Created_Date: data?.created_on,
					Status: data?.status ? 'Active' : 'InActive',
				});
			}
			if (tabValue === 1) {
				return tempArr.push({
					id: data?.sub_category_id,
					Category: data?.category_id?.category_master,
					'Sub Category': data?.sub_category,
					Created_Date: data?.created_on,
					Status: data?.status ? 'Active' : 'InActive',
				});
			}
			if (tabValue === 2) {
				return tempArr.push({
					id: data?.terms_and_condition_id,
					user_type: data?.user_type === '1' ? 'User' : 'Partner',
					// 'Terms and Conditions': data?.terms_and_condition,
					Created_Date: data?.created_on,
					Status: data?.status ? 'Active' : 'InActive',
				});
			}
			if (tabValue === 3) {
				return tempArr.push({
					id: data?.privacy_and_policy_id,
					type: data?.type === 1 ? 'User' : 'Partner',
					// privacy_and_policy: data?.privacy_and_policy,
					Created_Date: data?.created_on,
					Status: data?.status ? 'Active' : 'InActive',
				});
			}
			return tempArr;
			
		});
		setRowTableData(tempArr);
	}, [master, tabValue]);
	useEffect(() => {
		if (editId) {
			if (tabValue === 0) {
				setEditAbleValues({
					category_master: masterGet?.data?.category_master,
					status: masterGet?.data?.status ? 'Active' : 'InActive',
				});
			}
			if (tabValue === 1) {
				setEditAbleValues({
					category_id: masterGet?.data?.category_id?.category_id,
					sub_category: masterGet?.data?.sub_category,
					status: masterGet?.data?.status ? 'Active' : 'InActive',
				});
			}
			if (tabValue === 2) {
				entries.find((item) => item.name === 'user_type').isRadioAction = false;
				setEditAbleValues({
					user_type: masterGet?.data?.user_type === '1' ? 'User' : 'Partner',
					terms_and_condition: masterGet?.data?.terms_and_condition,
					status: masterGet?.data?.status ? 'Active' : 'InActive',
				});
			}
			if (tabValue === 3) {
				entries.find((item) => item.name === 'type').isRadioAction = false;
				setEditAbleValues({
					type: masterGet?.data?.type === 1 ? 'User' : 'Partner',
					privacy_and_policy: masterGet?.data?.privacy_and_policy,
					status: masterGet?.data?.status ? 'Active' : 'InActive',
				});
			}
		}
	}, [masterGet, editId]);
	useEffect(() => {
		setPrivacyModel(false);
		setModelView(false);
	}, [tabValue]);
	useEffect(() => {
		if (editId) {
			setBtnTitle('UPDATE');
			reset(editAbleValues);
		}
	}, [editAbleValues]);
	

	const handleChange = (event, newValue) => {
		setShowToast(true);
		setTimeout(() => setShowToast(false), 5000);
		reset({});
		setTabValue(newValue);
	};
	useEffect(() => {
		if (tabValue === 0) {
			setEntries(MASTER.CategoryMaster);
		}
		if (tabValue === 1) {
			setEntries(MASTER.SubCategory);
		}
		if (tabValue === 2) {
			setEntries(MASTER.TermsConditions);
		}
		if (tabValue === 3) {

			setEntries(MASTER.PrivacyPolicy);
		}
	}, [tabValue]);
	
	const callTableValue = () => {
		setBtnTitle('SUBMIT');
		setEditId('');

		reset({});

		if (tabValue === 0) {
			dispatch(actions.MASTER(MASTER.categoryListPayload));
		}
		if (tabValue === 1) {
			// dispatch(actions.MASTER(MASTER.categoryListPayload));

			dispatch(actions.MASTER(MASTER.subCategoryListPayload));
		}
		if (tabValue === 2) {
			dispatch(actions.MASTER(MASTER.termsListPayload));
		}
		if (tabValue === 3) {
			dispatch(actions.MASTER(MASTER.privacyListPayload));
		}
	};

	useEffect(() => {
		if (editId) {
			if (tabValue === 0) {
				MASTER.getCategoryPayload.id = editId;
				dispatch(actions.MASTER_GET(MASTER.getCategoryPayload));
			}
			if (tabValue === 1) {
				MASTER.getSubCategoryPayload.id = editId;
				dispatch(actions.MASTER_GET(MASTER.getSubCategoryPayload));
			}
			if (tabValue === 2) {
				MASTER.getTermConditionPayload.id = editId;
				dispatch(actions.MASTER_GET(MASTER.getTermConditionPayload));
			}
			if (tabValue === 3) {
				MASTER.getPrivacyPolicyPayload.id = editId;
				dispatch(actions.MASTER_GET(MASTER.getPrivacyPolicyPayload));
			}
		}
	}, [editId]);
	/**
	 *
	 */
	const getToastTitle = () => {
		if (tabValue === 0) {
			return 'Category Master';
		}
		if (tabValue === 1) {
			return 'Sub Category Master';
		}
		if (tabValue === 2) {
			return 'Terms And Condition';
		}
		if (tabValue === 3) {
			return 'Privacy And Policy';
		}
		return 'Category Master';
	};
	const handleDelete = () => {
		setDeleteApi(true);
		setTimeout(() => setDeleteApi(false), 1000);
		setOpen(false);
		setList([
			{
				id: 1,
				title: getToastTitle(),
				description: 'Data Removed successfully',
				backgroundColor: 'check',
				icon: 'check',
			},
		]);
		setShowToast(true);
	};

	useEffect(() => {
		if (tabValue === 0 && deleteApi && deleteId) {
			MASTER.deleteCategoryPayload.id = deleteId;
			dispatch(actions.MASTER_DELETE(MASTER.deleteCategoryPayload));
		}
		if (tabValue === 1 && deleteApi && deleteId) {
			MASTER.deleteSubCategoryPayload.id = deleteId;
			dispatch(actions.MASTER_DELETE(MASTER.deleteSubCategoryPayload));
		}
		if (tabValue === 2 && deleteApi && deleteId) {
			MASTER.deleteTermPayload.id = deleteId;
			dispatch(actions.MASTER_DELETE(MASTER.deleteTermPayload));
		}
		if (tabValue === 3 && deleteApi && deleteId) {
			MASTER.deletePrivacyPayload.id = deleteId;
			dispatch(actions.MASTER_DELETE(MASTER.deletePrivacyPayload));
		}
		setTimeout(() => setShowToast(false), 3000);
	}, [deleteId, deleteApi]);

	const callOnSubmit = (submitData) => {
		// alert('fghfghf')
		if (tabValue === 0) {
			if (editId) {
			
				MASTER.categoryEditPayload.data = { ...submitData };
				MASTER.categoryEditPayload.id = editId;
				dispatch(actions.MASTER_EDIT(MASTER.categoryEditPayload));
			} else {
				MASTER.categoryCreatePayload.data = { ...submitData };
				dispatch(actions.MASTER_CREATE(MASTER.categoryCreatePayload));
			}
		}
		if (tabValue === 1) {
			if (editId) {
				MASTER.updateSubCategoryPayload.data = submitData;
				MASTER.updateSubCategoryPayload.id = editId;
				dispatch(actions.MASTER_EDIT(MASTER.updateSubCategoryPayload));
			} else {
				MASTER.subCategoryCreatePayload.data = { ...submitData };
				dispatch(actions.MASTER_CREATE(MASTER.subCategoryCreatePayload));
			}
		}
		if (tabValue === 2) {
			if (editId) {
				MASTER.updateTermsAndConditionPayload.data = submitData;
				MASTER.updateTermsAndConditionPayload.id = editId;
				dispatch(actions.MASTER_EDIT(MASTER.updateTermsAndConditionPayload));
			} else {
				MASTER.termsConditionCreatePayload.data = { ...submitData };
				dispatch(actions.MASTER_CREATE(MASTER.termsConditionCreatePayload));
			}
		}
		if (tabValue === 3) {
			if (editId) {
				MASTER.updatePrivacyPayload.data = submitData;
				MASTER.updatePrivacyPayload.id = editId;
				dispatch(actions.MASTER_EDIT(MASTER.updatePrivacyPayload));
			} else {
				MASTER.privacyCreatePayload.data = { ...submitData };
				dispatch(actions.MASTER_CREATE(MASTER.privacyCreatePayload));
			}
		}
		setEditId('');
	};

	const onSubmit = (data) => {
		const submitData = { ...data };
		submitData.status = submitData?.status === 'Active';
		submitData.created_by = 1;
		submitData.user_type = submitData?.user_type === 'User' ? 1 : 2;
		submitData.type = submitData?.type === 'User' ? 1 : 2;
		reset({
			category_master: '',
			sub_category: '',
			user_type: '',
			terms_and_condition: '',
			privacy_and_policy: '',
			category_id: '',
		});
		callOnSubmit(submitData);

		setList([
			{
				id: 1,
				title: getToastTitle(),
				description: editId
					? 'Data Updated successfully'
					: 'Data Added successfully',
				backgroundColor: 'check',
				icon: 'check',
			},
		]);
		if (tabValue === 2) {
			entries.find((item) => item.name === 'user_type').isRadioAction = true;
		}
		if (tabValue === 3) {
			entries.find((item) => item.name === 'type').isRadioAction = true;
		}

		setBtnTitle('SUBMIT');
		setEditId('');
	};
	const handleCancel = () => {
		reset({
			category_master: '',
			sub_category: '',
			user_type: '',
			terms_and_condition: '',
			privacy_and_policy: '',
			category_id: '',
		});

		if (tabValue === 2) {
			entries.find((item) => item.name === 'user_type').isRadioAction = true;
		}
		if (tabValue === 3) {
			entries.find((item) => item.name === 'type').isRadioAction = true;
		}

		setBtnTitle('SUBMIT');
		setEditId('');
	};
	console.log(masterCreate);
	const tosterSet = () => {
		setShowToast(false), setList([]);
	};
	useEffect(() => {
		if (
			masterCreate?.data?.category_id ||
			masterCreate?.data?.terms_and_condition_id ||
			masterCreate?.data?.id ||
			masterEdit?.data?.affected
			// masterCreate?.message?.length >= 0
		) {
			setShowToast(true);
			setTimeout(() => setShowToast(false), 3000);
		}
		if (Array.isArray(masterCreate?.message) && tabValue === 0) {
			setList([
				{
					id: 1,
					title: 'Failed',
					description: masterCreate?.message?.[0],
					backgroundColor: 'check',
					icon: 'check',
				},
			]);
			setShowToast(true);
			setTimeout(() => tosterSet(), 3000);
		}
	}, [masterCreate, masterEdit]);

	useEffect(() => {
		callTableValue();
	}, [tabValue, masterDelete, masterEdit, masterCreate]);

	const handleOpen = (id, val) => {
		console.log(id, val, 'skldfjasrh');
		if (val === 2) {
			setModelView(!modelView);
			setViewId(id);
		}
		if (val === 3) {
			setPrivacyModel(!privacymodel);
			setPrivacyViewId(id);
		}
	};
	return (
		<div>
			<Grid item container>
				{showToast && (
					<>
						<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
							<LinearProgress color="success" />
						</Stack>
						<Toast
							toastList={list}
							position="top-right"
							autoDelete
							autoDeleteTime={3000}
						/>
					</>
				)}
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						Are you sure want to delete?
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Data deleted cannot be recovered?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setOpen(false)}>Disagree</Button>
						<Button onClick={() => handleDelete()} autoFocus>
							Agree
						</Button>
					</DialogActions>
				</Dialog>
				<Grid item md={12}>
					<Grid item className="customTab" p={2} md={12}>
						<CustomTab
							tabList={MASTER.tabArray}
							handleChange={handleChange}
							value={tabValue}
							sx={{
								'&.MuiTab-root': {
									'&.Mui-selected': {
										color: '#204768',
									},
								},
							}}
						/>
					</Grid>
					<Grid container item p={2} md={12} display="flex">
						<Grid container item md={10} sm={12} spacing={1} display="flex">
							{entries?.map((keyValue) => (
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
															data={dropdownList}
															placeholder={keyValue.placeholder}
															returnId={keyValue.returnId}
														/>
													</Grid>
												)}
												{keyValue?.isRadioAction && (
													<Grid item md={12} sm={12} display="flex">
														<CustomRadioButton
															handleChange={onChange}
															selectValue={value}
															labelText={keyValue?.label}
															radioData={keyValue.radioButtonData}
															defaultValue="Active"
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
							md={2}
							sm={12}
							name="position"
							className="position-select"
						>
							<>
								<CustomButton
									customClass="submit_button"
									btnTitle={btnTitle}
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
					<Grid item pt={0} pl={2} pr={2} md={12}>
						<Table
							header={MASTER.getHeader(tabValue)}
							rows={rowTableData}
							newModule={tabValue}
							tableSearch   
							action
							actionItem={
								tabValue === 0
									? { edit: true, deleteIcon: false }
									: tabValue === 2
									? { view: true, edit: true, deleteIcon: true }
									: tabValue === 3
									? { view: true, edit: true, deleteIcon: true }
									: { edit: true, deleteIcon: true }
							}
							editOpen={(id) => setEditId(id)}
							view={CustomIcons.View}
							edit={CustomIcons.EditIcon}
							deleteIconSrc={CustomIcons.DeleteIcon}
							deleteData={(id) => {
								setOpen(true);
								setDeleteId(id);
							}}
							modalOpen={(id) => handleOpen(id, tabValue)}
						/>
					</Grid>
					{modelView && <TermsAndConditions viewId={viewId} />}
					{privacymodel && <PrivacyAndPolicy privacyviewid={privacyviewid} />}
				</Grid>
			</Grid>
		</div>
	);
}

export default MasterScreen;
