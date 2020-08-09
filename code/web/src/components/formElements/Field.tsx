import React, { ChangeEvent, FC } from 'react'

interface IProps {
  /**
   * Error message displayed from server or validation
   */
  error?: string
  /**
   *
   * Name attribute of the input element.
   */
  name: string
  /**
   *
   * Pass change event to parent component
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  /**
   *
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: string
  /**
   *
   * Type of the input element. It should be a valid HTML5 input type
   */
  type: string
  /**
   *
   * The value of the input element, required for a controlled component.
   */
  value: string
}

const Field: FC<IProps> = ({ error, name, onChange, placeholder, type, value }) => {
  return (
    <div>
      <input name={name} onChange={onChange} placeholder={placeholder} type={type} value={value} />
      {error && <span>{error}</span>}
    </div>
  )
}

export default Field
