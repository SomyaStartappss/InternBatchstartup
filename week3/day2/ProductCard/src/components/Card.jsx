import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpeg'
const Card = () => {
  return (
    <>
    <ProductCard image={img1} namee="Tshirt"  price= "$30" />
    <ProductCard image={img2} namee="Full sleeves Tshirt"  price= "$40" />
    <ProductCard image={img3} namee="Shirt"  price= "$20" />
    </>
  )
}

export default Card