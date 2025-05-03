import './index.css'
import Accenture from './../svg/Accenture.jsx'
import Walmart from './../svg/Walmart.jsx'
import Adobe from './../svg/Adobe.jsx'
import Paypal from './../svg/Paypal.jsx'
import Microsoft from '../svg/Microsoft.jsx'
function index(){
    return(
        <>
            <div>
                <p className='BrandNames text-center p-0 m-0'>Trusted by learners from</p>
            </div>
            <div className='w-100 d-flex justify-content-center align-items-center m-auto brands'>
                <Adobe></Adobe>
                <Paypal></Paypal>
                <Walmart></Walmart>
                <div className='ms-4'>
                <Microsoft></Microsoft>
                </div>
            </div>
        </>
    )
}
export default index;