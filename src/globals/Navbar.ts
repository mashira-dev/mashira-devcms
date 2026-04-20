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
        description: 'Top-level navigation links (e.g. Who We Are, Resources)',
      },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'megaMenuSections',
      type: 'array',
      admin: {
        description: 'Sections shown in the "What We Do" mega-menu dropdown',
      },
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
          admin: { description: 'e.g. Data Engineering and BI' },
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
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
    {
      name: 'megaMenuTagline',
      type: 'group',
      admin: {
        description: 'Left panel text inside the mega-menu',
      },
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Turning complexity into clarity' },
        {
          name: 'body',
          type: 'textarea',
          defaultValue:
            'We combine strategy, design, technology, and data to deliver unified solutions that turn ideas into impact.',
        },
      ],
    },
  ],
}
