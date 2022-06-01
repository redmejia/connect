import CreateDeal from "./CreateDeal";
import NaviBar from "./NavBar";

const RenderDeals = ({ deal }) => {

	return (
		<a href="/#" class="list-group-item list-group-item-action">
			<div class="d-flex w-100 justify-content-between">
				<h5 class="mb-1">{deal.product_name}</h5>
				<small class="text-muted">{deal.creatAt}</small>
			</div>
			<p class="mb-1">{deal.description}</p>
			<small class="text-muted">$ {deal.price}</small> {' '}
			<div style={{ float: 'right' }} class="btn-group" role="group" aria-label="Basic example">
				<button type="button" class="btn btn-success">update</button>
				<button type="button" class="btn btn-danger">delete</button>
			</div>
		</a>
	)

}

const mock = [
	{ product_name: "ram", description: "seling extras inventorie of ram 4 packge", creatAt: '2022-5-31', price: 50.00 },
	{ product_name: "moderbord", description: "seling extras inventorie of ram 4 packge", creatAt: '2022-5-31', price: 51.00 },
	{ product_name: "Cpu", description: "seling extras inventorie of ram 4 packge", creatAt: '2022-5-21', price: 123.00 },
	{ product_name: "gamer headphone", description: "seling extras inventorie of ram 4 packge", creatAt: '2022-5-24', price: 58.00 }

]


const BusinessDashoard = () => {

	const fakeData = mock.map(deal => (<RenderDeals deal={deal} />))

	return (
		<>
			<NaviBar />
			<div className="container mt-5 bg-light">

				<div className="row pt-2">
					<div className="col">
						<div style={{ float: 'right' }} className="dropdown">
							<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								my business
							</button>
							<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
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
						<div class="list-group">
							{fakeData}
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default BusinessDashoard;