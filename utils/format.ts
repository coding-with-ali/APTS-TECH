export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

export const truncate = (str: string, n = 100) => (str.length > n ? str.substring(0, n) + '...' : str)
