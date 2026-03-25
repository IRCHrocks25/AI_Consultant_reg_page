import { useEffect, useState } from 'react';
import logo from 'figma:asset/4cbf3f873d484781dd942ad3963f757ad4b9bc5e.png';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <img src={logo} alt="AI Business OS" style={{ height: '16px', width: 'auto' }} />
      </a>
      <ul className="nav-links nav-links-wrap" style={{ margin: 0, padding: 0 }}>
        <li><a href="#clear">The System</a></li>
        <li><a href="#catalogue">Capabilities</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#final" className="nav-btn">Get Started</a></li>
      </ul>
    </nav>
  );
}