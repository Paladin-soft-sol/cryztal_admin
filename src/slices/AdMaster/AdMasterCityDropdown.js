/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const ADMASTERCITYDROPDOWNS = createAsyncThunk(
	'admastercitydropdown/admastercitydropdown',
	// eslint-disable-next-line default-param-last
	async (
		// eslint-disable-next-line default-param-last
		payload = {},
		{ rejectWithValue }
	) => {
		try {
			console.log(payload,"payloadstate")
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



const admastercitydropdownSlice = createSlice({
	name: 'admastercitydropdownSlice',
	initialState: {
		admastercitydropdown: {
			...defaultState.List,  
		},
		
	},
	extraReducers: {
		[ADMASTERCITYDROPDOWNS.fulfilled]: (state, action) => {
			(state.admastercitydropdown.loading = false),
				(state.admastercitydropdown.error = false),
				(state.admastercitydropdown = action.payload);
		},
		[ADMASTERCITYDROPDOWNS.pending]: (state, action) => {
			(state.admastercitydropdown.loading = true),
				(state.admastercitydropdown.error = false),
				(state.admastercitydropdown.loading = true);
		},
		[ADMASTERCITYDROPDOWNS.rejected]: (state, action) => {
			(state.admastercitydropdown.loading = false),
				(state.admastercitydropdown.error = true),
				(state.admastercitydropdown = action.payload);
		},
		
	},
});

const admastercitydropdownAction = {
	ADMASTERCITYDROPDOWNS,
	
};
export { admastercitydropdownAction };
export default admastercitydropdownSlice.reducer;
