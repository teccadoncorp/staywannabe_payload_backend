import type { AccessArgs } from 'payload'
import type { User } from '@/payload-types'

export const authenticated = ({ req: { user } }: AccessArgs<User>) => {
  return Boolean(user)
}

export const isAdmin = ({ req: { user } }: AccessArgs<User>) => {
  return user?.role === 'admin'
}

export const isAdminOrEditor = ({ req: { user } }: AccessArgs<User>) => {
  return user?.role === 'admin' || user?.role === 'editor'
}
