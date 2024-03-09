import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Counter from '../Counter/Counter'
import Loader from '../Loader/Loader'


const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(false)
    const params = useParams()
    const fetchData = async () => {
        setLoader(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        setProduct(response.data)
        setLoader(false)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {
                loader ? <Loader /> : (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={product.image} alt={product.title} height={"300px"} width={"400px"} />
                            </div>
                            <div className="col-lg-6">
                                <h1>{product.title}</h1>
                                <p>{product.description}</p>
                                <Counter/>
                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ProductDetails