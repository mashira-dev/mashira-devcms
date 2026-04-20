import type { CollectionConfig } from 'payload'

export const FunctionSolutions: CollectionConfig = {
  slug: 'function-solutions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'function', 'order', 'isActive'],
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
      admin: {
        description: 'Card headline (e.g. Finance & Accounting)',
      },
    },
    {
      name: 'function',
      type: 'select',
      required: true,
      options: [
        { label: 'Finance', value: 'finance' },
        { label: 'Sales', value: 'sales' },
        { label: 'HR', value: 'hr' },
        { label: 'Operations', value: 'operations' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'capabilities',
      type: 'array',
      admin: {
        description: 'Bullet-point capabilities shown on the card',
      },
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional icon or illustration for the card',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
