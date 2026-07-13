import { api } from './api'

export const submitVolunteerApplication = (application) =>
  api.post('/api/volunteer-applications', application, { auth: false })

export const subscribeToNewsletter = (subscriber) =>
  api.post('/api/newsletter/subscriptions', subscriber, { auth: false })
