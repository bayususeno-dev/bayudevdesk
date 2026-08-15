export default function Tools() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Tools</h1>
        <p>Alat-alat yang saya gunakan selama belajar web development.</p>
      </header>

      <section className="tools-content">
        <article className="tool-card">
          <h2>Code Editor</h2>
          <p>Visual Studio Code</p>
        </article>

        <article className="tool-card">
          <h2>Framework</h2>
          <p>Next.js</p>
        </article>

        <article className="tool-card">
          <h2>Library</h2>
          <p>React</p>
        </article>

        <article className="tool-card">
          <h2>Version Control</h2>
          <p>Git</p>
        </article>

        <article className="tool-card">
          <h2>Repository</h2>
          <p>GitHub</p>
        </article>

        <article className="tool-card">
          <h2>Deployment</h2>
          <p>Vercel</p>
        </article>
      </section>
    </main>
  );
}
