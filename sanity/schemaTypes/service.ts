export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', type: 'text', title: 'Description' },

    // ⭐ RICH TEXT DETAIL
    {
      name: 'detail',
      title: 'Detail',
      type: 'array',
      of: [{ type: 'block' }]
    },

    { name: 'icon', type: 'image', title: 'Icon' },
    { name: 'image', type: 'image', title: 'Main Image' },
    { name: 'extraImage', type: 'image', title: 'Extra Image' }
  ]
}
