import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'clientCompany', 'order', 'isActive'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'clientTitle',
      type: 'text',
      required: true,
      admin: {
        description: 'Job title (e.g. Chief Data Officer)',
      },
    },
    {
      name: 'clientCompany',
      type: 'text',
      required: true,
    },
    {
      name: 'clientPhoto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order in the carousel (lower = first)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
