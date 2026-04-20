import type { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order', 'isActive'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        description: 'Partner website URL (optional)',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order in the marquee (lower = first)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
