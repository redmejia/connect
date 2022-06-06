import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newAccount } from "../Redux/auth";

const CreateAccount = () => {
	const [open, setOpen] = useState(false)
	let dispatch = useDispatch()
	const { register } = useSelector(state => state.auth)
	let navigate = useNavigate();
	const [form, setForm] = useState({ business_name: '', business_type: '', email: '', founded: 0, password: '' })

	const handleForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	let data  = { ...form, ...{ founded: +form['founded'] } }

	if (register.success.is_auth) {
		localStorage.setItem('token', register.success.token)
		navigate('/c/home', { replace: false })
	}

	// const sendForm = () => {
	// 	fetch('http://localhost:8080/api/create/account', {
	// 		method: 'POST',
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(datas)
	// 	}).then(res => res.json())
	// 		.then(data => console.log(data))
	// }

	return (

		<>
			<Button color='success' onClick={() => setOpen(true)}>Create an account</Button>

			<Modal size='lg' isOpen={open} toggle={() => setOpen(false)} >
				<ModalBody>
					<Form>
						<FormGroup row>
							<Col sm={20}>
								<Input onChange={(e) => handleForm(e)} type="text" name="business_name" placeholder="business name" />
							</Col>
						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input onChange={(e) => handleForm(e)} type="text" name="business_type" placeholder="business type" />
							</Col>

						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input onChange={(e) => handleForm(e)} type="email" name="email" id="exampleEmail" placeholder="email" />
							</Col>

						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input onChange={(e) => handleForm(e)} type="text" name="founded" placeholder="founded" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input onChange={(e) => handleForm(e)} type="password" name="password" placeholder="password" />
							</Col>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="success" onClick={() => dispatch(newAccount(data))}>Register</Button>{' '}
					<Button color="danger" onClick={() => setOpen(false)}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}

export default CreateAccount;