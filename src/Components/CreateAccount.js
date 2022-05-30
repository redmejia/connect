import { useState } from 'react';
import { Button, Modal,  ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';

const CreateAccount = () => {
	const [open, setOpen] = useState(false)

	return (

		<>
			<Button color='success' onClick={() => setOpen(true)}>Create an account</Button>

			<Modal size='lg' isOpen={open} toggle={() => setOpen(false)} >
				<ModalBody>
					<Form>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" name="bus-name" placeholder="business name" />
							</Col>
						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input type="text" name="bus-type" placeholder="business type" />
							</Col>

						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input type="email" name="email" id="exampleEmail" placeholder="email" />
							</Col>

						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input type="text" name="founded" placeholder="founded" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="password" name="password" id="examplePassword" placeholder="password" />
							</Col>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="success" onClick={() => setOpen(false)}>Register</Button>{' '}
					<Button color="danger" onClick={() => setOpen(false)}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}

export default CreateAccount;