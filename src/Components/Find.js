import { Link } from "react-router-dom";
import NaviBar from "./NavBar";
const Find = () => {
	return (
		<>
			<NaviBar />
			<div className="container mt-5">
				<div className="bus-types">
					<div className="row row-cols-2 gy-4">
						<div className="col">
							<Link to={`/find/my/deal/Software`}>
								<div style={{ backgroundColor: '#8CC58A' }} className="box-card">
									<h1 className="text-center">Technologies</h1>
								</div>
							</Link>
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
		</>
	)
}

export default Find;