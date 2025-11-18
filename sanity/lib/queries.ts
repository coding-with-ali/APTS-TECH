export const servicesQuery = `*[_type == "service"]{_id, title, slug, description, icon}`
export const postsQuery = `*[_type == "post"]{_id, title, slug, date, content}`
export const careersQuery = `*[_type == "career"]{_id, title, location, type}`


export const allServicesQuery = `
  *[_type == "service"]{
    title,
    slug,
    description,
    detail,
    icon{ asset->{url} },
    image{ asset->{url} }
  }
`;

