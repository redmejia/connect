import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCalls } from "../calls/api";

export const newSignin = createAsyncThunk(
	'business/signin',
	async (auth) => {
		const resp = await ApiCalls.businessSigin(auth)
		return resp
	}
)

export const newAccount = createAsyncThunk(
	'business/register',
	async (data) => {
		const resp = await ApiCalls.createAccount(data)
		return resp
	}
)

const authSlice = createSlice({
	name: 'business',
	initialState: {
		signin: {
			success: {
				business_id: 0,
				is_auth: false,
				token: ""
			},
			error: {
				error: false,
				msg: ""
			}
		},
		register: {
			success: {
				business_id: 0,
				is_auth: false,
				token: ""
			},
			error: {
				error: false,
				msg: ""
			}
		},
		pending: true
	},
	reducers: {},

	extraReducers: {
		// signin
		[newSignin.pending]: (state) => {
			state.pending = true
		},
		[newSignin.fulfilled]: (state, action) => {
			state.signin = action.payload
			state.pending = false
		},
		// register
		[newAccount.pending]: (state) => {
			state.pending = true
		},
		[newAccount.fulfilled]: (state, action) => {
			state.register = action.payload
			state.pending = false
		}
	}
})

export default authSlice.reducer;