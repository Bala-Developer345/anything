import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from './CustomInput';

const ReactFrom = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues : {
            firstName : '',
            lastName : ''
        }
    });
    console.log(errors);



  return (
    <div className='react__form'>
        <form onSubmit={handleSubmit((data)=>{
             console.log(data)
        })}>
            <input type="text" {...register('firstName',{required: 'first name required',minLength:{
                value : 4,
                message : "Min length is 4"
            }})} placeholder='First Name' />
            <p className='text-danger'>{errors.firstName?.message}</p>
            <input type="text" {...register('lastName',{required : 'last name required',minLength:{
                value : 5,
                message : 'Min length is 5'
            } })} placeholder='Last Name' />
            <p className='text-danger'>{errors.lastName?.message}</p>
            <input type="submit" className='submit__btn' />
        </form>
    </div>
  )
}

export default ReactFrom
