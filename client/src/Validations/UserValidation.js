import * as yup from 'yup';


export const userSchema = yup.object().shape({
    username: yup.string().min(5).max(20).required('Username is required!'),
    email: yup.string().email('Wrong email').required('Email is required!'),
    password: yup.string().min(4).max(15).required('Password is required!'),
    rePass: yup.string().oneOf([yup.ref("password"), null], 'Password must match!')
})

export const userLoginSchema = yup.object().shape({
    email: yup.string().email('Wrong email').required('Email is required!'),
    password: yup.string().min(4).max(15).required('Password is required!'),
})