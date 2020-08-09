import userModel, { IUser } from './model'
import { MongooseService } from '../../services'
import { hash } from './utils/bcrypt'

const mongooseService = new MongooseService(userModel)

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
  return mongooseService.create({ ...user, password: hash(user.password) })
}

export { findUserByEmail, createUser }
