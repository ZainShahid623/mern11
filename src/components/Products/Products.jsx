import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Products = () => {
const [data,setData]=useState([])
const fetchData=async()=>{
  const response=await axios.get("https://fakestoreapi.com/products")
  setData(response.data)
}

  useEffect(()=>{
    fetchData();
  },[])
 
  return (
    <div className='d-flex flex-wrap justify-content-evenly align-items-center'>
      {
        data.map((item)=>{
          return(
            <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..." height={"200px"} width={"200px"}/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description.slice(0,20)+"..."}</p>
    <Link to={`${item.id}`} class="btn btn-primary">{"$"+item.price}</Link>
  </div>
</div>
          )
        })
      }
    </div>
  )
}

export default Products
