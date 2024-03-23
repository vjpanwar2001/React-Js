import React, { useEffect, useState } from 'react'
import Cards from '../Common/Cards'
import axios from 'axios';

function Product() {

    let api = 'https://dummyjson.com/products';

    let [data,setData] = useState([])
    function mydata(){

        axios.get(api)
        .then((res)=>{
            setData(res.data.products)
        })
    }

    useEffect(()=>{
        mydata()
    },[])

    

    
  return (
    <div>
        <h1 className='text-[40px]'>All Products</h1>
        <div className='my-5 grid grid-cols-4 px-4 gap-[20px]'>
            {
                data.length>0 ? 
                data.map(v=>(

                    <Cards data={v} />
                ))
                :
                <div>No Data Found</div>

            }
        </div>
    </div>
  )
}

export default Product