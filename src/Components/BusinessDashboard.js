import CreateDeal from "./CreateDeal";
import NaviBar from "./NavBar";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getMyDealsById, deleteMyDealOrOffer } from "../Redux/business";
import { useNavigate } from "react-router-dom";
import UpdateDeal from "./UpdateDeal";


// render business deals
const RenderDeals = ({ deal }) => {
	let dispatch = useDispatch()

	return (
		<div className="list-group-item list-group-item-action" key={deal.deal_id} >
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{deal.product_name}</h5>
				<small className="text-muted">Created: {deal.deal_start}</small>
			</div>
			<p className="mb-1">{deal.deal_desciption}</p>
			<small className="text-muted">$ {deal.price}</small> {' '}
			<hr></hr>
			<small className="text-muted">By {deal.business_name}</small>
			<div style={{ float: 'right' }} className="btn-group" role="group" aria-label="Basic example">
				<UpdateDeal deal={deal} />
				<button type="button" onClick={() => dispatch(deleteMyDealOrOffer(deal))} className="btn btn-danger">delete</button>
			</div>
		</div>
	)

}


const BusinessDashoard = () => {

	const logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem("business_id")
		localStorage.removeItem("is_auth")
		localStorage.removeItem("business_name")
		localStorage.removeItem("business_type")
		navigate("/", { replace: true })
	}

	let navigate = useNavigate()
	let dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMyDealsById(localStorage.getItem('business_id')))
	}, [dispatch])

	const { myDeals, error } = useSelector(state => state.business || [])
	if (error.error) {
		localStorage.removeItem('token')
		localStorage.removeItem("business_id")
		localStorage.removeItem("is_auth")
		localStorage.removeItem("business_name")
		localStorage.removeItem("business_type")
		navigate("/", { replace: true })
	}



	const dealsData = myDeals.map(deal => (<RenderDeals deal={deal} />))

	return (
		<>
			<NaviBar />
			<div className="container mt-5">

				<div className="row pt-2">
					<div className="col">
						<div style={{ float: 'right' }} className="dropdown">
							<button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								{localStorage.getItem('business_name')}
							</button>
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
								<li className="dropdown-item" ><CreateDeal /></li>
								<li><a onClick={() => logout()} className="dropdown-item" href="/#">Log out</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="container mt-5 mb-5">
				<div className="row">
					<hr />

					<div className="col">
					</div>
					<div className="col">
						<h1>My Deals</h1>
						<div className="list-group">
							{dealsData}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BusinessDashoard;