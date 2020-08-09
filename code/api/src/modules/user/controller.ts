import { Request, Response, NextFunction, response } from 'express'
import * as userService from './service'
import HttpStatus from 'http-status-codes'
import { Http400Error } from '../../services/errorService'

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const existingUser = await userService.findUserByEmail(req.body.email)

    if (existingUser) {
      throw new Http400Error('User already exits')
    }

    await userService.createUser(req.body)
    res.status(HttpStatus.OK).json({ status: 200 })
  } catch (error) {
    next(error)
  }
}

export { createUser }
