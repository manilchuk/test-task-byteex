import { defineField, defineType } from 'sanity';

const benefit = defineType({
  name: 'benefit',
  title: 'Benefit badge',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon id (from sprite.svg)',
      type: 'string',
      description: 'Напр. icon-free-shipping — без "/icons/sprite.svg#".',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title line',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Second line',
      type: 'string',
    }),
  ],
  preview: { select: { title: 'title' } },
});

const findSomething = defineType({
  name: 'findSomething',
  title: 'Find Something section',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Find Something',
      readOnly: true,
    }),
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      initialValue: 'Find something you love.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA button label',
      type: 'string',
      initialValue: 'Customize Your Outfit',
    }),
    defineField({
      name: 'shippingText',
      title: 'Shipping line',
      type: 'string',
      initialValue: 'Ships in 1-2 Days',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefit badges (3)',
      type: 'array',
      of: [{ type: 'benefit' }],
    }),
    defineField({
      name: 'photoLeft',
      title: 'Photo — left',
      type: 'image',
    }),
    defineField({
      name: 'photoCenter',
      title: 'Photo — center (tall)',
      type: 'image',
    }),
    defineField({
      name: 'photoRight',
      title: 'Photo — right',
      type: 'image',
    }),
  ],
});

export const findSomethingSchemas = [benefit, findSomething];
