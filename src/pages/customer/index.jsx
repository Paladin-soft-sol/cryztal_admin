/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Table, CustomTypography } from '../../components/index';
import { useNavigate } from 'react-router-dom';

import CustomIcons from '../../utils/icon/index';
import actions from '../../actions';
import CustomerView from './userViewModal';
import './main.css';

/**
 *
 * @returns
 */  
function CustomerScreen() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const customer = useSelector((state) => state?.customer);
	console.log(customer, 'customer');
	const [table, setTable] = useState([]);
	const [customerView, setCustomerView] = useState(false);
	const [viewId, setViewId] = useState();
	console.log(viewId,"viewIdviewIdviewId");

	const header = [
		'S.No',
		'Name',
		'Mobile Number',
		'Email',
		'Join Date',
		'Status',
		'Action',
	];

	const handleOpen = (id) => {
		console.log(id,"setCustomerView");
		setCustomerView(!customerView);
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
				// : values.block === 'true'
				// ? 'Active'
				// : 'Quarantine',
			})
		);
		setTable(tmpArr);
	}, [customer]);

	return (
		<Grid pl={4} item md={12}>
			<Grid container md={12}>
				<CustomTypography
					type="header"
					text="Customer"
					customClass="headText"
				/>
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
			{customerView && <CustomerView viewId={viewId} />}
		</Grid>
	);
}

export default CustomerScreen;
