/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const DASHBOARD = createAsyncThunk(
	'dashboard/dashboards',
	// eslint-disable-next-line default-param-last
	async (
		// eslint-disable-next-line default-param-last
		payload = {},
		{ rejectWithValue }
	) => {
		try {
			const data = await fetchData(
				payload?.data,
				payload?.method,
				payload?.apiName
			);
			return {
				...defaultState.List,
				message: data?.data.Message,
				data: data?.data?.data,
			};
		} catch (error) {
			return rejectWithValue({
				...defaultReject.List,
				message: error.message,
			});
		}
	}
);

const DASHBOARD_COUNT = createAsyncThunk(
	'dashboard/dashboard_Counts',
	// eslint-disable-next-line default-param-last
	async (
		// eslint-disable-next-line default-param-last
		payload = {},
		{ rejectWithValue }
	) => {
		try {
			const data = await fetchData(
				payload?.data,
				payload?.method,
				payload?.apiName
			);
			return {
				...defaultState.List,
				message: data?.data.Message,
				data: data?.data?.data,
			};
		} catch (error) {
			return rejectWithValue({
				...defaultReject.List,
				message: error.message,
			});
		}
	}
);

const DASHBOARD_DETAILS = createAsyncThunk(
	'dashboard/dashboard_details',
	// eslint-disable-next-line default-param-last
	async (
		// eslint-disable-next-line default-param-last
		payload = {},
		{ rejectWithValue }
	) => {
		try {
			const data = await fetchData(
				payload?.data,
				payload?.method,
				payload?.apiName
			);
			return {
				...defaultState.List,
				message: data?.data.Message,
				data: data?.data?.data,
			};
		} catch (error) {
			return rejectWithValue({
				...defaultReject.List,
				message: error.message,
			});
		}
	}
);

const dashboardSlice = createSlice({
	name: 'dashboardSlice',
	initialState: {
		dashboard: {
			...defaultState.List,
		},
		dashboardCount: {
			...defaultState.List,
		},
		dashboardDetails: {
			...defaultState.List,
		},
	},
	extraReducers: {
		[DASHBOARD.fulfilled]: (state, action) => {
			(state.dashboard.loading = false),
				(state.dashboard.error = false),
				(state.dashboard = action.payload);
		},
		[DASHBOARD.pending]: (state, action) => {
			(state.dashboard.loading = true),
				(state.dashboard.error = false),
				(state.dashboard.loading = true);
		},
		[DASHBOARD.rejected]: (state, action) => {
			(state.dashboard.loading = false),
				(state.dashboard.error = true),
				(state.dashboard = action.payload);
		},
		[DASHBOARD_COUNT.fulfilled]: (state, action) => {
			(state.dashboardCount.loading = false),
				(state.dashboardCount.error = false),
				(state.dashboardCount = action.payload);
		},
		[DASHBOARD_COUNT.pending]: (state, action) => {
			(state.dashboardCount.loading = true),
				(state.dashboardCount.error = false),
				(state.dashboardCount.loading = true);
		},
		[DASHBOARD_COUNT.rejected]: (state, action) => {
			(state.dashboardCount.loading = false),
				(state.dashboardCount.error = true),
				(state.dashboardCount = action.payload);
		},

		[DASHBOARD_DETAILS.fulfilled]: (state, action) => {
			(state.dashboardDetails.loading = false),
				(state.dashboardDetails.error = false),
				(state.dashboardDetails = action.payload);
		},
		[DASHBOARD_DETAILS.pending]: (state, action) => {
			(state.dashboardDetails.loading = true),
				(state.dashboardDetails.error = false),
				(state.dashboardDetails.loading = true);
		},
		[DASHBOARD_DETAILS.rejected]: (state, action) => {
			(state.dashboardDetails.loading = false),
				(state.dashboardDetails.error = true),
				(state.dashboardDetails = action.payload);
		},
	},
});

const dashBoardAction = {
	DASHBOARD,
	DASHBOARD_COUNT,
	DASHBOARD_DETAILS,
};
export { dashBoardAction };
export default dashboardSlice.reducer;
