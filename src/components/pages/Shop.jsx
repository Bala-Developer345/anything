import React, { useState } from 'react'
import products from '../../assets/data/products'
import ProductsList from '../UI/ProductsList';

const Shop = () => {
   const [productsData,setProductsData] = useState(products);

const handleSerach = (e) => {
    const searchItems = e.target.value;
  const searchProducts = products.filter(item => item.category.toLowerCase().includes(searchItems.toLowerCase()))
  setProductsData(searchProducts)
}

  return (
    <div className="container">
       <div className="d-flex align-items-center justify-content-between">
         <div className="name">
            Shopping
         </div>
         <div className="input">
           <input type="text" onChange={handleSerach} />
         </div>
       </div>
       <div className="row">
         {
          productsData.length === 0? <h1>No Products are found</h1> : <ProductsList data={productsData} />
         }
       </div>
    </div>
  )
}

export default Shop