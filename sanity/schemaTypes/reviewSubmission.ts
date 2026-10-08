import { defineField, defineType } from 'sanity';

export const reviewSubmission = defineType({
  name: 'reviewSubmission',
  title: 'Review submissions (moderation queue)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Review text',
      type: 'text',
      rows: 4,
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: rule => rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted at',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'reviewed',
      title: 'Reviewed / handled',
      description: 'Позначте, коли вже перенесли (або відхилили) цей коментар.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'text' },
  },
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
});
