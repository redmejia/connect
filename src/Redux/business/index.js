import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCalls, BASE } from "../calls/api";


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

// export const deleteDealOrOffer = createAsyncThunk(
// 	'business/delete',
// 	async ({ deal }) => {
// 		// console.log("here action ", deal.deal_id, deal.business_id);
// 		const resp = await ApiCalls.deleteMyDealOrOffer({ deal })
// 		return resp
// 	}
// )


const businessSlice = createSlice({
	name: 'business',
	initialState: {
		deals: [],
		error: {
			error: false,
			msg: ''
		},
		myDeals: [],
		pending: true
	},
	reducers: {
		deleteDealOrOffer: (state, action) => {
			state.myDeals = state.myDeals.filter((deal) => deal.deal_id !== action.payload.deal_id)
		},
		updateDeal: (state, action) => {
			state.myDeals = state.myDeals.map((deal) => {
				if (deal.deal_id === action.payload.deal_id) {
					return action.payload
				}

				return deal
			})
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

		// Business deals for business dashboard
		[createNewDealOffer.pending]: (state) => {
			state.pending = true
		},
		[createNewDealOffer.fulfilled]: (state, action) => {
			state.myDeals.push(action.payload.myDeal)
		},

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

const { deleteDealOrOffer, updateDeal } = businessSlice.actions;


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