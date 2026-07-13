const TOKEN_KEY = 'wsh_admin_token'
const USER_KEY = 'wsh_admin_user'

const getStorages = () => [localStorage, sessionStorage]

export const getToken = () =>
  localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)

export const getUser = () => {
  const value =
    localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY)

  if (!value) {
    return null
  }

  try {
    return JSON.parse(value)
  } catch {
    clearSession()
    return null
  }
}

export const saveSession = ({ token, user, remember = false }) => {
  clearSession()

  const storage = remember ? localStorage : sessionStorage
  storage.setItem(TOKEN_KEY, token)

  if (user) {
    storage.setItem(USER_KEY, JSON.stringify(user))
  }
}

export const clearSession = () => {
  getStorages().forEach((storage) => {
    storage.removeItem(TOKEN_KEY)
    storage.removeItem(USER_KEY)
  })
}

export const isAuthenticated = () => Boolean(getToken())
