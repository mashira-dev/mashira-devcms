import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Site Configuration',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      defaultValue: 'Mashira',
    },
    {
      name: 'email',
      type: 'email',
      defaultValue: 'contact@mashira.io',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'locations',
      type: 'array',
      admin: {
        description: 'Office locations shown in footer and contact page',
      },
      fields: [
        {
          name: 'country',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
      ],
    },
    {
      name: 'consultationUrl',
      type: 'text',
      admin: {
        description: 'External booking link (e.g. Calendly)',
      },
    },
  ],
}
