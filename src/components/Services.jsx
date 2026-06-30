const SERVICES = [
  { num: '01', title: 'Brand Identity', desc: 'Logos, marks, typography systems, and the rules that hold a brand together.' },
  { num: '02', title: 'Editorial & Print', desc: 'Books, zines, posters — layouts built for things meant to be held.' },
  { num: '03', title: 'Illustration', desc: 'Hand-built linework and texture, from spot icons to full compositions.' },
  { num: '04', title: 'Web & Digital', desc: 'Sites and digital experiences that carry the brand\u2019s texture online.' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="eyebrow">What we do</div>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', marginTop: '0.8rem', maxWidth: '14ch' }}>
          Services built for bold brands.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
            marginTop: '3rem',
            background: 'var(--navy)',
            border: '2px solid var(--navy)',
          }}
        >
          {SERVICES.map((s) => (
            <div key={s.num} style={{ background: 'var(--cream)', padding: '2.2rem' }}>
              <span className="eyebrow" style={{ color: 'var(--teal)' }}>{s.num}</span>
              <h3 style={{ fontSize: '1.4rem', marginTop: '0.8rem', marginBottom: '0.6rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--blue)', fontSize: '0.98rem', margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
