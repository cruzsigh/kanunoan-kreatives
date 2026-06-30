import { useEffect, useState } from 'react';
import MaskIcon from './MaskIcon';
import logoMark from '../assets/svg/Asset_30.svg';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'var(--cream)' : 'transparent',
        borderBottom: scrolled ? '2px solid var(--navy)' : '2px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <MaskIcon src={logoMark} color="var(--navy)" width="36px" height="36px" />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.04em' }}>
            Kanunoan Kreatives
          </span>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow nav-link"
              style={{ color: 'var(--navy)' }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn" style={{ padding: '0.7em 1.4em', fontSize: '0.75rem' }}>
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
