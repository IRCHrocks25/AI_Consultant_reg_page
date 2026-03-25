import logo from 'figma:asset/4cbf3f873d484781dd942ad3963f757ad4b9bc5e.png';

export function Footer() {
  return (
    <footer
      style={{
        padding: '36px 64px',
        background: 'var(--bg-1)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src={logo} alt="AI Business OS" style={{ height: '32px', width: 'auto' }} />
      </div>
      <div className="foot-copy">© 2025 AI Business OS. All rights reserved.</div>
    </footer>
  );
}