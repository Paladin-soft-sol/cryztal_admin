/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
// import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CustomTab, CustomTypography, Table } from '../../components/index';
import CustomIcons from '../../utils/icon/index';
import actions from '../../actions';
import './style.css';

function MainPage() {
	const [value, setValue] = React.useState(0);
	const [table, setTable] = useState([]);
	const approval = useSelector((state) => state?.approval);
	console.log(approval, 'approval');
	const dispatch = useDispatch();

	useEffect(() => {
		const data = {
			data: {
				isFilter: true,
				isSearch: false,
				keyword: value,
				filter: value,
			},
			method: 'post',
			apiName: 'getAllDealList',
		};
		dispatch(actions.APPROVAL(data));
	}, [value]);

	const label = 'Deal Approval';

	const tabList = [
		{
			id: 1,
			tabText: 'Pending',
			tabColor: '#ffc51c',
		},
		{
			id: 2,
			tabText: 'Approved',
			tabColor: '#00ebc2',
		},
		{
			id: 3,
			tabText: 'Rejected',
			tabColor: '#ff4485',
		},
		{
			id: 4,
			tabText: 'Quarantine',
			tabColor: '#0083ff',
		},
	];

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		const tmpArr = [];

		approval?.approval?.data?.map((values) =>
			tmpArr.push({
				id: values.id,
				store_Name: values?.partner_id?.store_name,
				deal_name: values.deal_name,
				offer: values.offer,
				shop_description: values?.discount_description,
				from_date: values.from_date,
				to_date: values.to_date,
			})
		);
		setTable(tmpArr);
	}, [approval]);
	console.log(approval,"approval")
	const dropdownData = [
		{
			id: 1,
			value: 'aaa',
		},
		{
			id: 2,
			value: 'bbb',
		},
	];
	const header = [
		'S.No',
		'Store Name',
		'Deal Name',
		'Offers(%)',
		'Offer/Discount Description',
		'From Date',
		'To Date',
		'Action',
	];

	return (
		<Grid container md={12} pl={2}>
			<Grid container item md={12} />
			<Grid container item md={12}>
				<Grid container item md={12}>
					<Grid container md={12} p={2}>
						<CustomTypography
							type="header"
							text={label}
							customClass="headText"
						/>
					</Grid>
					<Grid md={12} p={2.5}>
						<CustomTab
							tabList={tabList}
							handleChange={handleChange}
							value={value}
						/>
						<Table
							header={header}
							dropdownData={dropdownData}
							printer={CustomIcons.Printer1}
							rows={table}
							view={CustomIcons.View}
							action
							actionItem={{ view: true, edit: true, deleteData: false }}
							tableSearch
							viewPath="approvalView"
							edit={CustomIcons.EditIcon}
							editPath="dealeditform"
							// navigate="/approvalView"
							showSno
							newModule={value}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default MainPage;
