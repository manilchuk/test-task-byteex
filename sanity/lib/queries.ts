import { groq } from 'next-sanity';

export const faqQuery = groq`*[_type == "faq"][0]{ items }`;

export const heroQuery = groq`*[_type == "hero"][0]{
  title,
  bullets,
  ctaLabel,
  reviewAuthor,
  reviewBadge,
  reviewText
}`;

export const pressQuery = groq`*[_type == "press"][0]{
  label,
  logos[]{
    name,
    "imageUrl": image.asset->url
  }
}`;

export const featuresQuery = groq`*[_type == "features"][0]{
  sectionTitle,
  items,
  gallery[]{
    caption,
    "imageUrl": image.asset->url
  }
}`;

export const bestSelfQuery = groq`*[_type == "bestSelf"][0]{
  title,
  paragraphs,
  ctaLabel,
  "photoFirstUrl": photoFirst.asset->url,
  "photoSecondUrl": photoSecond.asset->url,
  "photoLastUrl": photoLast.asset->url
}`;

export const comfortQuery = groq`*[_type == "comfort"][0]{
  sectionTitle,
  steps,
  ctaLabel
}`;

export const fansQuery = groq`*[_type == "fans"][0]{
  heading,
  subheading,
  testimonials,
  ctaLabel
}`;

export const impactQuery = groq`*[_type == "impact"][0]{
  sectionTitle,
  stats
}`;

export const findSomethingQuery = groq`*[_type == "findSomething"][0]{
  title,
  subtitle,
  ctaLabel,
  shippingText,
  benefits,
  "photoLeftUrl": photoLeft.asset->url,
  "photoCenterUrl": photoCenter.asset->url,
  "photoRightUrl": photoRight.asset->url
}`;

export const headerQuery = groq`*[_type == "header"][0]{
  announcements,
  "logoUrl": logo.asset->url
}`;
