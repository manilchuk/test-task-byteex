import { faqSchemas } from './faq';
import { heroSchemas } from './hero';
import { pressSchemas } from './press';
import { featuresSchemas } from './features';

export const schemaTypes: unknown[] = [
  ...faqSchemas,
  ...heroSchemas,
  ...pressSchemas,
  ...featuresSchemas,
];
