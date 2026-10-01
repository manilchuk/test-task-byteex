import { defineField, defineType } from 'sanity';

const featureItem = defineType({
  name: 'featureItem',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon id (from sprite.svg)',
      type: 'string',
      description: 'Напр. icon-packaging — без "/icons/sprite.svg#".',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: { select: { title: 'title' } },
});

const gallerySlide = defineType({
  name: 'gallerySlide',
  title: 'Gallery photo',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'caption', media: 'image' },
  },
});

const features = defineType({
  name: 'features',
  title: 'Features section',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Features',
      readOnly: true,
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section heading',
      type: 'string',
      initialValue: 'Loungewear you can be proud of.',
    }),
    defineField({
      name: 'items',
      title: 'Feature list (4 items)',
      type: 'array',
      of: [{ type: 'featureItem' }],
    }),
    defineField({
      name: 'gallery',
      title: 'Product gallery photos',
      type: 'array',
      of: [{ type: 'gallerySlide' }],
    }),
  ],
});

export const featuresSchemas = [featureItem, gallerySlide, features];
