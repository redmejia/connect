import { Routes, Route } from "react-router-dom";
import Signin from './Signin'
import ConnectHome from './ConnectHome'
import BusinessDashboard from './BusinessDashboard'
import Find from './Find'

const Main = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Signin />} />
				<Route  path='/c/home' element={<ConnectHome />} />
				<Route path='/my/dashboard' element={<BusinessDashboard />} />
				<Route path='/find' element={<Find />} />
			</Routes>
		</>
	)
}

export default Main;