import React, { useState } from 'react'

const Select = () => {
    const countries = [
       {
        name:'India',
        value:'IN',
        cities:[
          'Amaravathi',
          'Hyderabad'
        ]
       },
       {
        name:'Pak',
        value:'PK',
        cities:[
          'Lahore',
          'Karachi'
        ]
       },
       {
        name:'Bangladesh',
        value:'BG',
        cities:[
          'Dhata',
          'chittgorha'
        ]
       }
    ]
    const [country,setCountry ] = useState()
  return (
    <>
       <select value={country} onChange={(e) => {
        console.log(e.target.value)
        setCountry(e.target.value)}}>
        {
            countries.map((el)=>{
                return <option value={el.value}>{el.name}</option>
            })
        }
       </select>
       <select value={country}>
          {countries[country].cities.map((el,index)=>{
            return <option value={index} >{el}</option>
          })}
       </select>
    </>
  )
}

export default Select