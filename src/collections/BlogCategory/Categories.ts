import type { CollectionConfig } from 'payload'

export const BlogCategories: CollectionConfig = {
  slug: 'blogscategories',

  admin: {
    useAsTitle: 'title',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
