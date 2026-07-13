import { api } from './api'
import { clearSession, saveSession } from './authStorage'

const extractSession = (response) => {
  const payload = response?.data || response || {}
  const token = payload.token || payload.accessToken
  const user = payload.user || payload.admin || null

  if (!token) {
    throw new Error('The server did not return an authentication token.')
  }

  return { token, user }
}

export const login = async ({ email, password, remember = false }) => {
  const response = await api.post(
    '/api/auth/login',
    { email, password },
    { auth: false },
  )
  const session = extractSession(response)

  saveSession({ ...session, remember })

  return session
}

export const logout = async () => {
  try {
    await api.post('/api/auth/logout')
  } finally {
    clearSession()
  }
}
