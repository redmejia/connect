import { Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import '../App.css'
import logo from '../public/connect.svg'
import { useSelector, useDispatch } from "react-redux";
import CreateAccount from './CreateAccount';
import { newSignin } from "../Redux/signin";
import { useState } from 'react';



const Signin = () => {
	let dispatch = useDispatch()
	const { signin } = useSelector(state => state.signin)
	let navigate = useNavigate();

	const [form, setForm] = useState({ email: '', password: '' })

	if (signin.success.is_auth) {
		localStorage.setItem('token', signin.success.token)
		navigate('/c/home', { replace: false })
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
								<Input onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} type="email" name="email" placeholder="email" autoComplete='on' />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} type="password" name="password" placeholder="password" autoComplete='on' />
							</Col>
						</FormGroup>
					</Form>
					<Button onClick={() => dispatch(newSignin(form))} color="primary">Signin</Button>
					<br />
					<CreateAccount />
				</div>
			</div>
		</>
	)
}

export default Signin;