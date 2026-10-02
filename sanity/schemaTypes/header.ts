import { defineField, defineType } from 'sanity';

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Header',
      readOnly: true,
    }),
    defineField({
      name: 'announcements',
      title: 'Announcement bar lines',
      description: 'Рядки у верхній смузі, розділені "|".',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
  ],
});

export const headerSchemas = [header];
