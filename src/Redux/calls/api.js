
export const BASE = 'http://127.0.0.1:8080/api/'

export const ApiCalls = {

	// bussiness owner signin/login
	async businessSigin(authentication) {
		const resp = await fetch(BASE + "login", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authentication)
		})

		return resp.json()
	},

	async createAccount(newBusiness) {
		const resp = await fetch(BASE + "create/account", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newBusiness)
		})
		return resp.json()
	},

	async createNewDeal(newDeal) {
		const resp = await fetch(BASE + "my/business", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem('token')
			},
			credentials: 'include',
			body: JSON.stringify(newDeal)
		})

		return resp.json()
	},

	async fetchDealsByType(businessType) {
		const resp = await fetch(BASE + "my/business/deals?type=" + businessType, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem('token')
			},
			credentials: 'include',
		})

		return resp.json()

	},
	// business information include deals
	async fetchMyBusinessInfo(businessId) {
		const resp = await fetch(BASE + "my/business?bus-id=" + businessId, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem('token')
			},
			credentials: 'include',
		})

		return resp.json()
	},
	async fetchMyDealsById(businessId) {
		const resp = await fetch(BASE + "my/business/my/deals?bus-id=" + businessId, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem('token')
			},
			credentials: 'include',
		})

		return resp.json()
	},

	async deleteMyDealOrOffer(deal) {
		const resp = await fetch(`${BASE}my/business/del/deal?deal-id=${deal.deal_id}&bus-id=${deal.business_id}`, {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem('token')
			},
			credentials: 'include',
		})

		return resp.json()
	}
}