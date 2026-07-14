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

const unwrap = (response) => response?.data ?? response ?? {}

const normaliseCategory = (category) => {
  if (!category) return null
  if (typeof category === 'string') return { name: category, slug: category }

  return {
    ...category,
    name: category.name ?? category.title ?? 'Uncategorised',
    slug: category.slug ?? String(category.name ?? '').toLowerCase(),
  }
}

export const normalisePost = (post = {}) => ({
  ...post,
  id: post.id,
  title: post.title ?? 'Untitled post',
  slug: post.slug ?? String(post.id ?? ''),
  excerpt: post.excerpt ?? post.summary ?? '',
  content: post.content ?? post.contentHtml ?? post.body ?? '',
  featuredImage:
    post.featuredImage ?? post.image ?? post.coverImage ?? post.seoImage ?? '',
  featuredImageAlt: post.featuredImageAlt ?? post.imageAlt ?? post.title ?? '',
  category: normaliseCategory(post.category ?? post.postCategory),
  publishedAt: post.publishedAt ?? post.createdAt ?? null,
  isFeatured: Boolean(post.isFeatured ?? post.featured),
})

export const getPublishedPosts = async (params = {}, options = {}) => {
  const response = await api.get(`/api/posts${buildQuery(params)}`, {
    ...options,
    auth: false,
  })
  const payload = unwrap(response)
  const items = Array.isArray(payload)
    ? payload
    : payload.posts ?? payload.items ?? []
  const meta = response?.meta ?? response?.pagination ?? payload.meta ?? payload.pagination ?? {}

  return {
    items: items.map(normalisePost),
    pagination: {
      page: Number(meta.page ?? params.page ?? 1),
      limit: Number(meta.limit ?? params.limit ?? 9),
      total: Number(meta.total ?? items.length),
      totalPages: Number(meta.totalPages ?? meta.pages ?? 1),
    },
  }
}

export const getPublishedPost = async (slug, options = {}) => {
  const response = await api.get(`/api/posts/${encodeURIComponent(slug)}`, {
    ...options,
    auth: false,
  })

  return normalisePost(unwrap(response).post ?? unwrap(response))
}

export const getPostCategories = async (options = {}) => {
  const response = await api.get('/api/post-categories', {
    ...options,
    auth: false,
  })
  const payload = unwrap(response)
  const categories = Array.isArray(payload)
    ? payload
    : payload.categories ?? payload.items ?? []

  return categories.map(normaliseCategory)
}

