import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Content } from '@radix-ui/react-select'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Archive } from 'lucide-react'
import { FormBlock } from '@/blocks/Form/config'
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
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [CallToAction, MediaBlock, FormBlock],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
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
