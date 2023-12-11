import React from 'react'
import './Menu.css';
const Menu = () => {
    return (
        <React.Fragment>
            <div className='menuBarWrapper'>
            <div className='container'>
                    <div className='row'> 
                        <ul>
                            <li>Best Seller</li>
                            <li>Products <i class="fa fa-angle-down p-2" aria-hidden="true"></i></li>
                            <li>Brand <i class="fa fa-angle-down p-2" aria-hidden="true"></i></li>
                            <li>Offers <i class="fa fa-angle-down p-2" aria-hidden="true"></i></li>
                            <li>Our Story</li>
                        </ul>
                    </div>

                </div>
            </div>
               
        </React.Fragment>
    )
}

export default Menu