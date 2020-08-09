import env from '../../../config/env'
import jwbt from 'jsonwebtoken'

const { auth } = env

function generateAccessToken(data: any): string {
  return jwbt.sign(data, auth.accessTokenSecret, { expiresIn: auth.accessTokenDuration })
}

function generateRefreshToken(data: any): string {
  return jwbt.sign(data, auth.refreshTokenSecret, { expiresIn: auth.refreshTokenDuration })
}

// export function verifyToken(token: string): any {
//   return jwbt.verify(token, auth.accessTokenSecret)
// }

// export function verifyRefreshToken(token: string): object | string {
//   return jwbt.verify(token, auth.refreshTokenSecret)
// }

export { generateAccessToken, generateRefreshToken }
