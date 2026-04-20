import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', 'isPublished'],
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
        description: 'URL-friendly identifier (auto-generate from title)',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short summary shown on cards and listings',
      },
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'author',
          type: 'text',
        },
        {
          name: 'readTime',
          type: 'number',
          admin: {
            description: 'Estimated read time in minutes',
          },
        },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Insights', value: 'insights' },
        { label: 'Case Study', value: 'case-study' },
        { label: 'News', value: 'news' },
        { label: 'Guide', value: 'guide' },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'isFeaturedOnHome',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show in the homepage blog carousel',
      },
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
