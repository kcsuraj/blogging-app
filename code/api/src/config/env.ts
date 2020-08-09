import dotenv from 'dotenv'
// Load.env
dotenv.config()

/**
 * Map environment variables using dotenv
 */
export default {
  auth: {
    accessTokenDuration: process.env.ACCESS_TOKEN_DURATION,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET_KEY,
    refreshTokenDuration: process.env.REFRESH_TOKEN_DURATION,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET_KEY
  },
  db: {
    uri: process.env.DB_URI,
    name: process.env.DB_NAME
  },
  port: process.env.PORT
}
