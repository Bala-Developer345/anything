const Yup = require('yup');

export const formSchema = Yup.object().shape({
    username : Yup.string().min(5).required("Username required"),
    email: Yup.string().required("email required"),
    password: Yup.string().min(5).max(20).required('password should be at minimum 5 to maximum 20')
})
