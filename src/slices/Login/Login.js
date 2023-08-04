/* eslint-disable no-alert */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const LOGIN_ADMIN = createAsyncThunk(
	'loginAdmin/login_admin',
	// eslint-disable-next-line default-param-last
	async (payload = {}, { rejectWithValue }) => {
		try {
			const data = await fetchData(
				payload?.data,
				payload?.method,
				payload?.apiName
			);

			const { status } = data;
			// if (status === 203) {
			// 	alert(data.data?.Message);
			// }

			return {
				...defaultState.List,
				data: data?.data,
			};
		} catch (error) {
			return rejectWithValue({
				...defaultReject.List,
				message: error.message,
			});
		}
	}
);

const loginSlice = createSlice({
	name: 'loginSlice',
	initialState: {
		login: {
			...defaultState.List,
		},
	},
	reducers: {
		logout: () => defaultState.List,
	},
	extraReducers: {
		[LOGIN_ADMIN.fulfilled]: (state, action) => {
			(state.login.loading = false),
				(state.login.error = false),
				(state.login = action.payload);
		},
		[LOGIN_ADMIN.pending]: (state, action) => {
			(state.login.loading = true),
				(state.login.error = false),
				(state.login.loading = true);
		},
		[LOGIN_ADMIN.rejected]: (state, action) => {
			(state.login.loading = false),
				(state.login.error = true),
				(state.login = action.payload);
		},
	},
});

const loginAction = {
	LOGIN_ADMIN,
};
export { loginAction };
export default loginSlice.reducer;
