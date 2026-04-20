import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order', 'isActive'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. gen-ai-knowledge-engines)',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Strategy', value: 'strategy' },
        { label: 'Data & Analytics', value: 'data' },
        { label: 'AI & Automation', value: 'ai' },
        { label: 'Business Solutions', value: 'business' },
        { label: 'Cloud Infrastructure', value: 'cloud' },
        { label: 'Support & Governance', value: 'support' },
      ],
    },
    {
      name: 'shortDescription',
      type: 'text',
      required: true,
      admin: {
        description: 'Used in cards and mega-menu previews',
      },
    },
    {
      name: 'fullDescription',
      type: 'richText',
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Strategy', value: 'strategy' },
        { label: 'Data', value: 'data' },
        { label: 'AI', value: 'ai' },
        { label: 'Business', value: 'business' },
        { label: 'Cloud', value: 'cloud' },
        { label: 'Support', value: 'support' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'isFeaturedOnHome',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this service in the homepage "What We Do" scroll section',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower = first)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
