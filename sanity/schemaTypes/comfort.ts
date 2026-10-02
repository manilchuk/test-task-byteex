import { defineField, defineType } from 'sanity';

const comfortStep = defineType({
  name: 'comfortStep',
  title: 'Step card',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon id (from sprite.svg)',
      type: 'string',
      description: 'Напр. icon-eco-store — без "/icons/sprite.svg#".',
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
      rows: 2,
    }),
    defineField({
      name: 'tint',
      title: 'Highlighted (tinted background)?',
      type: 'boolean',
      initialValue: false,
      description: 'На макеті виділена середня картка ("We ship.").',
    }),
  ],
  preview: { select: { title: 'title' } },
});

const comfort = defineType({
  name: 'comfort',
  title: 'Comfort section',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Comfort',
      readOnly: true,
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section heading',
      type: 'string',
      initialValue: 'Comfort made easy',
    }),
    defineField({
      name: 'steps',
      title: 'Step cards (3)',
      type: 'array',
      of: [{ type: 'comfortStep' }],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA button label',
      type: 'string',
      initialValue: 'Customize Your Outfit',
    }),
  ],
});

export const comfortSchemas = [comfortStep, comfort];
