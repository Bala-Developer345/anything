import React, { useCallback, useState } from 'react'

const UseCallback = () =>{
    const [count,setCount] = useState(0);

    const increment = () => {
       return setCount(count + 1)
    }

    const memoizedIncrement = useCallback(()=>{
        setCount((prevCount)=>prevCount+1)
    },[count])

    return (
      <>
         
         <h1>Count : {count}</h1>
         <Child increment={increment} />
         <Child increment={memoizedIncrement} />
      </>
    )
}

const Child = ({increment}) => {
    return <button onClick={increment}> Increment</button>
}


export default UseCallback