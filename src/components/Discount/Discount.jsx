import React from 'react'
import './DiscountWrapper.css'
const Discount = () => {
  return (
   <React.Fragment>
    <div className='DiscountWrapper mt-4 mb-4'>
        <div className='container'>
            <div className='row m-0 p-0'>
                <div className='col-6'>
                    <div className='row'>
                    <h1>Grab an extra 5% duscount</h1>
                    </div>
                    <div className='row'>
                        <p>Subscribe to monthly newsletter. Get the latest product updates and special offers delivered right to your inbox. </p>
                    </div>
                    
                </div>
                <div className='col-6 d-flex justify-content-center align-items-center emailForm'>
                  <form action="" className='d-flex justify-content-center'>
                    <input type="email" value="Enter the Email Address" />
                  </form>
                </div>
            </div>
        </div>

    </div>
   </React.Fragment>
  )
}

export default Discount