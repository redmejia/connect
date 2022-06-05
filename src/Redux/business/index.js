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
		error: {
			error : false,
			msg : ''
		},
		pending: true
	},
	reducers: {},

	extraReducers: {
		[getDealsByType.pending]: (state) => {
			state.pending = true
		},
	
		[getDealsByType.fulfilled]: (state, action) => {
			if(action.payload.error){
				state.error = action.payload
				state.pending = true
			}else{
				state.deals = action.payload.deals
				state.pending = false
			}
		}
	}
});

export default businessSlice.reducer;