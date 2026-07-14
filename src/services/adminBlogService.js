import { api } from './api'
import { normalisePost } from './blogService'

const buildQuery = (params = {}) => {
  const query = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== '' && value !== null && value !== undefined) query.set(key, String(value))
  })
  return query.size ? `?${query.toString()}` : ''
}

const unwrap = (response) => response?.data ?? response ?? {}
const collection = (response, key, params = {}) => {
  const payload = unwrap(response)
  const items = Array.isArray(payload) ? payload : payload[key] ?? payload.items ?? []
  const meta = response?.meta ?? response?.pagination ?? payload.meta ?? payload.pagination ?? {}
  return {
    items,
    pagination: {
      page: Number(meta.page ?? params.page ?? 1),
      limit: Number(meta.limit ?? params.limit ?? 10),
      total: Number(meta.total ?? items.length),
      totalPages: Number(meta.totalPages ?? meta.pages ?? 1),
    },
  }
}

export const getAdminPosts = async (params = {}, options = {}) => {
  const response = await api.get(`/api/admin/posts${buildQuery(params)}`, options)
  const result = collection(response, 'posts', params)
  return { ...result, items: result.items.map(normalisePost) }
}

export const getAdminPost = async (id, options = {}) => {
  const response = await api.get(`/api/admin/posts/${id}`, options)
  const payload = unwrap(response)
  return normalisePost(payload.post ?? payload)
}

export const createPost = (post) => api.post('/api/admin/posts', post)
export const updatePost = (id, post) => api.patch(`/api/admin/posts/${id}`, post)
export const deletePost = (id) => api.delete(`/api/admin/posts/${id}`)
export const publishPost = (id) => api.patch(`/api/admin/posts/${id}/publish`, {})
export const unpublishPost = (id) => api.patch(`/api/admin/posts/${id}/unpublish`, {})

export const getAdminCategories = async (options = {}) => {
  const response = await api.get('/api/admin/post-categories', options)
  return collection(response, 'categories').items
}

export const createCategory = (category) => api.post('/api/admin/post-categories', category)
export const updateCategory = (id, category) => api.patch(`/api/admin/post-categories/${id}`, category)
export const deleteCategory = (id) => api.delete(`/api/admin/post-categories/${id}`)

export const uploadPostImage = async (file, options = {}) => {
  const formData = new FormData()
  formData.append('image', file)

  const response = await api.post('/api/admin/media/upload', formData, options)
  const payload = unwrap(response)
  const asset = payload.media ?? payload.asset ?? payload.image ?? payload
  const url = asset.secureUrl ?? asset.secure_url ?? asset.url

  if (!url) throw new Error('The upload completed, but the server did not return an image URL.')

  return {
    url,
    publicId: asset.publicId ?? asset.public_id ?? null,
    width: Number(asset.width ?? 0),
    height: Number(asset.height ?? 0),
    format: asset.format ?? null,
  }
}
