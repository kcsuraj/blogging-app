import { Request, Response, NextFunction, response } from 'express'
import * as userService from './service'
import HttpStatus from 'http-status-codes'
import { Http400Error } from '../../services/errorService'
import { generateAccessToken, generateRefreshToken } from './utils/jwt'

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const existingUser = await userService.findUserByEmail(req.body.email)

    if (existingUser) {
      throw new Http400Error('User already exits')
    }

    const newUser = await userService.createUser(req.body)

    const tokenInfo = { email: newUser.email, id: newUser.id }

    const accessToken = generateAccessToken(tokenInfo)
    const refreshToken = generateRefreshToken(tokenInfo)

    res.status(HttpStatus.OK).json({
      email: newUser.email,
      fullName: newUser.fullName,
      accessToken,
      refreshToken
    })
  } catch (error) {
    next(error)
  }
}

export { createUser }
