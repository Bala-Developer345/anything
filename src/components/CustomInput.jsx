import React ,{useRef} from 'react'

const CustomInput = React.forwardRef((props,ref) => {
  return (
   <>
     <input type='text' ref={ref} {...props} />
   </>
  )
})

export default CustomInput
