/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const CUSTOMER = createAsyncThunk(
	'customer/customer',
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

const CUSTOMER_DETAILS = createAsyncThunk(
	'customer/customer_details',
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

const CUSTOMEREDIT = createAsyncThunk(
	'customer/customerEdit',
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

const CUSTOMERUNBLOCK = createAsyncThunk(
	'customer/customerEdit',
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

const customerSlice = createSlice({
	name: 'customerSlice',
	initialState: {
		customer: {
			...defaultState.List,
		},
		customer_details: {
			...defaultState.List,
		},
		customerEdit: {
			...defaultState.List,
		},
		customerUnblock: {
			...defaultState.List,
		},
	},
	extraReducers: {
		[CUSTOMER.fulfilled]: (state, action) => {
			(state.customer.loading = false),
				(state.customer.error = false),
				(state.customer = action.payload);
		},
		[CUSTOMER.pending]: (state, action) => {
			(state.customer.loading = true),
				(state.customer.error = false),
				(state.customer.loading = true);
		},
		[CUSTOMER.rejected]: (state, action) => {
			(state.customer.loading = false),
				(state.customer.error = true),
				(state.customer = action.payload);
		},

		[CUSTOMER_DETAILS.fulfilled]: (state, action) => {
			(state.customer_details.loading = false),
				(state.customer_details.error = false),
				(state.customer_details = action.payload);
		},
		[CUSTOMER_DETAILS.pending]: (state, action) => {
			(state.customer_details.loading = true),
				(state.customer_details.error = false),
				(state.customer_details.loading = true);
		},
		[CUSTOMER_DETAILS.rejected]: (state, action) => {
			(state.customer_details.loading = false),
				(state.customer_details.error = true),
				(state.customer_details = action.payload);
		},

		[CUSTOMEREDIT.fulfilled]: (state, action) => {
			(state.customerEdit.loading = false),
				(state.customerEdit.error = false),
				(state.customerEdit = action.payload);
		},
		[CUSTOMEREDIT.pending]: (state, action) => {
			(state.customerEdit.loading = true),
				(state.customerEdit.error = false),
				(state.customerEdit.loading = true);
		},
		[CUSTOMEREDIT.rejected]: (state, action) => {
			(state.customerEdit.loading = false),
				(state.customerEdit.error = true),
				(state.customerEdit = action.payload);
		},
		[CUSTOMERUNBLOCK.fulfilled]: (state, action) => {
			(state.customerUnblock.loading = false),
				(state.customerUnblock.error = false),
				(state.customerUnblock = action.payload);
		},
		[CUSTOMERUNBLOCK.pending]: (state, action) => {
			(state.customerUnblock.loading = true),
				(state.customerUnblock.error = false),
				(state.customerEdit.loading = true);
		},
		[CUSTOMERUNBLOCK.rejected]: (state, action) => {
			(state.customerUnblock.loading = false),
				(state.customerUnblock.error = true),
				(state.customerUnblock = action.payload);
		},
	},
});

const customerAction = {
	CUSTOMER,
	CUSTOMER_DETAILS,
	CUSTOMEREDIT,
	CUSTOMERUNBLOCK,
};
export { customerAction };
export default customerSlice.reducer;
