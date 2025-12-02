import { type SchemaTypeDefinition } from 'sanity'
import service from '../schemaTypes/service'
import post from '../schemaTypes/post'
import career from './career'
import blockContent from '../schemaTypes/blockContent'
import author from './author'
import contactForm from './contactForm'
import application from './application'

export const schema: { types: SchemaTypeDefinition[] } = {
  types:[service, contactForm, post, career, blockContent, author, application]}