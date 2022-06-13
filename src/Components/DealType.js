import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getDealsByType } from "../Redux/business";
import { useNavigate } from "react-router-dom";
import NaviBar from "./NavBar";
// import Loading from "./Loading";

const RenderDeals = ({ deal }) => {

	return (
		<div className="list-group-item list-group-item-action" key={deal.deal_id} >
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{deal.product_name}</h5>
				<small className="text-muted">Created: {deal.deal_start}</small>
			</div>
			<p className="mb-1">{deal.deal_desciption}</p>
			<small className="text-muted">$ {deal.price}</small> {' '}
			<hr></hr>
			<small style={{float : 'right'}} className="text-muted">By {deal.business_name}</small>
		</div>
	)

}

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


	const dealsData = deals.map(deal => (<RenderDeals deal={deal} />))

	return (
		<>
			<NaviBar />

			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="text-center">
						<h1>Technologies</h1>
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