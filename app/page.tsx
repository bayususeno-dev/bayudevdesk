import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <p className="hero-label">PERSONAL DEVELOPER WORKSPACE</p>

        <h1>BayuDevDesk</h1>

        <p className="hero-description">
          A personal space for learning, building, and documenting my journey in
          web development.
        </p>

        <Link href="/web-development-guide" className="hero-button">
          Start Learning
          <span>→</span>
        </Link>
      </section>

      <section className="workspace">
        <div className="workspace-heading">
          <p className="section-label">EXPLORE</p>
          <h2>My Workspace</h2>
          <p>
            Everything I use to learn, build, and keep track of my development
            journey.
          </p>
        </div>

        <div className="workspace-grid">
          <Link href="/web-development-guide" className="workspace-card">
            <div className="card-number">01</div>

            <div className="card-content">
              <h3>Getting Started</h3>
              <p>
                Learn web development from the fundamentals to building and
                deploying a real website.
              </p>
            </div>

            <span className="card-arrow">→</span>
          </Link>

          <Link href="/notes" className="workspace-card">
            <div className="card-number">02</div>

            <div className="card-content">
              <h3>Notes</h3>
              <p>
                Development notes, concepts, and things I have learned while
                building for the web.
              </p>
            </div>

            <span className="card-arrow">→</span>
          </Link>

          <Link href="/tools" className="workspace-card">
            <div className="card-number">03</div>

            <div className="card-content">
              <h3>Tools</h3>
              <p>
                Tools and technologies I use to write code, build websites,
                manage projects, and deploy them.
              </p>
            </div>

            <span className="card-arrow">→</span>
          </Link>

          <Link href="/my-development-journey" className="workspace-card">
            <div className="card-number">04</div>

            <div className="card-content">
              <h3>My Journey</h3>
              <p>
                A record of my progress, experiences, projects, and the next
                things I want to learn.
              </p>
            </div>

            <span className="card-arrow">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
