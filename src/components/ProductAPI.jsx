// import React, { useEffect, useState } from 'react';
// import axios from 'axios'

// const ProductAPI = () => {
//     const [product,setProducts] = useState('');
//     const [shoes,setShoes] = useState('')
//     const url = "http://localhost:8000/product";

//     useEffect(()=>{
//       axios.get(url).then(value => {
//     //    console.log(value.data);
//        const {status,data} = value; 
//        console.log(status)
//        setProducts(data)
//        console.log(data.category)
//       })
//     },[])


//     const products = product && product.length && product.map((product)=>{
//         return  <div className="col-lg-4 col-md-6 col-sm-12">
//         <div className="card" key={product.id}>
//             <h5>{product.id}</h5>
// <img src={product.images[0] || product.images[1] || product.images[2]} className="card-img-top" alt="..."/>
// <div className="card-body">
// <h5 className="card-title">{product.title}</h5>
// <p className="card-text">{product.description}</p>
// <a href="#" className="btn btn-primary">{product.category.name}</a>
// </div>
// </div>
//         </div>
//     })
//   return (
//     <>
//     <div className="container">
//         <div className="row">
//            {products}
//         </div>
//     </div>
//     </>
//   )
// }

// export default ProductAPI

import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const ProductAPI = () => {
  
//   const names = ["Bala","Veera","aiah"];

//   let obj = Object.assign({},names)
//   console.log(obj)

//   //using spread operator :
//   let obj1 = {...names}
//   console.log(obj1)
  
//   //using reduce method
//   let obj2 = names.reduce((a,val,i)=>{
//     return {...a,[i]:val}
//   },[])

//   console.log(obj2);

//   let object = {
//      id:"1",
//      name:"Object",
//      age:"26",
//      work:"Programmer"
//   }

//   console.log(Object.keys(object))
//   console.log(Object.values(object))
//   console.log(Object.entries(object))

//   const myArr = [1, 2, 3, 4, 5,6];
// const newArr = myArr.flatMap((x) => x * 2); 
// console.log(newArr)
// console.log(myArr)

const numbers = [0,1,2,3,4,5];
const sum = numbers.reduce((total,val)=>{
  return (
    console.log(val)
  )
})



  const data = useContext(MyContext)
  return (
      <>
         <h1>Bala {data}</h1>
      </>
  )
}

export default ProductAPI