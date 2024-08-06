import React from 'react'

const Child = ({increment}) => {
  return (
    <div onClick={increment}>increment in child</div>
  )
}

export default Child