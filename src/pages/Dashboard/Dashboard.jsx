/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from 'react';
import { Grid } from '@mui/material';
// import { DashboardCard, CustomPieChart, Table } from 'pss-react-components';
import { DashboardCard } from '../../components/Card/Card';
import { Table } from '../../components/Table/Table';
import { CustomPieChart } from '../../components/PieChart/PieChart';
import { useDispatch, useSelector } from 'react-redux';
import DashboardView from './DashboardView';
import CustomIcons from '../../utils/icon/index';
import actions from '../../actions';



/**
 *
 * @returns
 */
function Dashboard() {
	const dispatch = useDispatch();
	const { dashboard, dashboardCount } = useSelector(
		(state) => state?.dashboard
	);
	const [dashBoardView, setDashBoardView] = useState(false);
	const [viewId, setViewId] = useState(0);
	const [table, setTable] = useState([]);

	React.useEffect(() => {
		const data1 = {
			data: {
				isSearch: false,
			},
			method: 'post',
			apiName: 'getDashboardPartnerList',
		};
		
		const data = { data: {}, method: 'get', apiName: 'getDashboardCounts' };
		
		dispatch(actions.DASHBOARD_COUNT(data));
		dispatch(actions.DASHBOARD(data1));
	}, []);

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
	// const getPartnerCount = () => {
	// 	// eslint-disable-next-line no-unsafe-optional-chaining
	// 	const partnerCount = Math.round(
	// 		dashboardCount?.data?.partnersInActiveCount +
	// 			dashboardCount?.data?.partnersActiveCount
	// 	);
	// 	return partnerCount;
	// };
	// const totalPartnerCount = `${dashboardCount?.data?.partnersInActiveCount}+ ${dashboardCount?.data?.partnersActiveCount}`;
	const dashboardCard = [
		{
			header: 'Total Deals',
			count: dashboardCount?.data?.dealsCount,
			iconSource: CustomIcons.Product,
			gradient1: '#E90B7E',
			gradient2: '#FF5A5A',
			navPath: '/cryztal/approval',
		},

		{
			header: 'Total Partners',
			inActiveCount: dashboardCount?.data?.partnersInActiveCount,
			partnerCount: dashboardCount?.data?.totalPartnersCount,
			// partnerCount: getPartnerCount(),
			iconChange: CustomIcons.Partner,
			subtitle2: 'Active',
			activeCount: dashboardCount?.data?.partnersActiveCount,
			subtitle3: 'Inactive',
			gradient1: '#407BFF',
			gradient2: '#2C55B1',
			navPath: '/cryztal/Partner',
		},
		{
			header: 'Total Customers',
			inActiveCount: dashboardCount?.data?.customersInActiveCount,
			partnerCount: dashboardCount?.data?.customersCount,
			// partnerCount: getPartnerCount(),
			iconChange: CustomIcons.Partner,
			subtitle2: 'Active',
			activeCount: dashboardCount?.data?.customersActiveCount,
			subtitle3: 'Inactive',

			gradient1: '#02AAB0',
			gradient2: '#00CDAC',
			navPath: '/cryztal/customer',
		},
	];

	const data = [
		{ name: 'Pending', value: dashboardCount?.data?.dealsPending },
		{ name: 'Approved', value: dashboardCount?.data?.dealsApproved },
		{ name: 'Rejected', value: dashboardCount?.data?.dealsReject },
		{ name: 'Quarantine', value: dashboardCount?.data?.dealsQuarantine },
	];
	console.log(data, 'data');
	const header = [
		'S.No',
		'Store Name',
		'Type of Store',
		'Store Email',
		'Contact Mobile',
		'Create Date',
		'ABN Number',
		'Status',
		'Action',
	];

	const handleOpen = (id) => {
		setDashBoardView(!dashBoardView);

		setViewId(id);
	};

	React.useEffect(() => {
		const tmpArr = [];
		dashboard?.data?.map((values) =>
			tmpArr.push({
				id: values.id,
				store_name: values.store_name,
				// typeof: values?.type_of_store,
				typeof: values?.type_of_store?.toString(),
				store_email: values.store_email,
				primary_contact: values.primary_contact,
				created_on: values.created_on,
				ABN_number: values.ABN_number,
				status:
					// eslint-disable-next-line no-nested-ternary
					values.store_status === 0
						? 'InActive'
						: values.store_status === 1
						? 'Active'
						: 'Quarantine',
			})
		);
		setTable(tmpArr);
	}, [dashboard]);
	/**
	 *
	 */
	const getApproval = () => {
		// eslint-disable-next-line no-unsafe-optional-chaining
		const Approval = Math.round(
			(dashboardCount?.data?.dealsApproved / dashboardCount?.data?.dealsCount) *
				100
		);
		console.log(Approval);
		return Approval;
	};

	return (
		<Grid container item md={12} pl={4} pr={1.2}>
			<Grid container item md={12} display="flex" spacing={1}>
				<Grid
					item
					container
					display="flex"
					md={12}
					borderBottom="1px dashed #707070"
				>
					<Grid
						item
						md={8}
						sm={12}
						display="inline-flex"
						justifyContent="space-around"
						pt={5}
					>
						<DashboardCard dashboardCard={dashboardCard} />
					</Grid>
					<Grid item md={4} pl={3} pt={1.4}>
						<CustomPieChart data={data} percentage={getApproval()} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item md={12}>
				<Table
					tableTitle="Total Partners"
					header={header}
					rows={table}
					printer={CustomIcons.Printer1}
					dropdownData={dropdownData}
					tableSearch
					view={CustomIcons.View}
					modalOpen={(id) => handleOpen(id)}
					action
					actionItem={{
						view: true,
					}}
				/>
				{dashBoardView && <DashboardView viewId={viewId} />}
			</Grid>
		</Grid>
	);
}

export default Dashboard;
