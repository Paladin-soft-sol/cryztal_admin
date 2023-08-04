/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const PARTNER = createAsyncThunk(
	'partner/partner',
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

const PARTNER_CREATE = createAsyncThunk(
	'partner/partnerCreate',
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

const PARTNER_EDIT = createAsyncThunk(
	'partner/partner_edit',
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
				`${payload?.apiName}/${payload?.id}`
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
const PARTNER_DETAILS = createAsyncThunk(
	'partner/partner_details',
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
const PARTNER_IMAGE = createAsyncThunk(
	'partner/partnerimage',
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

const PARTNER_RESET = createAsyncThunk(
	'partner/partner_reset',
	// eslint-disable-next-line default-param-last
	async (
		// eslint-disable-next-line default-param-last
		payload = {},
		{ rejectWithValue }
	) => {
		try {
			return {
				...defaultState.List,
				message: 'RESET',
				data: {},
			};
		} catch (error) {
			return rejectWithValue({
				...defaultReject.List,
				message: error.message,
			});
		}
	}
);

const partnerSlice = createSlice({
	name: 'partnerSlice',
	initialState: {
		partner: {
			...defaultState.List,
		},
		partnerdetails: {
			...defaultState.List,
		},
		partnerCreate: {
			...defaultState.List,
		},
		partner_edit: {
			...defaultState.List,
		},
		partnerimage: {
			...defaultState.List,
		},
	},
	extraReducers: {
		[PARTNER.fulfilled]: (state, action) => {
			(state.partner.loading = false),
				(state.partner.error = false),
				(state.partner = action.payload);
		},
		[PARTNER.pending]: (state, action) => {
			(state.partner.loading = true),
				(state.partner.error = false),
				(state.partner.loading = true);
		},
		[PARTNER.rejected]: (state, action) => {
			(state.partner.loading = false),
				(state.partner.error = true),
				(state.partner = action.payload);
		},
		[PARTNER_DETAILS.fulfilled]: (state, action) => {
			(state.partnerdetails.loading = false),
				(state.partnerdetails.error = false),
				(state.partnerdetails = action.payload);
		},
		[PARTNER_DETAILS.pending]: (state, action) => {
			(state.partnerdetails.loading = true),
				(state.partnerdetails.error = false),
				(state.partnerdetails.loading = true);
		},
		[PARTNER_DETAILS.rejected]: (state, action) => {
			(state.partnerdetails.loading = false),
				(state.partnerdetails.error = true),
				(state.partnerdetails = action.payload);
		},
		[PARTNER_CREATE.fulfilled]: (state, action) => {
			(state.partnerCreate.loading = false),
				(state.partnerCreate.error = false),
				(state.partnerCreate = action.payload);
		},
		[PARTNER_CREATE.pending]: (state, action) => {
			(state.partnerCreate.loading = true),
				(state.partnerCreate.error = false),
				(state.partnerCreate.loading = true);
		},
		[PARTNER_CREATE.rejected]: (state, action) => {
			(state.partnerCreate.loading = false),
				(state.partnerCreate.error = true),
				(state.partnerCreate = action.payload);
		},
		[PARTNER_EDIT.fulfilled]: (state, action) => {
			(state.partnerCreate.loading = false),
				(state.partnerCreate.error = false),
				(state.partnerCreate = action.payload);
		},
		[PARTNER_EDIT.pending]: (state, action) => {
			(state.partnerCreate.loading = true),
				(state.partnerCreate.error = false),
				(state.partnerCreate.loading = true);
		},
		[PARTNER_EDIT.rejected]: (state, action) => {
			(state.partnerCreate.loading = false),
				(state.partnerCreate.error = true),
				(state.partnerCreate = action.payload);
		},
		[PARTNER_RESET.fulfilled]: (state, action) => {
			(state.partnerdetails.loading = false),
				(state.partnerdetails.error = false),
				(state.partnerdetails = {});
		},
		[PARTNER_RESET.pending]: (state, action) => {
			(state.partnerdetails.loading = true),
				(state.partnerdetails.error = false),
				(state.partnerdetails.loading = true);
		},
		[PARTNER_RESET.rejected]: (state, action) => {
			(state.partnerdetails.loading = false),
				(state.partnerdetails.error = true),
				(state.partnerdetails = {});
		},

		[PARTNER_IMAGE.fulfilled]: (state, action) => {
			(state.partnerimage.loading = false),
				(state.partnerimage.error = false),
				(state.partnerimage = action.payload);
		},
		[PARTNER_IMAGE.pending]: (state, action) => {
			(state.partnerimage.loading = true),
				(state.partnerimage.error = false),
				(state.partnerimage.loading = true);
		},
		[PARTNER_IMAGE.rejected]: (state, action) => {
			(state.partnerimage.loading = false),
				(state.partnerimage.error = true),
				(state.partnerimage = action.payload);
		},
	},
});

const partnerAction = {
	PARTNER,
	PARTNER_DETAILS,
	PARTNER_CREATE,
	PARTNER_EDIT,
	PARTNER_RESET,
	PARTNER_IMAGE,
};
export { partnerAction };
export default partnerSlice.reducer;
