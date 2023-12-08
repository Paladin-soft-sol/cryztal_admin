/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const ADMASTER = createAsyncThunk(
	'admaster/admaster',
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

const ADMASTER_DETAILS = createAsyncThunk(
	'admaster/admaster_details',
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

const ADMASTEREDIT = createAsyncThunk(
	'admaster/admasterEdit',
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

const ADMASTERUNBLOCK = createAsyncThunk(
	'admaster/admasterEdit',
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

const admasterSlice = createSlice({
	name: 'admasterSlice',
	initialState: {
		admaster: {
			...defaultState.List,
		},
		admaster_details: {
			...defaultState.List,
		},
		admasterEdit: {
			...defaultState.List,
		},
		admasterUnblock: {
			...defaultState.List,
		},
	},
	extraReducers: {
		[ADMASTER.fulfilled]: (state, action) => {
			(state.admaster.loading = false),
				(state.admaster.error = false),
				(state.admaster = action.payload);
		},
		[ADMASTER.pending]: (state, action) => {
			(state.admaster.loading = true),
				(state.admaster.error = false),
				(state.admaster.loading = true);
		},
		[ADMASTER.rejected]: (state, action) => {
			(state.admaster.loading = false),
				(state.admaster.error = true),
				(state.admaster = action.payload);
		},

		[ADMASTER_DETAILS.fulfilled]: (state, action) => {
			(state.admaster_details.loading = false),
				(state.admaster_details.error = false),
				(state.admaster_details = action.payload);
		},
		[ADMASTER_DETAILS.pending]: (state, action) => {
			(state.admaster_details.loading = true),
				(state.admaster_details.error = false),
				(state.admaster_details.loading = true);
		},
		[ADMASTER_DETAILS.rejected]: (state, action) => {
			(state.admaster_details.loading = false),
				(state.admaster_details.error = true),
				(state.admaster_details = action.payload);
		},

		[ADMASTEREDIT.fulfilled]: (state, action) => {
			(state.admasterEdit.loading = false),
				(state.admasterEdit.error = false),
				(state.admasterEdit = action.payload);
		},
		[ADMASTEREDIT.pending]: (state, action) => {
			(state.admasterEdit.loading = true),
				(state.admasterEdit.error = false),
				(state.admasterEdit.loading = true);
		},
		[ADMASTEREDIT.rejected]: (state, action) => {
			(state.admasterEdit.loading = false),
				(state.admasterEdit.error = true),
				(state.admasterEdit = action.payload);
		},
		[ADMASTERUNBLOCK.fulfilled]: (state, action) => {
			(state.admasterUnblock.loading = false),
				(state.admasterUnblock.error = false),
				(state.admasterUnblock = action.payload);
		},
		[ADMASTERUNBLOCK.pending]: (state, action) => {
			(state.admasterUnblock.loading = true),
				(state.admasterUnblock.error = false),
				(state.admasterEdit.loading = true);
		},
		[ADMASTERUNBLOCK.rejected]: (state, action) => {
			(state.admasterUnblock.loading = false),
				(state.admasterUnblock.error = true),
				(state.admasterUnblock = action.payload);
		},
	},
});

const admasterAction = {
	ADMASTER,
	ADMASTER_DETAILS,
	ADMASTEREDIT,
	ADMASTERUNBLOCK,
};
export { admasterAction };
export default admasterSlice.reducer;
