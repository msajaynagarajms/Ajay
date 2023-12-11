import React from 'react'
import './PrintingProductApi.css'
const PrintingProductApi = (props) => {
    return (

        <React.Fragment>
            <div className='mt-4' >
                <div className='container  p-0'>
                    <div className='row m-0 p-0'>
                        <div className='col-2 ProductHeading'>
                            <p>Top Categorie's</p>
                        </div>
                        <div className='col-8'></div>

                        <div className='col-2 ProductViewAll d-flex justify-content-center'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">View All</a>
                        </div>
                    </div>


                    <div className='row m-0 p-0'>
{/* receiving API data from parent component and then using map function for printing the col element for eacha nd every element in product array */}
                        {props.sendData.map((product, index) => (
                            <React.Fragment key={index}>
                                <div className='col-3'>
                                    <div className='p-2 productListing mb-2'>
                                        <div className='row m-0 p-0 justify-content-end '>
                                            <i class="fa fa-heart p-2" aria-hidden="true"></i>
                                            <i class="fa fa-heart p-2" aria-hidden="true"></i>
                                        </div>
                                        <div className='row m-0 p-0 d-flex justify-content-center'>
                                            <div className='ProductImage d-flex justify-content-center'>
                                                <img src={product.image} alt="" width="100%" height="100%" srcset="" />
                                            </div>

                                        </div>
                                        <div className='row m-0 p-0 ProductTitle font-weight-bold'>
                                            <p>{product.title}</p>
                                        </div>
                                        <div className='row m-0 p-0 ProductMsrp  '>
                                            <p style={{ textDecoration: 'line-through' }}>MRP:₹5,798</p>
                                        </div>
                                        <div className='row m-0 p-0 ProductPrice font-weight-bold'>
                                            <p>Price: ₹{product.price} </p>
                                        </div>
                                        <div className='row m-0 p-0 AddtoCartBtn d-flex align-items-center justify-content-center'>
                                            <button type="button">  <i class="fa fa-shopping-cart p-2" aria-hidden="true"></i> Add To Cart</button>
                                        </div>
                                    </div>

                                </div>

                            </React.Fragment>
                        ))}

                    </div>
                </div>
            </div>
        </React.Fragment>
        //     <div>

        //    <div className='container  p-0'>
        //     <div className='row m-0 p-0 border'>

        //     {props.sendData.map((product, index) => (
        //   <React.Fragment key={index}>
        //     <div className='col-3 border p-4'>
        //         <img src={product.profilepicture} alt="" srcset="" width="100%" />
        //       <p>Name: {product.title}</p>

        //     </div>
        //   </React.Fragment>
        // ))}



        //     </div>
        //    </div>
        //                     {/* <p>{props.sendData[0].name}</p> */}


        //     </div>
    )
}

export default PrintingProductApi