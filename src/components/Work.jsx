const PROJECTS = [
  { title: 'Sirena sa Doongan ni Bero', tag: 'Editorial · Book Cover', color: 'var(--blue)' },
  { title: 'Tidemark Branding', tag: 'Identity · Packaging', color: 'var(--orange)' },
  { title: 'Doongan Collective', tag: 'Web · Illustration', color: 'var(--teal)' },
];

export default function Work() {
  return (
    <section id="work" className="section" style={{ background: 'var(--yellow)' }}>
      <div className="container">
        <div className="eyebrow">Selected work</div>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', marginTop: '0.8rem' }}>
          Projects with a pulse.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.6rem',
            marginTop: '3rem',
          }}
        >
          {PROJECTS.map((p) => (
            <div key={p.title} style={{ border: '2px solid var(--navy)', overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4 / 3', background: p.color }} />
              <div style={{ padding: '1.4rem', background: 'var(--cream)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{p.title}</h3>
                <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', color: 'var(--blue)' }}>
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '1.6rem', fontSize: '0.9rem', color: 'var(--blue)' }}>
          Placeholder project tiles — swap these for real project photography whenever you have it.
        </p>
      </div>
    </section>
  );
}
