/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const ADMASTERSTATEDROPDOWNS = createAsyncThunk(
	'admasterstatedropdown/admasterstatedropdown',
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



const admasterstatedropdownSlice = createSlice({
	name: 'admasterstatedropdownSlice',
	initialState: {
		admasterstatedropdown: {
			...defaultState.List,  
		},
		
	},
	extraReducers: {
		[ADMASTERSTATEDROPDOWNS.fulfilled]: (state, action) => {
			(state.admasterstatedropdown.loading = false),
				(state.admasterstatedropdown.error = false),
				(state.admasterstatedropdown = action.payload);
		},
		[ADMASTERSTATEDROPDOWNS.pending]: (state, action) => {
			(state.admasterstatedropdown.loading = true),
				(state.admasterstatedropdown.error = false),
				(state.admasterstatedropdown.loading = true);
		},
		[ADMASTERSTATEDROPDOWNS.rejected]: (state, action) => {
			(state.admasterstatedropdown.loading = false),
				(state.admasterstatedropdown.error = true),
				(state.admasterstatedropdown = action.payload);
		},
		
	},
});

const admasterstatedropdownAction = {
	ADMASTERSTATEDROPDOWNS,
	
};
export { admasterstatedropdownAction };
export default admasterstatedropdownSlice.reducer;
