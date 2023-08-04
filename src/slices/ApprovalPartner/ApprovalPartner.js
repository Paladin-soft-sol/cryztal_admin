/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const APPROVALPARTNER = createAsyncThunk(
	'approvalpartner/approvalpartner',
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

const APPROVALPARTNER_DETAILS = createAsyncThunk(
	'approval/approval_details',
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

const APPROVALPARTNER_STATUS = createAsyncThunk(
	'approval/approval_status',
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

const APPROVALPARTNER_UPDATED_STATUS = createAsyncThunk(
	'approval/updated_status',
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

const approvalpartnerSlice = createSlice({
	name: 'approvalpartnerSlice',
	initialState: {
		approvalpartner: {
			...defaultState.List,
		},
		approvalpartner_details: {
			...defaultState.List,
		},
		approvalpartner_status: {
			...defaultState.List,
		},
		partnerupdated_status: {
			...defaultState.List,
		},
	},
	extraReducers: {
		[APPROVALPARTNER.fulfilled]: (state, action) => {
			(state.approvalpartner.loading = false),
				(state.approvalpartner.error = false),
				(state.approvalpartner = action.payload);
		},
		[APPROVALPARTNER.pending]: (state, action) => {
			(state.approvalpartner.loading = true),
				(state.approvalpartner.error = false),
				(state.approvalpartner.loading = true);
		},
		[APPROVALPARTNER.rejected]: (state, action) => {
			(state.approvalpartner.loading = false),
				(state.approvalpartner.error = true),
				(state.approvalpartner = action.payload);
		},

		[APPROVALPARTNER_DETAILS.fulfilled]: (state, action) => {
			(state.approvalpartner_details.loading = false),
				(state.approvalpartner_details.error = false),
				(state.approvalpartner_details = action.payload);
		},
		[APPROVALPARTNER_DETAILS.pending]: (state, action) => {
			(state.approvalpartner_details.loading = true),
				(state.approvalpartner_details.error = false),
				(state.approvalpartner_details.loading = true);
		},
		[APPROVALPARTNER_DETAILS.rejected]: (state, action) => {
			(state.approvalpartner_details.loading = false),
				(state.approvalpartner_details.error = true),
				(state.approvalpartner_details = action.payload);
		},

		[APPROVALPARTNER_STATUS.fulfilled]: (state, action) => {
			(state.approvalpartner_status.loading = false),
				(state.approvalpartner_status.error = false),
				(state.approvalpartner_status = action.payload);
		},
		[APPROVALPARTNER_STATUS.pending]: (state, action) => {
			(state.approvalpartner_status.loading = true),
				(state.approvalpartner_status.error = false),
				(state.approvalpartner_status.loading = true);
		},
		[APPROVALPARTNER_STATUS.rejected]: (state, action) => {
			(state.approvalpartner_status.loading = false),
				(state.approvalpartner_status.error = true),
				(state.approvalpartner_status = action.payload);
		},

		[APPROVALPARTNER_UPDATED_STATUS.fulfilled]: (state, action) => {
			(state.partnerupdated_status.loading = false),
				(state.partnerupdated_status.error = false),
				(state.partnerupdated_status = action.payload);
		},
		[APPROVALPARTNER_UPDATED_STATUS.pending]: (state, action) => {
			(state.partnerupdated_status.loading = true),
				(state.partnerupdated_status.error = false),
				(state.partnerupdated_status.loading = true);
		},
		[APPROVALPARTNER_UPDATED_STATUS.rejected]: (state, action) => {
			(state.partnerupdated_status.loading = false),
				(state.partnerupdated_status.error = true),
				(state.partnerupdated_status = action.payload);
		},
	},
});

const approvalpartnerAction = {
	APPROVALPARTNER,
	APPROVALPARTNER_DETAILS,
	APPROVALPARTNER_STATUS,
	APPROVALPARTNER_UPDATED_STATUS,
};
export { approvalpartnerAction };
export default approvalpartnerSlice.reducer;
