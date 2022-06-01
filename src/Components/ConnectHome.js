import shirts from '../public/shirts.png'
import sunOne from '../public/sun1.png'
import sunTwo from '../public/sun2.png'
import '../App.css'


const ConnectHome = () => {
	return (
		<>
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
						<button class="btn-go">Find more</button>
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
							<div style={{ backgroundColor: '#8CC58A' }} className="box-card">
								<h1 className="text-center">Technologies</h1>
							</div>
						</div>
						<div className="col">
							<div style={{ backgroundColor: '#C5C28A' }} className="box-card">
								<h1 className="text-center">Agriculture</h1>
							</div>
						</div>
						<div className="col">
							<div style={{ backgroundColor: '#C58A8A' }} className="box-card">
								<h1 className="text-center">Food and Drinks</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='visit mt-5 mb-5'>
				<div className='col text-center pt-4'>
					<p className='fs-2'>Business Deals</p>
					<p className='fs-3'>Are you looking for a product for your business ? </p>
					<button className='btn btn-success' >See what is new</button>
				</div>
			</div>


			<div className='container'>
				<div className='col text-center mt-5'>
					<p className=' fs-1'>Summer is almos here are those product ideal for your  business type</p>
					<div className="col  recomendation-img">
						<img src={sunOne} alt="recomendation" />
						<img src={sunTwo} alt="recomendation" />
					</div>
				</div>
				{/* <div className="row g-0">
					<div className="col align-self-center recomendation-img">
					</div>
				</div> */}
			</div>

			<footer className='site-footer mt-5'>
				
			</footer>

		</>
	)
}

export default ConnectHome;