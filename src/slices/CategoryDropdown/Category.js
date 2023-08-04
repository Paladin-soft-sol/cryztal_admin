/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const GET_CATEGORY = createAsyncThunk(
	'category/getCategoryDropdown',
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

const GET_SUB_CATEGORY = createAsyncThunk(
	'category/getsubCategoryDropdown',
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
const GET_STATE = createAsyncThunk(
	'category/getReportDropdownState',
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

const GET_SUBURB = createAsyncThunk(
	'category/getReportDropdownSuburb',
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

const GET_ZIPCODE = createAsyncThunk(
	'category/getReportDropdownPostCode',
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

const GET_USER_STATE = createAsyncThunk(
	'category/getReportDropdownUserState',
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

const GET_USER_SUBURB = createAsyncThunk(
	'category/getReportDropdownUserSuburb',
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
const GET_USER_ZIPCODE = createAsyncThunk(
	'category/getReportDropdownUserPostCode',
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
const getCategorySlice = createSlice({
	name: 'getCategorySlice',
	initialState: {
		getCategoryDropdown: {
			...defaultState.List,
		},
		getSubCategoryDropdown: {
			...defaultState.List,
		},
		getReportDropdownState: {
			...defaultState.List,
		},

		getReportDropdownSuburb: {
			...defaultState.List,
		},
		getReportDropdownPostCode: {
			...defaultState.List,
		},
		getReportDropdownUserState: {
			...defaultState.List,
		},
		getReportDropdownUserSuburb: {
			...defaultState.List,
		},
		getReportDropdownUserPostCode: {
			...defaultState.List,
		},
	},
	extraReducers: {
		[GET_CATEGORY.fulfilled]: (state, action) => {
			(state.getCategoryDropdown.loading = false),
				(state.getCategoryDropdown.error = false),
				(state.getCategoryDropdown = action.payload);
		},
		[GET_CATEGORY.pending]: (state, action) => {
			(state.getCategoryDropdown.loading = true),
				(state.getCategoryDropdown.error = false),
				(state.getCategoryDropdown.loading = true);
		},
		[GET_CATEGORY.rejected]: (state, action) => {
			(state.getCategoryDropdown.loading = false),
				(state.getCategoryDropdown.error = true),
				(state.getCategoryDropdown = action.payload);
		},
		[GET_SUB_CATEGORY.fulfilled]: (state, action) => {
			(state.getSubCategoryDropdown.loading = false),
				(state.getSubCategoryDropdown.error = false),
				(state.getSubCategoryDropdown = action.payload);
		},
		[GET_SUB_CATEGORY.pending]: (state, action) => {
			(state.getSubCategoryDropdown.loading = true),
				(state.getSubCategoryDropdown.error = false),
				(state.getSubCategoryDropdown.loading = true);
		},
		[GET_SUB_CATEGORY.rejected]: (state, action) => {
			(state.getSubCategoryDropdown.loading = false),
				(state.getSubCategoryDropdown.error = true),
				(state.getSubCategoryDropdown = action.payload);
		},
		[GET_STATE.fulfilled]: (state, action) => {
			(state.getReportDropdownState.loading = false),
				(state.getReportDropdownState.error = false),
				(state.getReportDropdownState = action.payload);
		},
		[GET_STATE.pending]: (state, action) => {
			(state.getReportDropdownState.loading = true),
				(state.getReportDropdownState.error = false),
				(state.getReportDropdownState.loading = true);
		},
		[GET_STATE.rejected]: (state, action) => {
			(state.getReportDropdownState.loading = false),
				(state.getReportDropdownState.error = true),
				(state.getReportDropdownState = action.payload);
		},
		[GET_USER_STATE.fulfilled]: (state, action) => {
			(state.getReportDropdownUserState.loading = false),
				(state.getReportDropdownUserState.error = false),
				(state.getReportDropdownUserState = action.payload);
		},
		[GET_USER_STATE.pending]: (state, action) => {
			(state.getReportDropdownUserState.loading = true),
				(state.getReportDropdownUserState.error = false),
				(state.getReportDropdownUserState.loading = true);
		},
		[GET_USER_STATE.rejected]: (state, action) => {
			(state.getReportDropdownUserState.loading = false),
				(state.getReportDropdownUserState.error = true),
				(state.getReportDropdownUserState = action.payload);
		},
		[GET_SUBURB.fulfilled]: (state, action) => {
			(state.getReportDropdownSuburb.loading = false),
				(state.getReportDropdownSuburb.error = false),
				(state.getReportDropdownSuburb = action.payload);
		},
		[GET_SUBURB.pending]: (state, action) => {
			(state.getReportDropdownSuburb.loading = true),
				(state.getReportDropdownSuburb.error = false),
				(state.getReportDropdownSuburb.loading = true);
		},
		[GET_SUBURB.rejected]: (state, action) => {
			(state.getReportDropdownSuburb.loading = false),
				(state.getReportDropdownSuburb.error = true),
				(state.getReportDropdownSuburb = action.payload);
		},
		[GET_USER_SUBURB.fulfilled]: (state, action) => {
			(state.getReportDropdownUserSuburb.loading = false),
				(state.getReportDropdownUserSuburb.error = false),
				(state.getReportDropdownUserSuburb = action.payload);
		},
		[GET_USER_SUBURB.pending]: (state, action) => {
			(state.getReportDropdownUserSuburb.loading = true),
				(state.getReportDropdownUserSuburb.error = false),
				(state.getReportDropdownUserSuburb.loading = true);
		},
		[GET_USER_SUBURB.rejected]: (state, action) => {
			(state.getReportDropdownUserSuburb.loading = false),
				(state.getReportDropdownUserSuburb.error = true),
				(state.getReportDropdownUserSuburb = action.payload);
		},
		[GET_ZIPCODE.fulfilled]: (state, action) => {
			(state.getReportDropdownPostCode.loading = false),
				(state.getReportDropdownPostCode.error = false),
				(state.getReportDropdownPostCode = action.payload);
		},
		[GET_ZIPCODE.pending]: (state, action) => {
			(state.getReportDropdownPostCode.loading = true),
				(state.getReportDropdownPostCode.error = false),
				(state.getReportDropdownPostCode.loading = true);
		},
		[GET_ZIPCODE.rejected]: (state, action) => {
			(state.getReportDropdownPostCode.loading = false),
				(state.getReportDropdownPostCode.error = true),
				(state.getReportDropdownPostCode = action.payload);
		},
		[GET_USER_ZIPCODE.fulfilled]: (state, action) => {
			(state.getReportDropdownUserPostCode.loading = false),
				(state.getReportDropdownUserPostCode.error = false),
				(state.getReportDropdownUserPostCode = action.payload);
		},
		[GET_USER_ZIPCODE.pending]: (state, action) => {
			(state.getReportDropdownUserPostCode.loading = true),
				(state.getReportDropdownUserPostCode.error = false),
				(state.getReportDropdownUserPostCode.loading = true);
		},
		[GET_USER_ZIPCODE.rejected]: (state, action) => {
			(state.getReportDropdownUserPostCode.loading = false),
				(state.getReportDropdownUserPostCode.error = true),
				(state.getReportDropdownUserPostCode = action.payload);
		},
	},
});

const getCategoryAction = {
	GET_CATEGORY,
	GET_ZIPCODE,
	GET_USER_ZIPCODE,
	GET_SUBURB,
	GET_USER_SUBURB,
	GET_STATE,
	GET_USER_STATE,
	GET_SUB_CATEGORY,
};
export { getCategoryAction };
export default getCategorySlice.reducer;
