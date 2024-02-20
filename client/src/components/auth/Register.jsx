import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form';
import { register } from '../../services/auth.services'
import { useState } from 'react'
import * as Yup from 'yup'

import { Formik, Form, Field } from 'formik'

function Register () {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [constants] = useState({
    EMAIL_REGEX:
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD_REGEX:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
  })
  const RegisterSchema = Yup.object().shape({
    username: Yup.string().min(5, 'username at least have 5 characters'),
    email: Yup.string()
      .required('Required')
      .matches(constants.EMAIL_REGEX, 'Invalid email'),
    password: Yup.string()
      .required('Please enter a password')
      .min(8, 'Password must have at least 8 characters')
      .matches(
        constants.PASSWORD_REGEX,
        'Use upper and lower case characters, digits and special character'
      )
  })

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: ''
      }}
      validationSchema={RegisterSchema}
      onSubmit={async values => {
        await register(values.username,values.email, values.password)
      }}
    >
      {({ errors, touched }) => (
        <Form className='mx-auto' style={{ maxWidth: '400px' }}>
          <Field type='username' name='username' />
          {errors.username && touched.username ? (
            <div>{errors.username}</div>
          ) : null}
          <Field type='email' name='email' />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field type='password' name='password' />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}

          <Button variant='primary' type='submit'>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default Register
