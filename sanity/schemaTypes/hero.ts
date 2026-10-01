import { defineField, defineType } from 'sanity';

const heroBullet = defineType({
  name: 'heroBullet',
  title: 'Bullet point',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon id (from sprite.svg)',
      type: 'string',
      description: 'Напр. icon-comfort — без "/icons/sprite.svg#", лише саме ім\u2019я.',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: rule => rule.required(),
    }),
  ],
  preview: { select: { title: 'text' } },
});

const hero = defineType({
  name: 'hero',
  title: 'Hero section',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Hero',
      readOnly: true,
    }),
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'bullets',
      title: 'Bullet points',
      type: 'array',
      of: [{ type: 'heroBullet' }],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA button label',
      type: 'string',
      initialValue: 'Customize Your Outfit',
    }),
    defineField({
      name: 'reviewAuthor',
      title: 'Review: author name',
      type: 'string',
    }),
    defineField({
      name: 'reviewBadge',
      title: 'Review: badge text',
      type: 'string',
      description: 'Напр. "One of 500+ 5 Star Reviews Online"',
    }),
    defineField({
      name: 'reviewText',
      title: 'Review: text',
      type: 'text',
      rows: 3,
    }),
  ],
});

export const heroSchemas = [heroBullet, hero];
