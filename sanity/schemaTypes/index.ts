import { faqSchemas } from './faq';
import { heroSchemas } from './hero';
import { pressSchemas } from './press';
import { featuresSchemas } from './features';
import { bestSelfSchemas } from './bestSelf';
import { comfortSchemas } from './comfort';
import { fansSchemas } from './fans';
import { impactSchemas } from './impact';
import { findSomethingSchemas } from './findSomething';
import { headerSchemas } from './header';
import { reviewSubmission } from './reviewSubmission';

export const schemaTypes = [
  ...faqSchemas,
  ...heroSchemas,
  ...pressSchemas,
  ...featuresSchemas,
  ...bestSelfSchemas,
  ...comfortSchemas,
  ...fansSchemas,
  ...impactSchemas,
  ...findSomethingSchemas,
  ...headerSchemas,
  reviewSubmission,
];
