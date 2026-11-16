type Step = { title: string; text: string };

export default function Steps({ items }: { items: Step[] }) {
  return (
    <div className="steps">
      {items.map((s, i) => (
        <div className="step" key={s.title}>
          <div className="step-no">{i + 1}</div>
          <div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
