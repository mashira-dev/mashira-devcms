import type { GlobalConfig } from 'payload'

export const FooterGlobal: GlobalConfig = {
  slug: 'footer',
  admin: {
    group: 'Site Configuration',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brandDescription',
      type: 'textarea',
      admin: {
        description: 'Short company description shown below the logo in the footer',
      },
    },
    {
      name: 'columns',
      type: 'array',
      admin: {
        description: 'Footer navigation columns',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
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
      name: 'copyrightText',
      type: 'text',
      admin: {
        description: 'Copyright line (year is appended automatically)',
      },
    },
  ],
}
