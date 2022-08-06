import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { useState } from 'react';
const EasyPay = ({deal}) => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button className="btn btn-success" onClick={() => setOpen(true)}> Easy Pay </Button >

			<Modal size='lg' isOpen={open} toggle={() => setOpen(false)} >
				<ModalBody>
					<h1>{deal.product_name}</h1>
				</ModalBody>
				<ModalFooter>
					{/* <Button color="success" onClick={() => submitDeal()}>Make offer</Button>{' '} */}
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