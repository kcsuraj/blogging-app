import { Document, Schema, model } from 'mongoose'
import { NextFunction } from 'express'
import bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = 10

export interface IUser extends Document {
  comparePassword: (password: string) => boolean
  createdAt?: Date
  email: string
  fullName: string
  password: string
}

const UserSchema: Schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  fullName: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
})

const Users = model<IUser>('users', UserSchema)

UserSchema.pre<IUser>('save', function (next: NextFunction) {
  const user = this
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (saltError, salt) {
    if (saltError) return next(saltError)

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (hashError, hash) {
      if (hashError) return next(hashError)

      // override the cleartext password with the hashed one
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (candidatePassword: string) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

export default Users
