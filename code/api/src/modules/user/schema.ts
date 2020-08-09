import Joi from 'joi'

const MINIMUM_PASSWORD_LENGTH = 6

const schema = {
  createUser: Joi.object().keys({
    email: Joi.string().email().required(),
    fullName: Joi.string().required(),
    password: Joi.string().min(MINIMUM_PASSWORD_LENGTH).required()
  })
}

export default schema
