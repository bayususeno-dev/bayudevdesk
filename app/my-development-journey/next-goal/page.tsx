import JourneyNavigation from "@/components/JourneyNavigation/JourneyNavigation";

export default function NextGoal() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Next Goal</h1>
        <p>What I want to achieve next.</p>
      </header>

      <div className="journey-item">
        <h2>Strengthen My Foundation</h2>

        <p>
          My next goal is to strengthen my understanding of the fundamentals
          instead of simply learning more technologies. I want to become more
          comfortable with JavaScript, React, Next.js, TypeScript, and the
          concepts behind them.
        </p>

        <h2>Build More Projects</h2>

        <p>
          I want to continue building projects that are more complete and
          challenging. Each project should give me an opportunity to apply what
          I have learned and discover new concepts along the way.
        </p>

        <h2>Explore Further Into IT</h2>

        <p>
          Web development is currently my entry point into the broader field of
          IT. As my foundation becomes stronger, I want to explore other areas
          of technology and find out where I want to take my skills next.
        </p>

        <p>
          For now, I am focusing on making steady progress rather than trying to
          learn everything at once.
        </p>
      </div>

      <JourneyNavigation
        previous={{
          label: "Projects",
          href: "/my-development-journey/projects",
        }}
      />
    </main>
  );
}
