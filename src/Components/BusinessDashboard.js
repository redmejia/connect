import CreateDeal from "./CreateDeal";
import NaviBar from "./NavBar";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getMyDealsById } from "../Redux/business";
import { useNavigate } from "react-router-dom";


// render business deals
const RenderDeals = ({ deal }) => {

	return (
		<div className="list-group-item list-group-item-action" key={deal.deal_id} >
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{deal.product_name}</h5>
				<small className="text-muted">{deal.deal_start}</small>
			</div>
			<p className="mb-1">{deal.deal_desciption}</p>
			<small className="text-muted">$ {deal.price}</small> {' '}
			<div style={{ float: 'right' }} className="btn-group" role="group" aria-label="Basic example">
				<button onClick={() => alert("hello")} type="button" className="btn btn-success">update</button>
				<button type="button" className="btn btn-danger">delete</button>
			</div>
		</div>
	)

}


const BusinessDashoard = () => {

	let navigate = useNavigate()

	const business = {
		business_id: localStorage.getItem('business_id'),
		business_name: localStorage.getItem('business_name')
	}

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
		navigate("/", {replace : true})
	}



	const dealsData = myDeals.map(deal => (<RenderDeals deal={deal} />))

	return (
		<>
			<NaviBar />
			<div className="container mt-5 bg-light">

				<div className="row pt-2">
					<div className="col">
						<div style={{ float: 'right' }} className="dropdown">
							<button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								{business.business_name}
							</button>
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
								<li className="dropdown-item" ><CreateDeal business={business} /></li>
								<li><a className="dropdown-item" href="/#">Log out</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<h1 className="text-center">Your Offer/Deals</h1>
					</div>
				</div>

			</div>

			<div className="container mt-5 mb-5">
				<div className="row">
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

export default BusinessDashoard;