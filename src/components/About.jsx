import MaskIcon from './MaskIcon';
import sun from '../assets/svg/Asset_28.svg';
import moon from '../assets/svg/Asset_29.svg';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--navy)', color: 'var(--cream)' }}>
      <div className="container two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--yellow)' }}>About the studio</div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', marginTop: '0.8rem', color: 'var(--cream)' }}>
            Four creatives,
            <br />
            one current.
          </h2>
        </div>

        <div>
          <p style={{ fontSize: '1.1rem', color: 'var(--yellow)', marginBottom: '1.4rem' }}>
            Kanunoan Kreatives is a collective built on the belief that good design has weight —
            something pressed into the page, not just printed on it. We work at the meeting point
            of folklore and craft, where every mark feels stamped rather than rendered.
          </p>
          <p style={{ color: 'var(--cream)', opacity: 0.85 }}>
            Founded by Escorial, Galliguez, Ocampo, and Vanguardia, the studio moves between
            branding, editorial, and illustration — always chasing that hand-carved, sun-and-tide
            energy that runs through everything we make.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
            <MaskIcon src={sun} color="var(--orange)" width="44px" height="44px" />
            <MaskIcon src={moon} color="var(--teal)" width="44px" height="44px" />
          </div>
        </div>
      </div>
    </section>
  );
}
