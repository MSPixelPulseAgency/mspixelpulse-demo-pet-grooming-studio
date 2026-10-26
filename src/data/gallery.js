import { photos, videos } from "./media.js";
export const galleryCategories = [
  "All",
  "Grooming",
  "Bath time",
  "Coat care",
  "Portraits",
  "At home",
];
export const galleryItems = [
  { ...photos.groomer, title: "The finishing touches", category: "Grooming" },
  { ...photos.portrait, title: "Golden-hour company", category: "Portraits" },
  {
    src: videos.bathing.poster,
    alt: "A Yorkshire terrier being washed in a salon tub",
    title: "A bath-time moment",
    category: "Bath time",
  },
  {
    ...photos.puppy,
    title: "Little paws, quiet moments",
    category: "Portraits",
  },
  { ...photos.coat, title: "Time for a brush-out", category: "Coat care" },
  { ...photos.cat, title: "A softer kind of company", category: "Portraits" },
  {
    ...photos.lifestyle,
    title: "Everyday care, together",
    category: "At home",
  },
  {
    src: videos.grooming.poster,
    alt: "A groomer trimming a Yorkshire terrier’s coat",
    title: "Care in the details",
    category: "Grooming",
  },
  {
    src: videos.brushing.poster,
    alt: "A woman brushing a fluffy white dog outside",
    title: "A fresh-air brush",
    category: "Coat care",
  },
].map((item, i) => ({ ...item, id: `photo-${i + 1}`, image: item.src }));
