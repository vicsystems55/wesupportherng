import { api } from './api'

export const submitVolunteerApplication = (application) =>
  api.post('/api/volunteer-applications', application, { auth: false })

export const subscribeToNewsletter = (subscriber) =>
  api.post('/api/newsletter/subscriptions', subscriber, { auth: false })

export const submitContactMessage = async (message) => {
  const payload = { ...message }

  // A human leaves the honeypot empty. Omitting it also prevents a backend
  // presence check from mistaking an empty field for spam.
  if (!String(payload.website || '').trim()) {
    delete payload.website
  }

  const response = await api.post('/api/contact-submissions', payload, {
    auth: false,
  })

  if (response?.success === false) {
    throw new Error(response.message || 'The server could not save your message.')
  }

  const savedSubmission =
    response?.data?.submission ??
    response?.submission ??
    response?.data ??
    response

  if (!savedSubmission?.id) {
    throw new Error(
      'The server responded, but did not confirm that your message was saved.',
    )
  }

  return response
}
