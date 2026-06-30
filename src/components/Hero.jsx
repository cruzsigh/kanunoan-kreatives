import MaskIcon from './MaskIcon';
import logoMark from '../assets/svg/Asset_30.svg';
import wave from '../assets/svg/Asset_26.svg';

export default function Hero() {
  return (
    <section id="top" className="section" style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)' }}>
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: '1.2rem' }}>
          Kanunoan Kreatives · Escorial, Galliguez, Ocampo, Vanguardia
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', color: 'var(--navy)' }}>
          Stories carved
          <br />
          like woodcuts.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            maxWidth: '40ch',
            fontSize: '1.15rem',
            marginTop: '1.8rem',
            color: 'var(--blue)',
          }}
        >
          A creative studio shaping brands, books, and visual worlds with the texture of
          something hand-carved — bold, briny, and built to last.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.4rem', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn">Start a project</a>
          <a href="#work" className="btn btn-outline">See the work</a>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(3rem, 8vw, 5rem)' }}>
        <MaskIcon src={logoMark} color="var(--navy)" width="clamp(120px, 18vw, 220px)" height="clamp(120px, 18vw, 220px)" />
      </div>

      <MaskIcon
        src={wave}
        color="var(--orange)"
        width="100%"
        height="48px"
        style={{ marginTop: '3rem' }}
      />
    </section>
  );
}
