import logo from '../public/connect.svg'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'

const NaviBar = () => {

	let navigate = useNavigate()

	return (

		<ul className='nav-style'>
			<div className="container">
				<li className='items'>
					<div onClick={() => navigate("/c/home", { replace: false })}>

						<img src={logo} alt="connect" height="50" width="60" />
					</div>

				</li>
				<li className='items' style={{ float: 'right' }}><Link to="/my/dashboard">My profile</Link></li>
				<li className='items' style={{ float: 'right' }}><Link to="/find">Find</Link></li>
			</div>
		</ul >
	)

}

export default NaviBar