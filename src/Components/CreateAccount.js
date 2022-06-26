import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Col, Input, Label } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newAccount } from "../Redux/auth";

const CreateAccount = () => {
	const [open, setOpen] = useState(false)
	let dispatch = useDispatch()
	const { register } = useSelector(state => state.auth)
	let navigate = useNavigate();

	const [form, setForm] = useState({ business_name: '', business_type: '', email: '', founded: 0, password: '' })
	const [businessType, setBusinessType] = useState()


	const handleForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	let data = { ...form, ...{ founded: +form['founded'], business_type: businessType } }

	if (register.success.is_auth) {
		localStorage.setItem('business_id', register.success.business_id)
		localStorage.setItem('is_auth', register.success.is_auth)
		localStorage.setItem('token', register.success.token)
		navigate('/c/home', { replace: false })
	}

	return (

		<>
			<Button color='success' onClick={() => setOpen(true)}>Create an account</Button>

			<Modal size='lg' isOpen={open} toggle={() => setOpen(false)} >
				<ModalBody>
					<h1>Create an account</h1>
					<Form>
						<FormGroup row>
							<Col sm={20}>
								<Input onChange={(e) => handleForm(e)} type="text" name="business_name" placeholder="business name" />
							</Col>
						</FormGroup>
						<FormGroup >
							<Label for="exampleSelect">Select your business model or business type</Label>
							<Input type="select" name="select" value={businessType} onChange={(e) => setBusinessType(e.target.value)} id="exampleSelect">
								<option ></option>
								<option value="Technologie">Technologie</option>
								<option value="Agriculture">Agriculture</option>
								<option value="FoodandDrink">Food and drinks</option>
							</Input>
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