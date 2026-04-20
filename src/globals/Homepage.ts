import type { GlobalConfig } from 'payload'

export const HomepageGlobal: GlobalConfig = {
  slug: 'homepage',
  admin: {
    group: 'Site Configuration',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'headline',
          type: 'text',
          required: true,
          admin: {
            description: 'Main headline text (supports line breaks via \\n)',
          },
        },
        {
          name: 'subheadline',
          type: 'textarea',
          admin: {
            description: 'Supporting text below the headline',
          },
        },
        {
          name: 'primaryCTA',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', defaultValue: 'Book a Consultation' },
            { name: 'href', type: 'text', defaultValue: '/cantact' },
          ],
        },
        {
          name: 'secondaryCTA',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', defaultValue: 'Explore our work' },
            { name: 'href', type: 'text', defaultValue: '/what-we-do' },
          ],
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      admin: {
        description: 'Key stats shown in the partners / social proof section',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'e.g. 120+' },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'e.g. Enterprise Clients' },
        },
      ],
    },
    {
      name: 'whyMashira',
      type: 'array',
      admin: {
        description: 'Items for the "Why Mashira" sticky-scroll section',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'illustration',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: { description: 'Browser tab title' },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: { description: 'Meta description for search engines' },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Open Graph social share image' },
        },
      ],
    },
  ],
}
