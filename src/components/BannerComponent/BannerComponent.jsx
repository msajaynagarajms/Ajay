import React from 'react'
import './BannerComponent.css'
import BannerImg from '../../images/bannerImg.png'
import GroupIcon from '../../images/GroupIcon.png'
const BannerComponent = () => {
    return (
        <React.Fragment>
            <div className='BannerComponentWrapper'>
                <div className='container'>
                    <div className='row p-3'>
                        <div className='col-8 pt-4'>
                            
                                <div className='row'>
                                    <h1>workout essentials</h1>
                                </div>
                                <div className='row'>
                                    <h1>supplements</h1>
                                </div>
                                <div className='row'>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.</p>
                                </div>
                                <div className='row BuyNowButton'>
                                <button>Buy Now </button>
                                </div>
                            
                        </div>
                        <div className='col-4'>
                            <div>
                                <img width="100%" src={BannerImg} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <img src={GroupIcon} alt="" srcset="" />
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default BannerComponent