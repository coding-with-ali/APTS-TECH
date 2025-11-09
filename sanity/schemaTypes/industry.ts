export default {
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' }
  ]
}
