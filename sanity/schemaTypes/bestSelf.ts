import { defineField, defineType } from 'sanity';

const bestSelf = defineType({
  name: 'bestSelf',
  title: '"Be your best self" section',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Be your best self',
      readOnly: true,
    }),
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      initialValue: 'Be your best self.',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Story paragraphs (in order)',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA button label',
      type: 'string',
      initialValue: 'Customize Your Outfit',
    }),
    defineField({
      name: 'photoFirst',
      title: 'Photo — top-left small',
      type: 'image',
    }),
    defineField({
      name: 'photoSecond',
      title: 'Photo — center large',
      type: 'image',
    }),
    defineField({
      name: 'photoLast',
      title: 'Photo — bottom-right small',
      type: 'image',
    }),
  ],
});

export const bestSelfSchemas = [bestSelf];
