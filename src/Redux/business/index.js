import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCalls } from "../calls/api";


export const getDealsByType = createAsyncThunk(
	'business/fetchDealsByType',
	async (businessType) => {
		const resp = await ApiCalls.fetchDealsByType(businessType)
		return resp
	}
)

const businessSlice = createSlice({
	name: 'business',
	initialState: {
		deals: [],
		pending: true
	},
	reducers: {},

	extraReducers: {
		[getDealsByType.pending]: (state) => {
			state.pending = true
		},
		[getDealsByType.fulfilled]: (state, action) => {
			state.deals = action.payload.deals
			state.pending = false
		}
	}
});

export default businessSlice.reducer;