import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Posts } from './collections/Posts'
import { Testimonials } from './collections/Testimonials'
import { Partners } from './collections/Partners'
import { FunctionSolutions } from './collections/FunctionSolutions'

import { NavbarGlobal } from './globals/Navbar'
import { HomepageGlobal } from './globals/Homepage'
import { FooterGlobal } from './globals/Footer'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    // Homepage content collections
    Services,
    Posts,
    Testimonials,
    Partners,
    FunctionSolutions,
  ],
  globals: [
    NavbarGlobal,
    HomepageGlobal,
    FooterGlobal,
    SiteSettings,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
