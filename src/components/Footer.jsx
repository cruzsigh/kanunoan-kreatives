import MaskIcon from './MaskIcon';
import monogram from '../assets/svg/Asset_33.svg';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--cream)', borderTop: '2px solid var(--navy)' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '2.2rem var(--edge)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <MaskIcon src={monogram} color="var(--navy)" width="28px" height="28px" />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Kanunoan Kreatives
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.85rem', color: 'var(--blue)' }}>
          Escorial · Galliguez · Ocampo · Vanguardia
        </span>
      </div>
    </footer>
  );
}
