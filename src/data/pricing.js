import { services } from "./services.js";
const packages = [
  ["Nail Trim", 4],
  ["Bath & Brush", 3],
  ["Small Dog Groom", 0],
  ["Medium Dog Groom", 0],
  ["Large Dog Groom", 0],
  ["Cat Grooming", 1],
  ["Puppy First Groom", 2],
  ["De-shedding Add-on", 5],
  ["Teeth Brushing Add-on", 7],
  ["Sanitary Trim", 9],
];
export const pricing = packages.map(([service, index]) => ({
  ...services[index],
  id: service.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  service,
  detail: services[index].description,
  included: services[index].bestFor,
  price: "Pricing to be confirmed",
}));
export const priceReasons = [
  "Pet size",
  "Coat length and condition",
  "Styling preferences",
  "Handling and comfort needs",
  "Additional services",
  "Appointment requirements",
];
