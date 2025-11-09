import { type SchemaTypeDefinition } from 'sanity'
import service from '../schemaTypes/service'
import testimonial from '../schemaTypes/testimonial'
import post from '../schemaTypes/post'
import career from './career'
import industry from '../schemaTypes/industry'
import siteSettings from '../schemaTypes/siteSettings'
import blockContent from '../schemaTypes/blockContent'
import author from './author'
import application from './application'

export const schema: { types: SchemaTypeDefinition[] } = {
  types:[service, testimonial, post, career, industry, siteSettings, blockContent, author, application]}