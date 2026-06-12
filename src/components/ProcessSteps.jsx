export default function ProcessSteps({ steps }) {
  return (
    <div className="process-steps">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <article className="glass-card process-step" key={step.title}>
            <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="icon-chip" aria-hidden="true"><Icon size={22} /></span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        );
      })}
    </div>
  );
}
