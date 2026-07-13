import { getToken } from './authStorage'

const DEFAULT_API_BASE_URL = 'http://localhost:5000'

export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL
).replace(/\/$/, '')

export class ApiError extends Error {
  constructor(message, { status = 0, data = null } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

const buildUrl = (path) => {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  return `${API_BASE_URL}/${path.replace(/^\//, '')}`
}

const parseResponse = async (response) => {
  if (response.status === 204) {
    return null
  }

  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    return response.json().catch(() => null)
  }

  const text = await response.text()
  return text || null
}

export const apiRequest = async (
  path,
  { auth = true, body, headers = {}, ...options } = {},
) => {
  const token = auth ? getToken() : null
  const isFormData = body instanceof FormData
  const requestHeaders = new Headers(headers)

  requestHeaders.set('Accept', 'application/json')

  if (token) {
    requestHeaders.set('Authorization', `Bearer ${token}`)
  }

  if (body != null && !isFormData) {
    requestHeaders.set('Content-Type', 'application/json')
  }

  let response

  try {
    response = await fetch(buildUrl(path), {
      credentials: 'include',
      ...options,
      headers: requestHeaders,
      body: body != null && !isFormData ? JSON.stringify(body) : body,
    })
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw error
    }

    throw new ApiError(
      'Unable to connect to the server. Please check your connection and try again.',
    )
  }

  const data = await parseResponse(response)

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      (typeof data === 'string' ? data : null) ||
      `Request failed with status ${response.status}.`

    throw new ApiError(message, { status: response.status, data })
  }

  return data
}

export const api = {
  get: (path, options) => apiRequest(path, { ...options, method: 'GET' }),
  post: (path, body, options) =>
    apiRequest(path, { ...options, method: 'POST', body }),
  put: (path, body, options) =>
    apiRequest(path, { ...options, method: 'PUT', body }),
  patch: (path, body, options) =>
    apiRequest(path, { ...options, method: 'PATCH', body }),
  delete: (path, options) =>
    apiRequest(path, { ...options, method: 'DELETE' }),
}
