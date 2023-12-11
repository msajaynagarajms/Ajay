import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'
import Menu from '../Menu/Menu'
// this Comp is for Header part

const Header = () => {
    return (
        <React.Fragment>
            <div className='container mt-4 mb-4'>

                <div className='row m-0 p-0'>
                    <div className='col-5'>
                        <div>
                            <img src={logo} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='col-7 '>
                        <div className='row m-0 p-0 d-flex align-items-center '>
                            <div className='col-7'>
                                <div className='SearchBarWrapper d-flex align-items-center'>
                                    <label className='m-0' htmlFor="">
                                        <a href="http://" target="_blank" rel="noopener noreferrer"> <i class="fa fa-search" aria-hidden="true"></i></a>

                                    </label>
                                    <input type="text" value="search for product" />
                                </div>

                            </div>
                            <div className='col-5'>
                                <div className='row' >
                                    <div className='col-4 d-flex align-items-center'>

                                        <div className='d-flex align-items-center'>
                                            <i class="fa fa-heart p-2" aria-hidden="true"></i>
                                            <i class="fa fa-shopping-cart p-2" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                    <div className='col-8 d-flex align-items-center'>
                                        <div className='GetStartButton'>
                                            <button>Get Start <label htmlFor=""> <i class="fa fa-search" aria-hidden="true"></i> </label></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </React.Fragment>
    )
}

export default Header