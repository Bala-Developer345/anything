import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cartSlice';

const ProductCard = ({item}) => {
  
  const dispatch = useDispatch();

  const addToCart = (state) =>{
      dispatch(cartActions.addItems(state))
  }

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card">
    <img className="card-img-top" src={item.imgUrl} alt="Card image"/>
    <div className="card-body">
      <h4 className="card-title">{item.productName}</h4>
      <p className="card-text">{item.category}</p>
      <a onClick={() => addToCart(item)} className="btn btn-primary">Add To Cart</a>
    </div>
  </div>
      </div>
    </>
  )
}

export default ProductCard