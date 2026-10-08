import { defineField, defineType } from 'sanity';

const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Customer name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Review text',
      type: 'text',
      rows: 3,
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      initialValue: 5,
      validation: rule => rule.required().min(1).max(5).integer(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'text' },
  },
});

const fans = defineType({
  name: 'fans',
  title: 'Fans section',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Fans',
      readOnly: true,
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'What are our fans saying?',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA button label',
      type: 'string',
      initialValue: 'Customize Your Outfit',
    }),
  ],
});

export const fansSchemas = [testimonial, fans];
