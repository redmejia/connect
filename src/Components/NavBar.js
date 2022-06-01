import logo from '../public/connect.svg'
import '../App.css'
import { Link } from 'react-router-dom'

const NaviBar = () => {


	return (

		<ul className='nav-style'>
			<div className="container">
				<li className='items'>
					<img src={logo} alt="connect" height="50" width="60" /></li>
				<li className='items' style={{ float: 'right' }}><Link to="/my/dashboard">My profile</Link></li>
				<li className='items' style={{ float: 'right' }}><Link to="/find">Find</Link></li>
			</div>
		</ul >
	)

}

export default NaviBar