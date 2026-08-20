import JourneyNavigation from "@/components/JourneyNavigation/JourneyNavigation";

export default function Learning() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Learning</h1>
        <p>What I have learned along the way.</p>
      </header>

      <div className="page-content">
        <h2>Building the Fundamentals</h2>

        <p>
          I started by building my foundation with HTML, CSS, and JavaScript.
          These helped me understand how websites are structured, styled, and
          made interactive.
        </p>

        <h2>Exploring Modern Web Development</h2>

        <p>
          After getting familiar with the fundamentals, I started exploring
          React and Next.js. This introduced me to a different way of building
          websites through components, reusable code, routing, and more
          structured application development.
        </p>

        <p>
          I also started learning TypeScript and using Git and GitHub to manage
          my projects and track my progress.
        </p>

        <h2>Learning Through Projects</h2>

        <p>
          A big part of my learning has come from actually building things.
          Instead of only studying concepts, I try to apply them in projects and
          see how different parts of a website work together.
        </p>

        <p>
          When I encounter something I do not understand, I try to break it down
          and understand what it does, why it is used, and what changes when I
          modify it. This helps me gradually build a deeper understanding
          through practice.
        </p>
      </div>

      <JourneyNavigation
        previous={{
          label: "Starting Point",
          href: "/my-development-journey/starting-point",
        }}
        next={{
          label: "Projects",
          href: "/my-development-journey/projects",
        }}
      />
    </main>
  );
}
