import {defineConfig, WorkspaceOptions} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/Blog/StudioNavbar';
import { getDefaultDocumentNode } from './strucutre';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig<WorkspaceOptions>({
  name: 'contentstudio',
  title: "Ruan blog",
  basePath: '/studio',
  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: StudioNavbar
    }
  },

  theme: myTheme
})
