export default function Home() {
  return (
    <main className="home">
      <div className="home-hero">
        <p className="hero-label">
          <span className="status-dot"></span>
          PROJECT STATUS: ONGOING
        </p>

        <h1>BayuDevDesk</h1>

        <p className="hero-description">
          Personal playground for experimenting and exploring.
        </p>

        <a href="/my-development-journey" className="hero-button">
          My Development Journey
          <span>→</span>
        </a>
      </div>
    </main>
  );
}
