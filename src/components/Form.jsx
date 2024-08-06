// import React,{useState} from 'react'

// const Form = () => {
//   const [name,setName] = useState('');
//   const [age,setAge] = useState('');
//   const [hintName,setHintName] = useState('')
//   const [hintAge,setHintAge] = useState('')

//   // const [view,setView] = useState('')

//   const nameValid = (e) => {
//     setName(e.target.value)
//   }

//   const ageValid = (e) => {
//     setAge(e.target.value)
//   }

//   const submitData = (e) => {
//     e.preventDefault();
//      if(!name){
//       setHintName('Name much fill')
//      }else{
//       setHintName('')
//      }
//      if(!age){
//       setHintAge('Age much fill')
//      }else{
//       setHintAge('')
//      }
//   }

//   return (
//     <div>
//          <form method='post' onSubmit={submitData}>
//         <input
//           type="text"
//           value={name}
//           onChange={nameValid}
//         />
//         <input type="number" value={age} onChange={ageValid} />
//         <button type="submit">Submit</button>
//       </form>

//       <h1>{hintName}</h1>
//       <h1>{hintAge}</h1>
//     </div>
//   )
// }

// export default Form


import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const nameValid = (e) => {
    setName(e.target.value)
  };
  const ageValid = (e) =>{
    setAge(e.target.value)
  }
  return (
    <div>
      <form method='post'>
        <input type="text" value={name} onChange={nameValid} /><br />
        <input type="text" value={age} onChange={ageValid} /><br />
        <div>
          {name && age ? <button>Submit</button> : "Please Fill out the form"}
        </div>
      </form>
    </div>
  )
}

export default Form