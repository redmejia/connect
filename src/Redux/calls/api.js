export const BASE = 'http://127.0.0.1:8080/api/'
// test token
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJlbWFpbCI6ImNvbm5lY3RAbWFpbC5jb20iLCJleHAiOjE2NTQzOTk1NDR9.9m5vAvAYB8ffKziXM15U1eTzgZZP8WEcUiz7ZQUFF4c"
export const ApiCalls = {

	async fetchDealsByType(businessType) {
		const resp = await fetch(BASE + "my/business/deals?type=" + businessType, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token
			},
			credentials: 'include',
		})

		return resp.json()

	},
}