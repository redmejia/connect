import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCalls } from "../calls/api";

export const newSignin = createAsyncThunk(
	'business/signin',
	async (auth) => {
		const resp = await ApiCalls.businessSigin(auth)
		return resp
	}
)

const signinSlice = createSlice({
	name: 'business',
	initialState: {
		signin: {
			success: {
				business_id: 0,
				is_auth: false,
				token: ""
			},
			error : {}
		},
		pending : true
	},
	reducers: {},

	extraReducers: {
		[newSignin.pending] : (state) => {
			state.pending = true
		},
		[newSignin.fulfilled]: (state, action) => {
			state.signin = action.payload
			state.pending = false
		}
	}
})

export default signinSlice.reducer;