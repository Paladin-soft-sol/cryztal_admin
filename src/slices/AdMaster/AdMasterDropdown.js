/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const ADMASTERDROPDOWNS = createAsyncThunk(
	'admasterdropdown/admasterdropdown',
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



const admasterdropdownSlice = createSlice({
	name: 'admasterdropdownSlice',
	initialState: {
		admasterdropdown: {
			...defaultState.List,  
		},
		
	},
	extraReducers: {
		[ADMASTERDROPDOWNS.fulfilled]: (state, action) => {
			(state.admasterdropdown.loading = false),
				(state.admasterdropdown.error = false),
				(state.admasterdropdown = action.payload);
		},
		[ADMASTERDROPDOWNS.pending]: (state, action) => {
			(state.admasterdropdown.loading = true),
				(state.admasterdropdown.error = false),
				(state.admasterdropdown.loading = true);
		},
		[ADMASTERDROPDOWNS.rejected]: (state, action) => {
			(state.admasterdropdown.loading = false),
				(state.admasterdropdown.error = true),
				(state.admasterdropdown = action.payload);
		},
		
	},
});

const admasterdropdownAction = {
	ADMASTERDROPDOWNS,
	
};
export { admasterdropdownAction };
export default admasterdropdownSlice.reducer;
