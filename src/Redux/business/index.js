import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCalls, BASE } from "../calls/api";

export const getMyBusinessInfo = createAsyncThunk(
	'business/my/business',
	async (businessId) => {
		const resp = await ApiCalls.fetchMyBusinessInfo(businessId)

		return resp
	}
)

export const getDealsByType = createAsyncThunk(
	'business/fetchDealsByType',
	async (businessType) => {
		const resp = await ApiCalls.fetchDealsByType(businessType)
		return resp
	}
)

export const getMyDealsById = createAsyncThunk(
	'business/fetchMyDealsByID',
	async (businessId) => {
		const resp = await ApiCalls.fetchMyDealsById(businessId)
		return resp
	}
)

export const createNewDealOffer = createAsyncThunk(
	'business/new/deal',
	async (deal) => {
		const resp = await ApiCalls.createNewDeal(deal)
		return resp
	}
)


const businessSlice = createSlice({
	name: 'business',
	initialState: {
		deals: [],
		myBusiness: {
			my_business: {},
			my_deals: [],
		},
		myDeals: [],
		error: {
			error: false,
			msg: ''
		},
		pending: true
	},
	reducers: {
		deleteDealOrOffer: (state, action) => {
			state.myBusiness.my_deals = state.myBusiness.my_deals.filter((deal) => deal.deal_id !== action.payload.deal_id)
		},
		updateDeal: (state, action) => {
			state.myBusiness.my_deals = state.myBusiness.my_deals.map((deal) => {
				if (deal.deal_id === action.payload.deal_id) {
					return action.payload
				}

				return deal
			})
		},
		updateBusinessProfile: (state, action) => {
			state.myBusiness.my_business = { ...state.myBusiness.my_business, ...action.payload }
		}
	},

	extraReducers: {


		// Deals by type
		[getDealsByType.pending]: (state) => {
			state.pending = true
		},

		[getDealsByType.fulfilled]: (state, action) => {
			if (action.payload.error) {
				state.error = action.payload
				state.pending = true
			} else {
				state.deals = action.payload.deals
				state.pending = false
			}
		},
		//my business
		[getMyBusinessInfo.pending]: (state) => {
			state.pending = true
		},
		[getMyBusinessInfo.fulfilled]: (state, action) => {
			if (action.payload.error) {
				state.error = action.payload
				state.pending = true
			} else {

				state.myBusiness = action.payload.myBusiness
				state.pending = false
			}
		},

		// Business deals for business dashboard
		[createNewDealOffer.pending]: (state) => {
			state.pending = true
		},
		[createNewDealOffer.fulfilled]: (state, action) => {
			state.myBusiness.my_deals.push(action.payload.myDeal)
		},




		// getMyDealById only deal for espesific business
		[getMyDealsById.pending]: (state) => {
			state.pending = true
		},
		[getMyDealsById.fulfilled]: (state, action) => {
			if (action.payload.error) {
				state.error = action.payload
				state.pending = true
			} else {
				state.myDeals = action.payload.myDeals
				state.pending = false
			}
		},

	}
});

export default businessSlice.reducer;

const { deleteDealOrOffer, updateDeal, updateBusinessProfile } = businessSlice.actions;


export const deleteMyDealOrOffer = (deal) => (dispatch) => {
	dispatch(deleteDealOrOffer(deal))
	return fetch(`${BASE}my/business/del/deal?deal-id=${deal.deal_id}&bus-id=${deal.business_id}`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + localStorage.getItem('token')
		},
		credentials: 'include',
	})
}

// Deal or offer update
export const updateDealOrOffer = (deal) => (dispatch) => {
	dispatch(updateDeal(deal))
	return fetch(`${BASE}my/business/my/deals?bus-id=${deal.deal_id}`, {
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + localStorage.getItem('token')
		},
		credentials: 'include',
		body: JSON.stringify(deal)
	})
}

// business profile update only business information
export const updateMyProfile = (profile) => (dispatch) => {
	dispatch(updateBusinessProfile(profile))
	return fetch(`${BASE}my/business`, {
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + localStorage.getItem('token')
		},
		credentials: 'include',
		body: JSON.stringify(profile)
	})
}