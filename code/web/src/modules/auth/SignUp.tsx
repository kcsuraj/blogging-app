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
        endpoint="signup"
        fields={{
          organization: '',
          password: '',
          username: ''
        }}
        onSuccess={handleSuccess}
        onError={handleError}
        renderFields={({ formFields, ...rest }: any) => {
          return (
            <Fragment>
              <Form.Field name="email" type="text" placeholder="Username" value={formFields.username} {...rest} />
              <Form.Field
                name="password"
                type="password"
                placeholder="Password"
                value={formFields.password}
                {...rest}
              />
              <Form.Field
                name="organization"
                type="text"
                placeholder="Organization"
                value={formFields.organization}
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
