/** Formats an ISO date (YYYY-MM-DD) in Khmer, e.g. ១៨ វិច្ឆិកា ២០២៦. */
export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('km-KH', { day: 'numeric', month: 'long', year: 'numeric' })
