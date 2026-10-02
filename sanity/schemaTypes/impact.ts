import { defineField, defineType } from 'sanity';

const impactStat = defineType({
  name: 'impactStat',
  title: 'Stat',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon id (from sprite.svg)',
      type: 'string',
      description: 'Напр. icon-co2 — без "/icons/sprite.svg#".',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'Напр. "3,927 kg"',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Напр. "of CO2 saved"',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'value', subtitle: 'label' },
  },
});

const impact = defineType({
  name: 'impact',
  title: 'Impact section',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title (not shown on site)',
      type: 'string',
      initialValue: 'Impact',
      readOnly: true,
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section heading',
      type: 'string',
      initialValue: 'Our total green impact',
    }),
    defineField({
      name: 'stats',
      title: 'Stats (3)',
      type: 'array',
      of: [{ type: 'impactStat' }],
    }),
  ],
});

export const impactSchemas = [impactStat, impact];
