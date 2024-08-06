import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsList from '../UI/ProductsList'
import { FaRegTrashAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { cartActions } from '../../redux/cartSlice'

const Cart = () => {
  const out = useSelector((state)=>{
    return state.cart.cartItems
  },[])
  console.log(out)

  return (
    <>
      <div className="container">
        <div className="row">
        {
      out.length === 0 ? (<h1>No Products are found</h1> ): (
        <table className="table bordered card__table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            out.map((item,i)=>{
             return <Tr key={i} item={item} /> 
            })
          }
        </tbody>
      </table>
      )
     }
        </div>
      </div>
    </>
  )
}

const Tr = ({item}) => {
  const dispatch = useDispatch()

  const removeCart = () => {
  return  dispatch(cartActions.removeItems(item.id))
  }
    return <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}Items</td>
      <td>
      <motion.i onClick={()=>removeCart} whileTap={{scale:1.5}} class='bx bx-trash'></motion.i>
      </td>
    </tr>
}

export default Cart