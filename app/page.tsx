import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="home">
      <header className="home-header">
        <Navbar />

        <h1>BayuDevDesk</h1>
        <p>Personal Developer Workspace & Learning Guide</p>
      </header>

      <section className="home-content">
        <article id="getting-started" className="content-card">
          <h2>Getting Started</h2>
          <p>
            Panduan membuat website dari nol sampai bisa diakses secara online.
          </p>
        </article>

        <article id="notes" className="content-card">
          <h2>Notes</h2>
          <p>
            Catatan dan materi yang saya pelajari selama belajar web
            development.
          </p>
        </article>

        <article id="tools" className="content-card">
          <h2>Tools</h2>
          <p>
            Apa saja tools yang saya gunakan untuk membuat website, mulai dari
            text editor, framework, hingga deployment.
          </p>
        </article>

        <article id="devjourney" className="content-card">
          <h2>My Development Journey</h2>
          <p>Track my progress and experiences in web development.</p>
        </article>
      </section>

      <footer>
        <p>BayuDevDesk — My Web Development Journey</p>
      </footer>
    </main>
  );
}
