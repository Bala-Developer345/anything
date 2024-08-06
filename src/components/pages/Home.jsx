import React, { useEffect, useState } from 'react'

import products from '../../assets/data/products'
import ProductsList from '../UI/ProductsList';
import FeaturedTourList from '../FeaturedTourList';

const Home = () => {
  const [sofa,setSofa] = useState([]);

  useEffect(()=>{
     const sofaFiletered = products.filter(item => item.category === "sofa")
     setSofa(sofaFiletered)
  },[])

  return (
    <>
      <div className="container">
        <div className="row">
           <FeaturedTourList />
        </div>
         <div className="d-flex align-items-center justify-content-around">
           <h1>Home</h1>
         </div>
       <section>
         <div className="row">
             <ProductsList data={sofa} />
         </div>
       </section>
      </div>
    </>
  )
}

export default Home