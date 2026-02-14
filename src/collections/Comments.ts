import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',

  admin: {
    useAsTitle: 'content',
    defaultColumns: ['post', 'approved', 'createdAt'],
  },

  access: {
    create: () => true, // allow anonymous
    read: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },

  fields: [
    {
      name: 'blogs',
      type: 'relationship',
      relationTo: 'blogs',
      required: true,
    },

    // Logged in user
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
    },

    // Anonymous fallback
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },

    {
      name: 'content',
      type: 'textarea',
      required: true,
    },

    {
      name: 'approved',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
