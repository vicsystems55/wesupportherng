import { api } from './api'

const buildQuery = (params = {}) => {
  const query = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== '' && value !== null && value !== undefined) {
      query.set(key, String(value))
    }
  })

  const value = query.toString()
  return value ? `?${value}` : ''
}

const normalizeCollection = (response, collectionKey) => {
  const nested = response?.data
  const items = Array.isArray(response)
    ? response
    : Array.isArray(nested)
      ? nested
      : response?.[collectionKey] || nested?.[collectionKey] || nested?.items || []

  const meta =
    response?.meta ||
    response?.pagination ||
    nested?.meta ||
    nested?.pagination ||
    {}

  return {
    items,
    pagination: {
      page: Number(meta.page || 1),
      limit: Number(meta.limit || 10),
      total: Number(meta.total || items.length),
      totalPages: Number(meta.totalPages || 1),
    },
    summary: response?.summary || nested?.summary || {},
  }
}

export const getVolunteerApplications = async (params, options = {}) => {
  const response = await api.get(
    `/api/admin/volunteer-applications${buildQuery(params)}`,
    options,
  )

  return normalizeCollection(response, 'applications')
}

export const updateVolunteerApplicationStatus = (id, status) =>
  api.patch(`/api/admin/volunteer-applications/${id}/status`, { status })

export const getNewsletterSubscribers = async (params, options = {}) => {
  const response = await api.get(
    `/api/admin/newsletter/subscribers${buildQuery(params)}`,
    options,
  )

  return normalizeCollection(response, 'subscribers')
}

export const updateNewsletterSubscriberStatus = (id, status) =>
  api.patch(`/api/admin/newsletter/subscribers/${id}/status`, { status })

export const getContactSubmissions = async (params = {}, options = {}) => {
  const response = await api.get(
    `/api/admin/contact-submissions${buildQuery(params)}`,
    options,
  )

  return normalizeCollection(response, 'submissions')
}

export const getContactSubmission = async (id, options = {}) => {
  const response = await api.get(`/api/admin/contact-submissions/${id}`, options)

  return response?.data?.submission ?? response?.submission ?? response?.data ?? response
}

export const updateContactSubmissionStatus = (id, status) =>
  api.patch(`/api/admin/contact-submissions/${id}/status`, { status })
