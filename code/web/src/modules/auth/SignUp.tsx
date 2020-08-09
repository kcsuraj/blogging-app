import React, { FC, Fragment } from 'react'
import { Form } from '../../components'

const SignIn: FC = () => {
  const handleSuccess = (data: any) => {
    // Redirec to dashboard
  }

  const handleError = (error: Error) => {
    // Show error
  }

  return (
    <div>
      <Form
        endpoint="api/user/signup"
        fields={{
          email: '',
          fullName: '',
          password: ''
        }}
        onSuccess={handleSuccess}
        onError={handleError}
        renderFields={({ formFields, ...rest }: any) => {
          return (
            <Fragment>
              <Form.Field name="email" type="text" placeholder="Email address" value={formFields.email} {...rest} />
              <Form.Field name="fullName" type="text" placeholder="Full name" value={formFields.fullName} {...rest} />
              <Form.Field
                name="password"
                type="password"
                placeholder="Password"
                value={formFields.password}
                {...rest}
              />
              <button type="submit">Submit</button>
            </Fragment>
          )
        }}
      />
    </div>
  )
}

export default SignIn
