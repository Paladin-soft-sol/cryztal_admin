/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const ADMASTERNATIONDROPDOWNS = createAsyncThunk(
	'admasternationdropdown/admasternationdropdown',
	// eslint-disable-next-line default-param-last
	async (
		// eslint-disable-next-line default-param-last
		payload = {},
		{ rejectWithValue }
	) => {
		try {
			console.log(payload,"payloadnation")
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



const admasternationdropdownSlice = createSlice({
	name: 'admasternationdropdownSlice',
	initialState: {
		admasternationdropdown: {
			...defaultState.List,  
		},
		
	},
	extraReducers: {
		[ADMASTERNATIONDROPDOWNS.fulfilled]: (state, action) => {
			(state.admasternationdropdown.loading = false),
				(state.admasternationdropdown.error = false),
				(state.admasternationdropdown = action.payload);
		},
		[ADMASTERNATIONDROPDOWNS.pending]: (state, action) => {
			(state.admasternationdropdown.loading = true),
				(state.admasternationdropdown.error = false),
				(state.admasternationdropdown.loading = true);
		},
		[ADMASTERNATIONDROPDOWNS.rejected]: (state, action) => {
			(state.admasternationdropdown.loading = false),
				(state.admasternationdropdown.error = true),
				(state.admasternationdropdown = action.payload);
		},
		
	},
});

const admasternationdropdownAction = {
	ADMASTERNATIONDROPDOWNS,
	
};
export { admasternationdropdownAction };
export default admasternationdropdownSlice.reducer;
