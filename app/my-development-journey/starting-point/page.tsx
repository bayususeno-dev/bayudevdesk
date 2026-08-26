import JourneyNavigation from "@/components/JourneyNavigation/JourneyNavigation";

export default function StartingPoint() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Starting Point</h1>
        <p>Where my journey into web development began.</p>
      </header>

      <div className="journey-item">
        <p>
          My journey into web development started with curiosity about how AI
          systems are built and how the technologies behind them work. For now,
          I have chosen to focus on web development because my background is not
          in Information Technology. I see web development as a logical stepping
          stone into the broader field of IT, allowing me to build a strong
          technical foundation while gradually exploring other areas of
          technology.
        </p>

        <p>
          I started by learning the fundamentals of HTML, CSS, and JavaScript.
          As I continued learning, I became interested in React and Next.js and
          started building small projects to put what I learned into practice.
          This gradually led me to explore other parts of web development, such
          as working with APIs and external data.
        </p>

        <p>
          August 20, 2026 — I am still learning and building my foundation.
          There are many concepts I do not fully understand yet, but each
          project gives me an opportunity to learn, experiment, and improve.
          Even when I do not fully understand a concept, I always make sure to
          understand how it works, what its purpose is, and what changes when I
          modify something. For now, I focus on building that practical
          understanding first, while gradually working toward a deeper
          understanding of the concepts behind it.
        </p>
      </div>

      <JourneyNavigation
        next={{
          label: "Learning",
          href: "/my-development-journey/learning",
        }}
      />
    </main>
  );
}
