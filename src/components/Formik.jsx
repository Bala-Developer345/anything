import { useFormik } from 'formik';
import React from 'react';
import { formSchema } from './ValidationForm';


const Formik = () => {

    const formikData = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:''
        },
        validationSchema: formSchema,   
        // validate: function(data){
        //     let errors = {};

        //     if(!data.username){
        //         errors.username = "Username is required"
        //     }
        //     if(!data.email){
        //         errors.email = 'Email is required'
        //     }
        //     if(!data.password){
        //         errors.password = "password is required"
        //     }
        //     return errors ;
        // }
    })

    console.log(formikData.validationSchema)

    const collectData = (e) => {
       e.preventDefault();
       
    }
    
  return (
    <>
      <form method='POST' onSubmit={collectData}>
          <label htmlFor="">Username </label><br />
          <input type="text" name='username' value={formikData.values.username} onChange={formikData.handleChange} /><br />
          {formikData.errors.username ? <p className='fw-light'>{formikData.errors.username}</p> : null}
          <label htmlFor="">Email </label><br />
          <input type="email" name='email' values={formikData.values.email}  onChange={formikData.handleChange}  /><br />
          {formikData.errors.email ? <p className='fw-light'>{formikData.errors.email}</p> : null}
          <label htmlFor="">Password </label><br />
          <input type="password" name='password' value={formikData.values.password} onChange={formikData.handleChange}  /><br />
          {formikData.errors.password ? <p className='fw-light'>{formikData.errors.password}</p> : null}
          <button type="submit" className='btn btn-info'>Submit</button>
      </form>
    </>
  )
}

export default Formik