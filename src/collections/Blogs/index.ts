import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
export const Blogs: CollectionConfig = {
  slug: 'blogs',

  access: {
    create: authenticated,
    update: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
  },

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
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
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'audio',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'blogType',
      type: 'select',
      options: [
        { label: 'Text', value: 'text' },
        { label: 'Image', value: 'image' },
        { label: 'Video', value: 'video' },
        { label: 'Audio', value: 'audio' },
      ],
      defaultValue: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },

    // Tags
    {
      name: 'tags',
      type: 'text',
      hasMany: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'blogscategories',
      hasMany: true,
      required: true,
    },
    {
      name: 'readTime',
      type: 'number',
      admin: {
        description: 'Estimated read time in minutes',
      },
    },

    {
      name: 'publishedAt',
      type: 'date',
    },
  ],

  versions: {
    drafts: true,
  },
}
