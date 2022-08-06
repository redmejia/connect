import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getDealsByType } from "../Redux/business";
import { useNavigate } from "react-router-dom";
import NaviBar from "./NavBar";
import RenderDeals from "./Render";
// import Loading from "./Loading";

const DealType = () => {

	let { type } = useParams()
	const dispatch = useDispatch()

	let navigate = useNavigate()


	useEffect(() => {
		dispatch(getDealsByType(type))
	}, [dispatch, type])

	const { deals, error } = useSelector(state => state.business || {})
	if (error.error) {
		localStorage.removeItem('token')
		localStorage.removeItem("business_id")
		localStorage.removeItem("is_auth")
		localStorage.removeItem("business_name")
		navigate('/', { replace: true })
	}
	// if (pending) {
	// 	return <Loading  />
	// }


	const dealsData = deals.map(deal => (<RenderDeals
		deal={deal}
		btnEnable={false}
	/>))

	return (
		<>
			<NaviBar />

			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="text-center">
						<h1>Let's Connect</h1>
						<h3>Find your deal connect directly with a business</h3>
					</div>
					<div className="col">
						<hr />
						<div className="list-group">
							{dealsData}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DealType;