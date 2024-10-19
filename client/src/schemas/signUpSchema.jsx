import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(20).required('Please enter your name'),
  username: Yup.string().min(2).max(20).required('Please enter your username'),
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(6).required('Please enter your password'),
  confirm_password: Yup.string()
    .required('Please enter your password')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
});
