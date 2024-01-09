'use client';
import React from 'react'
import style from './ProductCard.module.css'
import AddToCart from './AddToCart';

const ProductCard = () => {
    return (
        <div>
          <h1 className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'> Product 123</h1>
        <AddToCart />
    </div>
  )
}

export default ProductCard