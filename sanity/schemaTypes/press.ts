import { defineField, defineType } from 'sanity';

const pressLogo = defineType({
  name: 'pressLogo',
  title: 'Press logo',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Publication name (used as alt text)',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Logo image',
      type: 'image',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
});

const press = defineType({
  name: 'press',
  title: 'Press section',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Press',
      readOnly: true,
    }),
    defineField({
      name: 'label',
      title: 'Label above the logos',
      type: 'string',
      initialValue: 'as seen in',
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{ type: 'pressLogo' }],
    }),
  ],
});

export const pressSchemas = [pressLogo, press];
