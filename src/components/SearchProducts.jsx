import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const SearchProducts = () => {

    const [data,setData] = useState(null)
    const [userId,setUserId] = useState(1);

    const usersData = `https://jsonplaceholder.typicode.com/users/${userId}`;
    //  useEffect(()=>{
    //     const fetchData = async () => {
    //         const response = await fetch(usersData);
    //         const result = await response.json();
    //         setData(result)
    //     };
    //     fetchData();
    //  },[userId])
    useEffect(()=>{
        fetch(usersData).then((values)=>values.json()).then(value => setData(value))
    },[userId])
  return (
    <div>
       <h2>Fetching Data with search</h2>
       <label>User Id :</label>
       <input type="number" 
       value={userId} 
       onChange={(e)=>setUserId(Number(e.target.value))} />
      {
     data.map((el)=>{
            return <>
             <h1>{el.name}</h1>
            </>
        })
      }
    </div>
  )
}

export default SearchProducts
