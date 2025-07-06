import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Projeto CurtainCall',

  projectId: 'j4tmxn8e',
  dataset: 'dataser_base',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
