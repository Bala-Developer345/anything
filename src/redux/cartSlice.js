// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     cartItems : [],
//     totalQuantity:0,
//     totalAmount:0
// }

// const cartSlice = createSlice({
//     name:'cart',
//     initialState,

//     reducers:{
//      add:(state,action)=>{
//             const newItem = action.payload;
//             const exisitingItem = state.cartItems.find((item)=>(
//                 item.id === newItem.id
//             ))

//             state.totalQuantity++


//             if(!exisitingItem){
//                 state.cartItems.push({
//                     id:newItem.id,
//                     productName:newItem.productName,
//                     imgUrl:newItem.imgUrl,
//                     price:newItem.price,
//                     quantity:1,
//                     totalPrice:newItem.totalPrice
//             })
//             }
//             else{
//                 exisitingItem.quantity++,
//                 exisitingItem.totalPrice = Number(exisitingItem.totalPrice) + Number(exisitingItem.price)
//             }

//             state.totalAmount = state.cartItems.reduce((total,item)=> (
//               total + Number(item.price) * Number(item.quantity)
//             ),0)

//         },
//         remove:(state,action)=>{
//            const id = action.payload;
//            const exisitingItem = state.cartItems.find(item => item.id === id)
//            if(exisitingItem){
//            state.cartItems = state.cartItems.filter(item => item.id !== id);
//             state.totalQuantity = state.totalQuantity - exisitingItem.quantity;
//            }
//            state.totalAmount = state.cartItems.reduce((total,item)=> total + Number(item.price) * Number(item.quantity),0)
//         }
//     }
// })

// export const cartActions = cartSlice.actions;

// export default cartSlice.reducer;


// rxsl

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    totalAmount:0,
    totalQuantity:0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems:(state,action)=>{
        const newItem = action.payload
        const existingItem = state.cartItems.find((item)=> item.id === newItem.id);

        state.totalQuantity++;
        if(!existingItem){
            state.cartItems.push({
                id:newItem.id,
                productName: newItem.productName,
                imgUrl: newItem.imgUrl,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price
            })
        }
        else{
            existingItem.quantity++;
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
        }

        state.totalAmount = state.cartItems.reduce((total,item)=> total+Number(item.price)* Number(item.quantity),0)

        // console.log(state.totalQuantity)
        // console.log(state.cartItems)
        // console.log(newItem)
    },
    removeItems:(state,action)=>{
        const id = action.payload;
       const existingItem = state.cartItems.find(itm =>  itm.id === id);

       if(existingItem){
         state.cartItems = state.cartItems.filter(item => item.id !== id);
         state.totalQuantity = state.totalQuantity - existingItem.quantity
       }
       state.totalAmount = state.cartItems.reduce((total,item)=> total + Number(item.price) * Number(item.quantity),0)
    }
  }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer