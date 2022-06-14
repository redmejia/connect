import CreateDeal from "./CreateDeal";
import NaviBar from "./NavBar";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { deleteMyDealOrOffer, getMyBusinessInfo, updateMyProfile } from "../Redux/business";
import { useNavigate } from "react-router-dom";
import UpdateDeal from "./UpdateDeal";
import { Form, FormGroup, Col, Input } from 'reactstrap';


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
		localStorage.removeItem("business_id") // not need
		localStorage.removeItem("is_auth")
		localStorage.removeItem("business_name") // not need
		localStorage.removeItem("business_type") // not need
		navigate("/", { replace: true })
	}

	let navigate = useNavigate()
	let dispatch = useDispatch()

	useEffect(() => {
		// dispatch(getMyDealsById(localStorage.getItem('business_id')))
		dispatch(getMyBusinessInfo(localStorage.getItem('business_id')))
	}, [dispatch])

	const { myBusiness, error } = useSelector(state => state.business || [])
	if (error.error) {
		localStorage.removeItem('token')
		localStorage.removeItem("business_id")
		localStorage.removeItem("is_auth")
		localStorage.removeItem("business_name")
		localStorage.removeItem("business_type")
		navigate("/", { replace: true })
	}
	const dealsData = myBusiness.my_deals.map(deal => (<RenderDeals deal={deal} />))

	const [profile, setProfile] = useState({})

	const submitUpdate = () => {
		const data = { ...profile, ...{ business_id: myBusiness.my_business.business_id, } }
		dispatch(updateMyProfile(data))
		setProfile({})
	}


	return (
		<>
			<NaviBar />
			<div className="container mt-5">

				<div className="row pt-2">
					<div className="col">
						<div style={{ float: 'right' }} className="dropdown">
							<button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								{myBusiness.my_business.business_name}
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
						<h1>Who we are</h1>
						<div className="card w-75">
							<div className="card-body">
								<h5 className="card-title">Business Name : {myBusiness.my_business.business_name}</h5>
								<p className="card-text">Business Type : {myBusiness.my_business.business_type}</p>
								<p className="card-text">Business email : {myBusiness.my_business.email}</p>
								<p className="card-text">Since : {myBusiness.my_business.founded}</p>
								<div class="dropdown">
									<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										Dropdown
									</button>
									<ul class="dropdown-menu">
										<div className="row">

											<div className="col p-4">

												<p>
													Enter one or mere changes in the form.
												</p>
												<Form>
													<FormGroup row>
														<Col sm={20}>
															<Input type="text" onChange={e => setProfile({ ...profile, [e.target.name]: e.target.value })} name="business_name" placeholder="business name" />
														</Col>
													</FormGroup>
													<FormGroup>
														<Col sm={20}>
															<Input type="text" onChange={e => setProfile({ ...profile, [e.target.name]: e.target.value })} name="business_type" placeholder="business type" />
														</Col>
													</FormGroup>
													<FormGroup>
														<Col sm={20}>
															<Input type="text" onChange={e => setProfile({ ...profile, [e.target.name]: e.target.value })} name="email" placeholder="email" />
														</Col>
													</FormGroup>
													<FormGroup row>
														<Col sm={20}>
															<Input type="text" onChange={e => setProfile({ ...profile, [e.target.name]: +e.target.value })} name="founded" placeholder="founded" />
														</Col>
													</FormGroup>
													<FormGroup row>
														{/* <Col sm={20}>
								<Input type="tel" name="phone" placeholder="phone" />
							</Col> */}
													</FormGroup>
												</Form>
												<div style={{ float: 'right' }} className="btn-group" role="group" aria-label="Basic example">
													<button type="button" onClick={() => submitUpdate()} className="btn btn-success">Update</button>
													<button type="button" onClick={() => setProfile({})} className="btn btn-danger">Cancel</button>
												</div>
											</div>
										</div>
									</ul>
								</div>
							</div>
						</div>


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