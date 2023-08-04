/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const APPROVAL = createAsyncThunk(
	'approval/approval',
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

const APPROVAL_DETAILS = createAsyncThunk(
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
const APPROVAL_EDIT = createAsyncThunk(
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

const APPROVAL_STATUS = createAsyncThunk(
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

const UPDATED_STATUS = createAsyncThunk(
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

const approvalSlice = createSlice({
	name: 'approvalSlice',
	initialState: {
		approval: {
			...defaultState.List,
		},
		approval_edit: {
			...defaultState.List,
		},
		approval_details: {
			...defaultState.List,
		},
		approval_status: {
			...defaultState.List,
		},
		updated_status: {
			...defaultState.List,
		},
	},
	extraReducers: {
		[APPROVAL.fulfilled]: (state, action) => {
			(state.approval.loading = false),
				(state.approval.error = false),
				(state.approval = action.payload);
		},
		[APPROVAL.pending]: (state, action) => {
			(state.approval.loading = true),
				(state.approval.error = false),
				(state.approval.loading = true);
		},
		[APPROVAL.rejected]: (state, action) => {
			(state.approval.loading = false),
				(state.approval.error = true),
				(state.approval = action.payload);
		},
		[APPROVAL_EDIT.fulfilled]: (state, action) => {
			(state.approval_edit.loading = false),
				(state.approval_edit.error = false),
				(state.approval_edit = action.payload);
		},
		[APPROVAL_EDIT.pending]: (state, action) => {
			(state.approval_edit.loading = true),
				(state.approval_edit.error = false),
				(state.approval_edit.loading = true);
		},
		[APPROVAL_EDIT.rejected]: (state, action) => {
			(state.approval_edit.loading = false),
				(state.approval_edit.error = true),
				(state.approval_edit = action.payload);
		},

		[APPROVAL_DETAILS.fulfilled]: (state, action) => {
			(state.approval_details.loading = false),
				(state.approval_details.error = false),
				(state.approval_details = action.payload);
		},
		[APPROVAL_DETAILS.pending]: (state, action) => {
			(state.approval_details.loading = true),
				(state.approval_details.error = false),
				(state.approval_details.loading = true);
		},
		[APPROVAL_DETAILS.rejected]: (state, action) => {
			(state.approval_details.loading = false),
				(state.approval_details.error = true),
				(state.approval_details = action.payload);
		},

		[APPROVAL_STATUS.fulfilled]: (state, action) => {
			(state.approval_details.loading = false),
				(state.approval_details.error = false),
				(state.approval_details = action.payload);
		},
		[APPROVAL_STATUS.pending]: (state, action) => {
			(state.approval_details.loading = true),
				(state.approval_details.error = false),
				(state.approval_details.loading = true);
		},
		[APPROVAL_STATUS.rejected]: (state, action) => {
			(state.approval_details.loading = false),
				(state.approval_details.error = true),
				(state.approval_details = action.payload);
		},

		[UPDATED_STATUS.fulfilled]: (state, action) => {
			(state.updated_status.loading = false),
				(state.updated_status.error = false),
				(state.updated_status = action.payload);
		},
		[UPDATED_STATUS.pending]: (state, action) => {
			(state.updated_status.loading = true),
				(state.updated_status.error = false),
				(state.updated_status.loading = true);
		},
		[UPDATED_STATUS.rejected]: (state, action) => {
			(state.updated_status.loading = false),
				(state.updated_status.error = true),
				(state.updated_status = action.payload);
		},
	},
});

const approvalAction = {
	APPROVAL,
	APPROVAL_EDIT,
	APPROVAL_DETAILS,
	APPROVAL_STATUS,
	UPDATED_STATUS,
};
export { approvalAction };
export default approvalSlice.reducer;
