import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { login } from '../../services/auth.services'
import { useUser } from '../../stores/userStore'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

function Login () {
  const [setUser] = useUser(state => [state.setUser])
  const [constants] = useState({
    EMAIL_REGEX:
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD_REGEX:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
  })

  const LoginSchema = Yup.object().shape({
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
      <div
      style={{
        background:
          'linear-gradient(to bottom right, #94a3e8, #c79fef, #ffb6d9)', // Lighter shades of Blue to Purple to Pink
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Adjust as needed
      }}
    >
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={async values => {
          const res = await login(values.email, values.password)

          setUser(res.data.user)
        }}
      >
        {({ errors, touched }) => (
          <Form
            className='p-4'
            style={{
              maxWidth: '400px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: 'rgba(255, 255, 255, 0.9)' // Semi-transparent white background
            }}
          >
            <Field type='email' name='email' />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <Field type='password' name='password' />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            {/* Additional styles */}
            <Button
              variant='primary'
              type='submit'
              style={{
                backgroundColor: '#ffb6d9', // Light Pink
                borderColor: '#ffb6d9', // Light Pink
                transition:
                  'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out'
              }}
            >
              Connect
            </Button>
          </Form>
        )}
      </Formik>
    </div>
      
  );
}


 


export default Login
