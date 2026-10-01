import { groq } from 'next-sanity';

// Беремо єдиний ("singleton") документ faq і тільки поле items.
export const faqQuery = groq`*[_type == "faq"][0]{ items }`;

// Єдиний документ hero цілком.
export const heroQuery = groq`*[_type == "hero"][0]{
  title,
  bullets,
  ctaLabel,
  reviewAuthor,
  reviewBadge,
  reviewText
}`;

// Єдиний документ press: label + логотипи. Для кожного logo одразу
// "розгортаємо" asset-> у пряме посилання на файл (url).
export const pressQuery = groq`*[_type == "press"][0]{
  label,
  logos[]{
    name,
    "imageUrl": image.asset->url
  }
}`;

// Єдиний документ features: заголовок + 4 переваги + фото галереї
// (теж одразу розгортаємо image.asset->url).
export const featuresQuery = groq`*[_type == "features"][0]{
  sectionTitle,
  items,
  gallery[]{
    caption,
    "imageUrl": image.asset->url
  }
}`;
