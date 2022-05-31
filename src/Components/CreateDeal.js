import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
const CreateDeal = () => {
	const [open, setOpen] = useState(false)


	return (
		<>
			<Button color='link' onClick={() => setOpen(true)}> Create Offer/Deal </Button >

			<Modal size='lg' isOpen={open} toggle={() => setOpen(false)} >
				<ModalBody>
					<Form>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" name="product" placeholder="product name" />
							</Col>
						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input type="text" name="email" id="exampleEmail" placeholder="short description" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" name="price" placeholder="price" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="tel" name="phone" placeholder="phone" />
							</Col>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="success" onClick={() => setOpen(false)}>Make offer</Button>{' '}
					<Button color="danger" onClick={() => setOpen(false)}>exit</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}

export default CreateDeal;