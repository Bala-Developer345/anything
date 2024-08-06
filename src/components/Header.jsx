import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = () => {

    const value = useSelector((data)=>{
        return data.cart.totalQuantity
    })

   
  return (
    <>
      <div className="mx-5 my-3 d-flex align-items-center justify-content-between">
          <div className="logo">
             <h3>Shop</h3>
          </div>
          <div className="menu">
            <ul className='d-flex'>
            <li className='mx-4'><Link to='reactform'>React From</Link></li>
            <li className='mx-4'><Link to='usecallback'>Usecallback</Link></li>
            <li className='mx-4'><Link to='products'>Products</Link></li>
            <li className='mx-4'><Link to='formik'>Formik</Link></li>
            <li className='mx-4'><Link to='form'>Form</Link></li>
            <li className='mx-4'><Link to='select'>Select</Link></li>
                <li><Link to='/'>Products</Link></li>
                <li><Link className='mx-3' to='shop'>Shop</Link></li>
                <li><Link to='cart'>Cart {value}</Link></li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Header