import MaskIcon from './MaskIcon';
import wordmark from '../assets/svg/Asset_34.svg';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--navy)', color: 'var(--cream)' }}>
      <div className="container two-col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--orange)' }}>Get in touch</div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', marginTop: '0.8rem', color: 'var(--cream)' }}>
            Got a story to carve?
          </h2>
          <p style={{ color: 'var(--yellow)', marginTop: '1.2rem', maxWidth: '38ch' }}>
            Tell us about the project — branding, print, illustration, or web — and we'll get back
            to you within a couple of days.
          </p>

          <MaskIcon
            src={wordmark}
            color="var(--cream)"
            width="clamp(200px, 28vw, 320px)"
            height="80px"
            style={{ marginTop: '2.5rem', opacity: 0.9 }}
          />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <input
            type="text"
            placeholder="Name"
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />
          <textarea
            placeholder="Tell us about your project"
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <button type="submit" className="btn" style={{ alignSelf: 'flex-start', background: 'var(--orange)', borderColor: 'var(--orange)', color: 'var(--navy)' }}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  background: 'transparent',
  border: '2px solid var(--yellow)',
  borderRadius: '4px',
  padding: '0.9em 1em',
  color: 'var(--cream)',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  outline: 'none',
};
