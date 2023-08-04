/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const REPORTS = createAsyncThunk(
	'report/report',
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

const USER_DETAILS = createAsyncThunk(
	'report/user_details',
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

const reportSlice = createSlice({
	name: 'reportSlice',
	initialState: {
		report: {
			...defaultState.List,
		},
		user_details: {
			...defaultState.List,
		},
	},
	extraReducers: {
		[REPORTS.fulfilled]: (state, action) => {
			(state.report.loading = false),
				(state.report.error = false),
				(state.report = action.payload);
		},
		[REPORTS.pending]: (state, action) => {
			(state.report.loading = true),
				(state.report.error = false),
				(state.report.loading = true);
		},
		[REPORTS.rejected]: (state, action) => {
			(state.report.loading = false),
				(state.report.error = true),
				(state.report = action.payload);
		},
		[USER_DETAILS.fulfilled]: (state, action) => {
			(state.user_details.loading = false),
				(state.user_details.error = false),
				(state.user_details = action.payload);
		},
		[USER_DETAILS.pending]: (state, action) => {
			(state.user_details.loading = true),
				(state.user_details.error = false),
				(state.user_details.loading = true);
		},
		[USER_DETAILS.rejected]: (state, action) => {
			(state.user_details.loading = false),
				(state.user_details.error = true),
				(state.user_details = action.payload);
		},
	},
});

const reportAction = {
	REPORTS,
	USER_DETAILS,
};
export { reportAction };
export default reportSlice.reducer;
