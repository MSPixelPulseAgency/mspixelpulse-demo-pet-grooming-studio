import { Plus } from "lucide-react";
export default function FAQAccordion({ items, preview = false }) {
  return (
    <div className="faq-list">
      {(preview ? items.slice(0, 4) : items).map((faq) => (
        <details id={faq.id} className="faq-item" key={faq.id}>
          <summary>
            <span>{faq.question}</span>
            <Plus size={20} aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
