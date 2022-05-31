import logo from '../public/connect.svg'
import '../App.css'

const NaviBar = () => {


	return (

		<ul className='nav-style'>
			<div className="container">
				<li className='items'><img src={logo} alt="connect" height="50" width="60" /></li>
				<li className='items' style={{ float: 'right' }}><a href="#news">My profile</a></li>
				<li className='items' style={{ float: 'right' }}><a href="#contact">Find</a></li>
			</div>
		</ul>
	)

}

export default NaviBar