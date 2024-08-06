import React from 'react'
import ProductAPI from './ProductAPI';
import { MyContext } from './MyContext';

const ContextAPI = () => {

    const sharedData = "Hi This is ContextAPI"

  return (
    <MyContext.Provider value={sharedData}>
        <ProductAPI />
    </MyContext.Provider>
  )
}

export default ContextAPI