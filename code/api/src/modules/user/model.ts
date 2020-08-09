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

export default Users
