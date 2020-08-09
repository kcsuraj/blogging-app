import userModel, { IUser } from './model'
import { MongooseService } from '../../services'
import { Http400Error } from '../../services/errorService'
import bcrypt from 'bcrypt'

const mongooseService = new MongooseService(userModel)

const SALT_WORK_FACTOR = 10

/**
 * Find user by email address
 * @param { email } IUser['email']
 * @returns {Promise<IUser>}
 */
function findUserByEmail(email: IUser['email']) {
  return mongooseService.findOne({ email })
}

/**
 * Create a user
 * @param { IUser } user
 * @returns {Promise<IUser>}
 */
function createUser(user: IUser) {
  // Generate password hash using bcrypt
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
  const hash = bcrypt.hashSync(user.password, salt)

  return mongooseService.create({ ...user, password: hash })
}

export { findUserByEmail, createUser }
