import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductList() {
    let {id} = useParams()
       let api2 = `https://dummyjson.com/products/${id}`
    let [single,setSingle] = useState([])
       function mysingledata(){
        axios.get(api2)
        .then((res)=>{
                console.log(res)
                setSingle(res.data)
        })
        .catch(error=>{
            alert("no data found")
        })
       }

       useEffect(()=>{
        mysingledata()
       },[id])
  return (
    <div>ProductList</div>
  )
}

export default ProductList