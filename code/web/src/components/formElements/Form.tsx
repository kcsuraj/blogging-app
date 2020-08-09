import React, { ChangeEvent, FC, useState, FormEvent } from 'react'
import Field from './Field'
import axios from 'axios'

interface IProps {
  endpoint: string
  fields: any
  onError: any
  onSuccess: any
  renderFields: any
}

const FormComponent: FC<IProps> = ({ endpoint, fields, onError, onSuccess, renderFields }) => {
  const [formFields, setFormFields] = useState<any>(fields)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post(`http://localhost:8000/${endpoint}`, formFields)
      onSuccess(response)
    } catch (error) {
      onError(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {renderFields({
        formFields,
        onChange
      })}
    </form>
  )
}

const Form = Object.assign(FormComponent, {
  Field
})

export default Form
