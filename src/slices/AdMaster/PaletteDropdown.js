/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultReject, defaultState } from '../../constants';
import { fetchData } from '../../helpers';

const PALETTEDROPDOWNS = createAsyncThunk(  
	'palettedropdown/palettedropdown',
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



const palettedropdownSlice = createSlice({
	name: 'palettedropdownSlice',
	initialState: {
		palettedropdown: {
			...defaultState.List,  
		},
		
	},
	extraReducers: {
		[PALETTEDROPDOWNS.fulfilled]: (state, action) => {
			(state.palettedropdown.loading = false),
				(state.palettedropdown.error = false),
				(state.palettedropdown = action.payload);
		},
		[PALETTEDROPDOWNS.pending]: (state, action) => {
			(state.palettedropdown.loading = true),
				(state.palettedropdown.error = false),
				(state.palettedropdown.loading = true);
		},
		[PALETTEDROPDOWNS.rejected]: (state, action) => {
			(state.palettedropdown.loading = false),
				(state.palettedropdown.error = true),
				(state.palettedropdown = action.payload);
		},
		
	},
});

const palettedropdownAction = {
	PALETTEDROPDOWNS,
	
};
export { palettedropdownAction };
export default palettedropdownSlice.reducer;
