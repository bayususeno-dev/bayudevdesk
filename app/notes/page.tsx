export default function Notes() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Notes</h1>
        <p>
          Catatan dan materi yang saya pelajari selama belajar web development.
        </p>
      </header>

      <section className="notes-content">
        <article className="note-card">
          <h2>JavaScript</h2>
          <p>Catatan mengenai JavaScript yang saya pelajari.</p>
        </article>

        <article className="note-card">
          <h2>React</h2>
          <p>Catatan mengenai React yang saya pelajari.</p>
        </article>

        <article className="note-card">
          <h2>Next.js</h2>
          <p>Catatan mengenai Next.js yang saya pelajari.</p>
        </article>

        <article className="note-card">
          <h2>Git & GitHub</h2>
          <p>Catatan mengenai Git dan GitHub yang saya pelajari.</p>
        </article>
      </section>
    </main>
  );
}
