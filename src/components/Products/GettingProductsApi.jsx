import React from 'react'
import { useEffect, useState } from 'react'
import PrintingProductApi from './PrintingProductApi';
const GettingProductsApi = () => {
    const [data, setData]=useState(null);
    useEffect(()=>{
    //   fetching the API data
        const fetchData = async ()=>{
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    console.error('Failed to fetch data');
                    return;
                  }
                const result =await response.json();
               console.log(result);
                setData(result);
               //console.log(data);
            } catch (error) {
                console.error("error fetching data",error)
            }
        }
        fetchData();
        
     },[]);

 return (
    <div>
    
        {data ? (
        <div>
            {/* passing API data using props */}
 <PrintingProductApi sendData={data}/>

        
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    
    </div>
  )
}

export default GettingProductsApi