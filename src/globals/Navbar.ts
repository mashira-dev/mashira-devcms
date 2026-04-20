import type { GlobalConfig } from 'payload'

export const NavbarGlobal: GlobalConfig = {
  slug: 'navbar',
  admin: {
    group: 'Site Configuration',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navLinks',
      type: 'array',
      admin: {
        description: 'All top-level navigation links. Check "Has Mega Menu" on any link to attach a dropdown.',
      },
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
        {
          name: 'hasMegaMenu',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Enable a mega-menu dropdown for this link',
          },
        },
        {
          name: 'megaMenuTagline',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData?.hasMegaMenu,
            description: 'Left-panel text inside the dropdown',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
            },
            {
              name: 'body',
              type: 'textarea',
            },
          ],
        },
        {
          name: 'megaMenuSections',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData?.hasMegaMenu,
            description: 'Service/category sections shown in the dropdown grid',
          },
          fields: [
            {
              name: 'category',
              type: 'text',
              required: true,
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
              name: 'links',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'href', type: 'text', required: true },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: "Let's Talk" },
        { name: 'href', type: 'text', defaultValue: '/cantact' },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'linkedin', type: 'text' },
        { name: 'twitter', type: 'text' },
      ],
    },
  ],
}
