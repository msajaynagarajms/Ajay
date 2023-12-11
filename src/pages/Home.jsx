import React from 'react'
import BannerComponent from '../components/BannerComponent/BannerComponent'
import Category from '../components/Category/Category'
import './Home.css'
import GettingProductsApi from '../components/Products/GettingProductsApi'
import Discount from '../components/Discount/Discount'
const Home = () => {




    return (
        <React.Fragment>
            <div className='containerStyle' >
                <BannerComponent />
                <Category />
                <GettingProductsApi />

            </div>
            <Discount />
        </React.Fragment>
    )
}

export default Home