// mock data
import NaviBar from './NavBar';
import RenderDeals from './Render';
const deals = [
    {
        deal_id: 2,
        business_id: 2,
        business_name: 'Connect',
        business_type: 'DEALS_CONNECT',
        product_name: 'HP monitor',
        deal_desciption: 'More information call at (123)2223334',
        deal_start: '2022-08-05T22:15:30.554018Z',
        is_active: {
            deal_id: 2,
            business_id: 2,
            deal_is_active: false,
            sold: false
        },
        price: 53.98
    },
    {
        deal_id: 1,
        business_id: 2,
        business_name: 'Connect',
        business_type: 'DEALS_CONNECT',
        product_name: 'Keyboards',
        deal_desciption: 'more information at connectbyrey.me',
        deal_start: '2022-08-04T16:19:52.338374Z',
        is_active: {
            deal_id: 1,
            business_id: 2,
            deal_is_active: false,
            sold: false
        },
        price: 53.53
    }
]

const ConnectDeals = () => {
    const dealsData = deals.map(deal => (
        <RenderDeals
            deal={deal}
            btnEnable={true}
        />
    ))
    return (
        <>
            <NaviBar />

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="text-center">
                        <h1>Let's Connect</h1>
                        <h3></h3>
                    </div>
                    <div className="col">
                        <hr />
                        <div className="list-group">
                            {dealsData}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectDeals;