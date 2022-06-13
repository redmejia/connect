import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { updateDealOrOffer } from '../Redux/business';

const UpdateDeal = ({ deal }) => {

	const [open, setOpen] = useState(false)
	let dispatch = useDispatch()

	const [newUpdatedDeal, setUpdateDeal] = useState({
		deal_id: deal.deal_id,
		business_id: deal.business_id,
		product_name: deal.product_name,
		business_name: deal.business_name,
		deal_desciption: deal.deal_desciption,
		price: deal.price
	})

	const handleChange = e => {
		setUpdateDeal({
			...newUpdatedDeal,
			[e.target.name]: e.target.value
		})
	}

	const submitChanges = () => {
		const data = {
			...newUpdatedDeal,
			...{ price: parseFloat(newUpdatedDeal['price']) }
		}
		dispatch(updateDealOrOffer(data))
		setOpen(false)
	}

	return (
		<>
			<Button type="button" className="btn btn-success" onClick={() => setOpen(true)}> Update </Button >

			<Modal size='lg' isOpen={open} toggle={() => setOpen(false)} >


				<ModalBody>
					<h1 className='text-center'>My Deal or Offer</h1>
					<h3>Your current deal state</h3>
					<div className="list-group mb-3">
						<div className="list-group-item disabled list-group-item-action" key={deal.deal_id} >
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1">{deal.product_name}</h5>
								<small className="text-muted">{deal.deal_start}</small>
							</div>
							<p className="mb-1">{deal.deal_desciption}</p>
							<small className="text-muted">$ {deal.price}</small> {' '}
						</div>
					</div>
					<p>Note: Make one or more changes on your deal.</p>
					<h3>Change to</h3>
					<Form>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={(e) => handleChange(e)} name="product_name" placeholder="product name" />
							</Col>
						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input type="text" onChange={(e) => handleChange(e)} name="deal_desciption" id="exampleEmail" placeholder="short description" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={(e) => handleChange(e)} name="price" placeholder="price" />
							</Col>
						</FormGroup>
						<FormGroup row>
							{/* <Col sm={20}>
							<Input type="tel" name="phone" placeholder="phone" />
						</Col> */}
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="success" onClick={() => submitChanges()}>Update Deal</Button>{' '}
					<Button color="danger" onClick={() => setOpen(false)}>exit</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}

export default UpdateDeal;