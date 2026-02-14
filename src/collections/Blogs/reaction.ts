import type { CollectionConfig } from 'payload'

export const BlogsReactions: CollectionConfig = {
  slug: 'blogs-reactions',

  admin: {
    useAsTitle: 'id',
  },

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: ({ req }) => !!req.user, // only admin delete
  },

  fields: [
    {
      name: 'blogs',
      type: 'relationship',
      relationTo: 'blogs',
      required: true,
    },

    // Logged-in user
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
    },

    // Anonymous identifier
    {
      name: 'fingerprint',
      type: 'text',
    },

    {
      name: 'reaction',
      type: 'select',
      required: true,
      options: [
        { label: 'Like', value: 'like' },
        { label: 'Dislike', value: 'dislike' },
      ],
    },
  ],
}
