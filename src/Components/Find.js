import { Link } from "react-router-dom";
import NaviBar from "./NavBar";
const Find = () => {
	return (
		<>
			<NaviBar />
			<div className="container mt-5">
				<div className="col text-center pt-4 pb-4">
					<h1>Let's Connect</h1>
					<h3>Do you want to start a business or exapand your business</h3>
					<hr></hr>
				</div>
				<div className="bus-types">
					<div className="row row-cols-2 gy-4">
						<div className="col">
							<Link className="link-opt" to={`/find/my/deal/Technologie`}>
								<div className="tech box-tech">
									<h1 className="text-center">Technologies</h1>
								</div>
							</Link>
						</div>
						<div className="col">
							<Link className="link-opt" to={`/find/my/deal/Agriculture`}>
								<div className="agro box-tech">
									<h1 className="text-center">Agriculture</h1>
								</div>
							</Link>
						</div>
						<div className="col">
							<Link className="link-opt" to={`/find/my/deal/FoodandDrink`} >
								<div className="food-drink box-tech">
									<h1 className="text-center">Food and Drinks</h1>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Find;