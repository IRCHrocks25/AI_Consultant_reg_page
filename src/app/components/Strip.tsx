const items = [
  'Email + Voice + Chat — All Covered',
  '5 Fully Connected Workflows — Not 5 Separate Tools',
  'Built in N8N — Powered by AI',
  'Live in as Little as 3 Business Days',
  'Connected to Your CRM, Calendar, Email, Socials & Phone',
  'Zero Tech Skills Required',
];

export function Strip() {
  const doubled = [...items, ...items];
  return (
    <div
      id="strip"
      style={{
        padding: '20px 0',
        overflow: 'hidden',
        background: 'var(--bg-1)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="strip-track">
        {doubled.map((item, i) => (
          <div key={i} className="strip-item">
            <span>✦</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
