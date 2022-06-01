import { Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import '../App.css'
import logo from '../public/connect.svg'
import CreateAccount from './CreateAccount';



const Signin = () => {

	let navigate = useNavigate();
	
	const nav = () => {
		navigate('/c/home')
	}
	
	return (
		<>
			<div className='logo'>
				<img src={logo} alt="connect" />
			</div>
			<div className='box'>
				<div className='signin-content'>
					<Form>
						<FormGroup row>
							<Col sm={20}>
								<Input type="email" name="email" id="exampleEmail" placeholder="email" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="password" name="password" id="examplePassword" placeholder="password" />
							</Col>
						</FormGroup>
					</Form>
					<Button onClick={() => nav()} color="primary">Signin</Button>
					<br />
					<CreateAccount />
				</div>
			</div>
		</>
	)

}

export default Signin;