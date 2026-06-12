import { Cat, Dog, Heart, PawPrint, ShieldCheck, Sparkles } from 'lucide-react';

const icons = [Dog, Cat, Heart, Sparkles, ShieldCheck, PawPrint];

export default function PetTypeCards({ items }) {
  return (
    <div className="pet-type-grid">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article className={`pet-type-card ${item.tone}`} key={item.title}>
            <Icon size={24} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}
