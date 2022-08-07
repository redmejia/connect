import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { useState } from 'react';

const EasyPay = ({ deal }) => {
	const [open, setOpen] = useState(false)

	const toCents = deal.price * 100
	const [payment, setPayment] = useState({
		product: {
			product_name: deal.product_name,
			product_price: toCents,
		},
		tx_amount: toCents,
		tx_card_number: "",
		tx_card_cv: "",
	})

	const [billing, setBilling] = useState(
		{
			full_name: "Elon Musk",
			address: "",
			city: "",
			state: "",
			zip: ""
		}
	)

	const handlePayment = (e) => {
		setPayment({ ...payment, [e.target.name]: e.target.value })
	}

	const handleBilling = (e) => {
		setBilling({ ...billing, [e.target.name]: e.target.value })
	}

	const submit = () => {
		const tx = { ...payment, billing_info: { ...billing } }
		fetch("http://localhost:8081/api/tx", {
			method: "POST",
			// headers: {
			// 	"Content-Type": "application/json",
			// },
			body: JSON.stringify(tx)
		}).then(res => res.json())
		.then(data => {console.log(data)})
	}

	return (
		<>
			<Button className="btn btn-success" onClick={() => setOpen(true)}> Easy Pay </Button >

			<Modal size='lg' isOpen={open} toggle={() => setOpen(false)} >
				<ModalBody>
					<Form>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={e => handlePayment(e)} name="tx_card_number" placeholder="card number" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={e => handlePayment(e)} name="tx_card_cv" placeholder="cv" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={e => handleBilling(e)} name="address" placeholder="address" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={e => handleBilling(e)} name="city" placeholder="city" />
							</Col>
						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input type="text" onChange={e => handleBilling(e)} name="state" id="exampleEmail" placeholder="state" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={e => handleBilling(e)} name="zip" placeholder="zip" />
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
					<Button color="success" onClick={() => submit()}>Make offer</Button>{' '}
					<Button color="danger" onClick={() => setOpen(false)}>exit</Button>
				</ModalFooter>
			</Modal>
		</>
	)

}

const RenderDeals = ({ deal, btnEnable = false }) => {

	return (
		<div className="list-group-item list-group-item-action" key={deal.deal_id} >
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{deal.product_name}</h5>
				<small className="text-muted">Created: {deal.deal_start}</small>
			</div>
			<p className="mb-1">{deal.deal_desciption}</p>
			<small className="text-muted">$ {deal.price}</small> {' '}
			<hr></hr>
			<small style={{ float: 'right' }} className="text-muted">By {deal.business_name}</small>
			{
				btnEnable ?
					// this is go in to be a modal ?
					<EasyPay deal={deal} />
					:
					null
			}
		</div>
	)

}

export default RenderDeals;