import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <header className="home-header">
        <h1>BayuDevDesk</h1>
        <p>Personal Developer Workspace & Learning Guide</p>
      </header>

      <section className="home-content">
        <Link href="/web-development-guide" className="content-card">
          <h2>Web Development Guide</h2>
          <p>
            Panduan membuat website dari nol sampai bisa diakses secara online.
          </p>
        </Link>

        <Link href="/notes" className="content-card">
          <h2>Notes</h2>
          <p>
            Catatan dan materi yang saya pelajari selama belajar web
            development.
          </p>
        </Link>

        <Link href="/tools" className="content-card">
          <h2>Tools</h2>
          <p>
            Apa saja tools yang saya gunakan untuk membuat website, mulai dari
            text editor, framework, hingga deployment.
          </p>
        </Link>

        <Link href="/my-development-journey" className="content-card">
          <h2>My Development Journey</h2>
          <p>Track my progress and experiences in web development.</p>
        </Link>
      </section>
    </main>
  );
}
