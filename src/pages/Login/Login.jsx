/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
	TextInput,
	CustomTypography,
	CustomButton,
	Footer,
} from '../../components/index';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import actions from '../../actions';
import CustomImages from '../../utils/images/index';
import './Login.css';
import entries from './formEntries';
import Toast from '../../utils/Notification/Toast';

/**
 *
 * @returns
 */
function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginAdmin = useSelector((state) => state?.login?.login);
	const [list, setList] = useState([]);
	const [showToast, setShowToast] = useState(false);
	console.log(list, 'list');

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	/**
	 *
	 * @param {*} e
	 */
	const onSubmit = (dat) => {
		const data = { data: dat, method: 'post', apiName: 'adminLogin' };
		dispatch(actions.LOGIN_ADMIN(data));

		setShowToast(!showToast);
	};
	const setNav = () => {
		setTimeout(() => {
			navigate('/cryztal/dashboard');
		}, 3000);
	};
	console.log(loginAdmin?.data?.Success, 'login');
	useEffect(() => {
		if (loginAdmin?.data?.Success === true) {
			setList([
				{
					id: 1,
					title: 'Success',
					description: 'Login Success',
					backgroundColor: 'check',
					icon: 'check',
				},
			]);
			setNav();
		}
		if (loginAdmin?.data?.Success === false) {
			setList([
				{
					id: 2,
					title: 'Error',
					description: 'Incorrect Email or Password',
					backgroundColor: 'error',
					icon: 'warning',
				},
			]);
		}
	}, [loginAdmin]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{showToast && (
				<>
					<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
						{list?.map((item) => (
							<LinearProgress
								sx={{ backgroundColor: item?.id === 1 ? 'green' : 'red' }}
							/>
						))}
					</Stack>
					<Toast toastList={list} position="top-right" />
				</>
			)}
			<Grid
				item
				container // autoDelete
				// autoDeleteTime={3000}
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="92vh"
			>
				<Grid>
					<Grid textAlign="center">
						<img
							src={CustomImages.CryztalLogo}
							alt="cryztalLogo"
							className="logoStyle"
						/>
					</Grid>
					<Grid item container justifyContent="center">
						<CustomTypography
							text="Welcome"
							type="header"
							customClass="welcome"
						/>
					</Grid>
					<Grid>
						{entries?.map((keyValue) => (
							<Grid>
								<Controller
									control={control}
									rules={{
										required: keyValue?.validation?.isRequired,
										pattern: keyValue?.pattern,
									}}
									render={({ field: { onChange, value } }) => (
										<Grid item md={12} sm={12} pt={2}>
											{keyValue.textField && (
												<Grid className="loginTextBox">
													<TextInput
														value={value}
														placeholder={keyValue.placeholder}
														type={keyValue.type}
														onHandleChange={onChange}
														// inputStyles={{ width: '350px' }}
														iconSource={keyValue.iconSource}
														isLogin
														textInputIcon
													/>
												</Grid>
											)}
										</Grid>
									)}
									name={keyValue.entryName}
								/>
								{errors[keyValue.entryName]?.type === 'required' && (
									<Grid>
										<CustomTypography
											type="error"
											colorType="error"
											text={`${keyValue.label} is required`}
										/>
									</Grid>
								)}
								{errors[keyValue.entryName]?.type === 'pattern' && (
									<Grid>
										<CustomTypography
											type="error"
											colorType="error"
											text={`${keyValue.label} is Invalid`}
										/>
									</Grid>
								)}
							</Grid>
						))}
					</Grid>

					<Grid display="flex" justifyContent="center" pt={3.5}>
						<CustomButton
							btnTitle="LOGIN"
							color="primary"
							variant="contained"
							btnStyles={{
								width: '350px',
								color: 'white',
								backgroundColor: 'rgb(255, 197, 24)',
								boxShadow: '0px 6px 20px #EE8E5480',
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid height="8vh" display="flex" justifyContent="center">
				<Footer />
			</Grid>
		</form>
	);
}

export default Login;
