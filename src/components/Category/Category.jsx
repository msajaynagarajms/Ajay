import React from 'react'
import './Category.css'
import Vitamins from '../../images/Vitamins.png'
import Medicine from '../../images/Medicine.png'
import HealthCare from '../../images/Healthcare.png'
import fishoil from '../../images/fishoil.png'
const Category = () => {
    return (
        <React.Fragment>
            <div className='categoryWrapper mt-2'>
                <div className='container p-0'>
                    <div className='row m-0 p-0'>
                        <div className='col-2 CategoryHeading'>
                            <p>Top Categorie's</p>
                        </div>
                        <div className='col-8'></div>
                        
                        <div className='col-2 CategoryViewAll d-flex justify-content-center'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">View All</a>
                        </div>
                    </div>
                    <div className='row m-0 p-0'>
                       
                            <div className='col-3 '>
                                <div className='row m-0 p-0 vitamine'>
                                    <div className='col-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                                            <p>Vitamins</p>
                                    </div>
                                    <div className='col-6  m-0 p-0  '>
                                        <img src={Vitamins} alt="" width="100%" height="137px" srcset="" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-3 '>
                            <div className='row m-0 p-0 Medicine'>
                                    <div className='col-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                                            <p>Medicine</p>
                                    </div>
                                    <div className='col-6 m-0 p-0 '>
                                        <img src={Medicine} alt="" width="100%" height="137px" srcset="" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-3 '>
                            <div className='row m-0 p-0 Health'>
                                    <div className='col-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                                            <p>Health Care</p>
                                    </div>
                                    <div className='col-6 m-0 p-0 '>
                                        <img src={HealthCare} alt="" width="100%" height="137px" srcset="" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>
                            <div className='row m-0 p-0 fishoil'>
                                    <div className='col-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                                            <p>Fish Oil</p>
                                    </div>
                                    <div className='col-6 m-0 p-0 ' >
                                        <img src={fishoil} alt="" width="100%" height="137px" srcset="" />
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Category