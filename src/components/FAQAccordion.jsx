import { PawPrint } from 'lucide-react';

export default function FAQAccordion({ items, preview = false }) {
  const faqs = preview ? items.slice(0, 4) : items;

  return (
    <div className={`faq-list ${preview ? 'preview' : ''}`}>
      {faqs.map((faq) => (
        <details className="glass-card faq-item" key={faq.question}>
          <summary>
            <PawPrint size={18} aria-hidden="true" />
            <span>{faq.question}</span>
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
