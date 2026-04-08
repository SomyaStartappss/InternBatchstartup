import React from 'react'
import './ProductCard.css'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img1.jpeg'
import img3 from '../assets/img1.jpeg'

const ProductCard = (props) => {
  return (
    <div className='product-container'>
         <img src={props.image} alt="" />
         <div className="product-detail">
            <div className="product-name">{props.namee}</div>
            <div className="product-price">{props.price}</div>
            <button>Buy Now</button>
         </div>
    </div>
  )
}

export default ProductCard