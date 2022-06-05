import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getDealsByType } from "../Redux/business";
import NaviBar from "./NavBar";
import Loading from "./Loading";

const RenderDeals = ({ deal }) => {

	return (
		<a href="/#" className="list-group-item disabled list-group-item-action" key={deal.deal_id} >
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{deal.product_name}</h5>
				<small className="text-muted">{deal.deal_start}</small>
			</div>
			<p className="mb-1">{deal.deal_desciption}</p>
			<small className="text-muted">$ {deal.price}</small> {' '}
		</a>
	)

}

const DealType = () => {

	let { type } = useParams()
	const dispatch = useDispatch()


	const { deals, pending } = useSelector(state => state.business || {})

	useEffect(() => {
		dispatch(getDealsByType(type))
	}, [dispatch, type])

	if (pending) {
		return <Loading />

	} 

	const dealsData = deals.map(deal => (<RenderDeals deal={deal} />))


	return (
		<>
			<NaviBar />

			<div className="container mt-5">
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