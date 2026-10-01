import { defineField, defineType } from 'sanity';

const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ item',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 3,
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'question' },
  },
});

const faq = defineType({
  name: 'faq',
  title: 'FAQ section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'FAQ',
      readOnly: true,
    }),
    defineField({
      name: 'items',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'faqItem' }],
    }),
  ],
});

export const faqSchemas = [faqItem, faq];
