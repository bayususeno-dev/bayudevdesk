import Navbar from "@/components/Navbar/Navbar";

export default function MyDevelopmentJourney() {
  return (
    <main className="page-container">
      <header className="page-header">
        <Navbar />
        <h1>My Development Journey</h1>
        <p>Track my progress and experiences in web development.</p>
      </header>

      <section className="journey-content">
        <article className="journey-item">
          <h2>Starting Point</h2>
          <p>{/* Cerita awal perjalanan akan ditambahkan nanti */}</p>
        </article>

        <article className="journey-item">
          <h2>Learning</h2>
          <p>{/* Progress belajar akan ditambahkan nanti */}</p>
        </article>

        <article className="journey-item">
          <h2>Projects</h2>
          <p>{/* Project yang pernah dibuat akan ditambahkan nanti */}</p>
        </article>

        <article className="journey-item">
          <h2>Next Goal</h2>
          <p>{/* Target berikutnya akan ditambahkan nanti */}</p>
        </article>
      </section>
    </main>
  );
}
