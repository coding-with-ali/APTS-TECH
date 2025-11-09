export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'icon', type: 'image', title: 'Icon' }
  ]
}
