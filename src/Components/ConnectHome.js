import shirts from '../public/shirts.png'
import sunOne from '../public/sun1.png'
import sunTwo from '../public/sun2.png'
import '../App.css'
import NaviBar from '../Components/NavBar'
import { useNavigate, Link } from 'react-router-dom'


const ConnectHome = () => {
	let navigate = useNavigate()
	return (
		<>
			<NaviBar />
			<div className="container mt-5">
				<div className="row row-cols-2">
					<div className="col">
						<div className="d-flex flex-column mb-3">
							<div className="p-2">
								<p className='fs-1'>
									Do you want to start a business
									or exapand your business
								</p>
							</div>
							<div className='p-2'>
								<p className='fs-2'>
									$ 53
								</p>
							</div>
							<div className="p-2 text-center">
								<button className='btn btn-success'> Connect </button>
							</div>
						</div>
					</div>
					<div className="col">
						<div className='d-flex justify-content-center'>
							<img src={shirts} alt="promotion" />
						</div>
					</div>
				</div>
			</div>

			<div className='banner'>
				<div className='text-end text-danger fs-2 top-right'>
					Do you want to make extra money?
				</div>
				<div className='text-end  text-danger fs-2 top-right'>
					You have extra product on your inventory
				</div>
				<div className='text-end text-light  text-danger fs-2 top-right'>
					See what other business are offering
				</div>
				<div className='text-end text-light  fs-2 top-right'>
					or make your offer
					find and connect
				</div>
				<div className='text-light  top-right'>
					<div className="mt-5 b-container">
						<button className="btn-go">Find more</button>
					</div>
				</div>
			</div>

			<div className='col mt-5'>
				<p className='text-center fs-1'>Business Type</p>
			</div>
			<div class="container">
				<div className="bus-types">
					<div className="row gy-4">
						<div className="col">
							<Link className="link-opt" to={`/find/my/deal/Tech`}>
								<div className="tech box-tech">
									<h1 className="text-center">Technologies</h1>
								</div>
							</Link>
						</div>
						<div className="col">
							<Link className="link-opt" to={`/find/my/deal/Agro`}>
								<div className="agro box-tech">
									<h1 className="text-center">Agriculture</h1>
								</div>
							</Link>
						</div>
						<div className="col">
							<Link className="link-opt" to={`/find/my/deal/Food`} >
								<div className="food-drink box-tech">
									<h1 className="text-center">Food and Drinks</h1>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className='visit mt-5 mb-5'>
				<div className='col text-center pt-4'>
					<p className='fs-2'>Business Deals</p>
					<p className='fs-3'>Are you looking for a product for your business ? </p>
					{/* This for the connect to sell thier product to the business for now redirect to /find where business posts deals/offers */}
					<button className='btn btn-success' onClick={() => navigate('/c/deals', { replace: false })}>See what is new</button>
				</div>
			</div>


			<div className='container'>
				<div className='col text-center mt-5'>
					<p className=' fs-1'>Summer is almos here are these product ideal for your  business type</p>
					<div className="col  recomendation-img">
						<img src={sunOne} alt="recomendation" />
						<img src={sunTwo} alt="recomendation" />
					</div>
				</div>
			</div>

			<footer className='site-footer mt-5'>

			</footer>

		</>
	)
}

export default ConnectHome;