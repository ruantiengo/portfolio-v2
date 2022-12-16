import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/Blog/StudioNavbar'
import Logo from './components/Blog/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
console.log(projectId, dataset);

export default defineConfig({
  name: 'contentstudio',
  title: "Ruan blog",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: Logo,
      navbar: StudioNavbar,
      logo: Logo
    }
  },
  theme: myTheme
})
