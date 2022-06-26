import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { createNewDealOffer } from "../Redux/business";
import { useSelector } from 'react-redux';



const CreateDeal = () => {

	let dispatch = useDispatch()

	const [open, setOpen] = useState(false)


	// console.log("here", myBusiness.my_business.business_name);
	const { myBusiness } = useSelector(state => state.business)


	const [newDeal, setNewDeal] = useState({
		business_id: localStorage.getItem('business_id'),
		product_name: "",
		deal_desciption: "",
		price: 0.0
	})

	const handleDeal = (e) => {
		setNewDeal({ ...newDeal, [e.target.name]: e.target.value })
	}

	const submitDeal = () => {
		const data = {
			...newDeal,
			...{
				business_id: +newDeal['business_id'], price: parseFloat(newDeal['price']),
				business_name : myBusiness.my_business.business_name,
				business_type : myBusiness.my_business.business_type,
			}
		}

		// console.log(myBusiness.my_business.business_type);
		dispatch(createNewDealOffer(data))
		setOpen(false)
	}
	// console.log("new deal ", newDeal);
	return (
		<>
			<Button color='link' onClick={() => setOpen(true)}> Create Offer/Deal </Button >

			<Modal size='lg' isOpen={open} toggle={() => setOpen(false)} >
				<ModalBody>
					<Form>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={e => handleDeal(e)} name="product_name" placeholder="product name" />
							</Col>
						</FormGroup>
						<FormGroup>
							<Col sm={20}>
								<Input type="text" onChange={e => handleDeal(e)} name="deal_desciption" id="exampleEmail" placeholder="short description" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={20}>
								<Input type="text" onChange={e => handleDeal(e)} name="price" placeholder="price" />
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
					<Button color="success" onClick={() => submitDeal()}>Make offer</Button>{' '}
					<Button color="danger" onClick={() => setOpen(false)}>exit</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}


export default CreateDeal;