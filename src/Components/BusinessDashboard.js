import CreateDeal from "./CreateDeal";
import NaviBar from "./NavBar";

const RenderDeals = ({ deal }) => {

	return (
			<a href="/#" className="list-group-item list-group-item-action" key={deal.deal_id} >
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">{deal.product_name}</h5>
					<small className="text-muted">{deal.deal_start}</small>
				</div>
				<p className="mb-1">{deal.deal_desciption}</p>
				<small className="text-muted">$ {deal.price}</small> {' '}
				<div style={{ float: 'right' }} className="btn-group" role="group" aria-label="Basic example">
					<button type="button" className="btn btn-success">update</button>
					<button type="button" className="btn btn-danger">delete</button>
				</div>
			</a>
	)

}


const BusinessDashoard = ({deals}) => {

	const dealsData = deals.map(deal => (<RenderDeals deal={deal} />))


	return (
		<>
			<NaviBar />
			<div className="container mt-5 bg-light">

				<div className="row pt-2">
					<div className="col">
						<div style={{ float: 'right' }} className="dropdown">
							<button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								my business
							</button>
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
								<li className="dropdown-item" ><CreateDeal /></li>
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

			<div className="container mt-5">
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