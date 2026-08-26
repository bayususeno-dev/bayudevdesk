import JourneyNavigation from "@/components/JourneyNavigation/JourneyNavigation";

export default function Projects() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Projects</h1>
        <p>Projects I have built while learning.</p>
      </header>

      <div className="journey-item">
        <h2>BayuDevDesk</h2>

        <p>
          BayuDevDesk is a personal developer workspace and learning guide that
          I am building while learning web development. It is a place where I
          can organize my notes, tools, learning resources, and development
          progress.
        </p>

        <p>
          Through this project, I have been practicing React, Next.js,
          TypeScript, CSS, routing, reusable components, and Git. I am also
          using the project to experiment with different ideas and improve my
          understanding of how a real website is structured.
        </p>

        <p>
          The project is still in development, and I expect it to grow as I
          continue learning. Rather than trying to build everything at once, I
          am developing it step by step and applying new concepts as I
          understand them.
        </p>
      </div>

      <JourneyNavigation
        previous={{
          label: "Learning",
          href: "/my-development-journey/learning",
        }}
        next={{
          label: "Next Goal",
          href: "/my-development-journey/next-goal",
        }}
      />
    </main>
  );
}
