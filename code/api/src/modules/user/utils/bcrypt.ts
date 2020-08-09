import bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = 10

function hash(text: string) {
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
  return bcrypt.hashSync(text, salt)
}

export { hash }
