import { CalendarCheck, ClipboardList, HeartHandshake, Sparkles, Smile } from 'lucide-react';

export const processSteps = [
  { title: 'Request Appointment', text: 'Pet parents start with a clear, friendly booking flow.', icon: CalendarCheck },
  { title: 'Share Pet Details', text: 'Size, coat, service needs, and comfort notes are easy to collect.', icon: ClipboardList },
  { title: 'Gentle Grooming Session', text: 'The template positions calm handling and salon trust.', icon: HeartHandshake },
  { title: 'Fresh Finish', text: 'Service pages highlight tidy coats, paws, and finishing touches.', icon: Sparkles },
  { title: 'Happy Pet Pickup', text: 'A warm final step keeps the experience reassuring.', icon: Smile },
];

export const petTypes = [
  { title: 'Playful Puppies', text: 'Soft first-groom copy for curious little clients.', tone: 'peach' },
  { title: 'Calm Cats', text: 'Gentle feline-friendly pages with clear service expectations.', tone: 'sky' },
  { title: 'Senior Pets', text: 'Slow, comfort-first wording for older pets.', tone: 'sage' },
  { title: 'Long-Haired Breeds', text: 'Detailed care cards for brushing, trims, and coat upkeep.', tone: 'blush' },
  { title: 'Double-Coated Dogs', text: 'Seasonal de-shedding content with practical booking cues.', tone: 'lavender' },
  { title: 'Nervous First-Timers', text: 'Trust-building language for pets who need extra patience.', tone: 'cream' },
];

export const beforeAfterCards = [
  { before: 'Messy Coat', after: 'Fresh Groom', text: 'A demo comparison card for visual storytelling.' },
  { before: 'Long Nails', after: 'Clean Paw Care', text: 'A gentle way to explain routine maintenance.' },
  { before: 'Shed Season', after: 'Soft Brush-Out', text: 'Coat-care messaging without claiming real results.' },
];

export const canadaCities = ['Toronto', 'Brampton', 'Mississauga', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Montreal'];
