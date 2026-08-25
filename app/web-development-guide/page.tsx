export default function WebDevelopmentGuide() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Web Development Guide</h1>
        <p>
          A not-too-simple guide to building a website from scratch and getting
          it online. AI can write the code, but you still need to know what
          you’re doing.
        </p>
      </header>

      <section className="guide-section">
        <h2>1. Getting Ready</h2>
        <p>
          Before you start building, let’s get a few basic tools ready. These
          are the tools you’ll probably use throughout the development process.
        </p>

        <ul>
          <li>
            <strong>Text Editor</strong> — this is where you’ll write and manage
            your code. VS Code is a popular choice.
          </li>
          <li>
            <strong>Node.js</strong> — lets you run JavaScript outside the
            browser and manage packages for your project.
          </li>
          <li>
            <strong>Git</strong> — helps you keep track of changes in your
            project.
          </li>
          <li>
            <strong>GitHub</strong> — gives you a place to store your Git
            repository online.
          </li>
          <li>
            <strong>Browser</strong> — you’ll use this to run and test the
            website you’re building.
          </li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>2. Choosing Your Technology</h2>
        <p>
          Now you need to decide what you’re going to build with. The right
          choice depends on what your project actually needs.
        </p>

        <ul>
          <li>
            <strong>HTML</strong> — gives your page its structure.
          </li>
          <li>
            <strong>CSS</strong> — controls how your website looks and how the
            layout works.
          </li>
          <li>
            <strong>JavaScript</strong> — adds logic and interaction to your
            website.
          </li>
          <li>
            <strong>React</strong> — a JavaScript library for building
            interfaces with reusable components.
          </li>
          <li>
            <strong>Next.js</strong> — a React framework with tools and features
            for building modern web applications.
          </li>
        </ul>

        <p>
          You don’t need to use all of these technologies. For a simple website,
          HTML, CSS, and JavaScript might be more than enough. Pick what makes
          sense for the project you’re working on.
        </p>
      </section>

      <section className="guide-section">
        <h2>3. Creating the Project</h2>
        <p>
          Once you know what you’re going to use, it’s time to create the
          project. Think of this as setting up your workspace before you start
          building.
        </p>

        <ol>
          <li>
            Install <strong>Node.js</strong> if you don’t have it already.
          </li>
          <li>Choose the framework or technology you want to use.</li>
          <li>
            Create a new project using the tools or commands provided by that
            technology.
          </li>
          <li>
            Open the project folder in <strong>VS Code</strong>.
          </li>
          <li>Install any dependencies your project needs.</li>
          <li>
            Start the development server and make sure everything is working.
          </li>
        </ol>

        <p>If the project runs successfully, you’re ready to start building.</p>
      </section>

      <section className="guide-section">
        <h2>4. Setting Up Git & GitHub</h2>
        <p>
          Before we start writing code, let’s set up Git. It might feel like an
          extra step at first, but having version control from the beginning
          makes it much easier to keep track of your work and recover when
          something goes wrong.
        </p>

        <ol>
          <li>Initialize Git.</li>
          <li>Create a repository on GitHub.</li>
          <li>Connect your local project to the GitHub repository.</li>
          <li>
            Check your changes with <code>git status</code>.
          </li>
          <li>
            Add your changes to the staging area with <code>git add</code>.
          </li>
          <li>
            Save your changes with a commit using <code>git commit</code>.
          </li>
          <li>
            Send your commits to GitHub with <code>git push</code>.
          </li>
        </ol>

        <p>
          Try to make commits when you finish a meaningful change or a small
          part of the project. It makes your development history much easier to
          understand later.
        </p>
      </section>

      <section className="guide-section">
        <h2>5. Start Coding</h2>
        <p>
          This is where things start getting interesting. Build the website step
          by step instead of trying to do everything at once.
        </p>

        <ol>
          <li>Build the page structure you need.</li>
          <li>
            Create reusable components for parts you’ll use more than once.
          </li>
          <li>Add styling to control the look and layout.</li>
          <li>
            Add logic and interactions using JavaScript or whatever technology
            you’re working with.
          </li>
          <li>Run the website regularly while you’re building it.</li>
          <li>Fix errors and improve things as you go.</li>
        </ol>

        <p>
          A good way to work is to take things one piece at a time. Finish one
          part, check that it works, then move on to the next one. You don’t
          have to build the whole thing in one go.
        </p>
      </section>

      <section className="guide-section">
        <h2>6. Testing</h2>
        <p>
          Before putting your website online, take some time to check that
          everything actually works. And honestly, you don’t have to wait until
          the end to do this.
        </p>

        <ul>
          <li>Open each page and make sure everything loads correctly.</li>
          <li>Check your links and make sure they point to the right pages.</li>
          <li>
            Test buttons, menus, forms, and any other interactions you’ve built.
          </li>
          <li>Check how the website looks on different screen sizes.</li>
          <li>Look for errors in the browser and terminal.</li>
          <li>Test again whenever you make an important change.</li>
        </ul>

        <p>
          Testing while you build is much easier than finding a bunch of
          problems after everything is supposedly finished.
        </p>
      </section>

      <section className="guide-section">
        <h2>7. Deployment</h2>
        <p>
          Once your website is working and you’re happy with it, you can deploy
          it and make it available on the internet.
        </p>

        <ol>
          <li>Choose a deployment platform that fits your project.</li>
          <li>Connect your project repository to the platform.</li>
          <li>
            Configure anything your project needs, such as environment variables
            or build settings.
          </li>
          <li>Run the deployment.</li>
          <li>Open your website using the URL provided by the platform.</li>
          <li>Check the live website one more time after deployment.</li>
        </ol>

        <p>
          And that’s not really the end. Once your website is online, you can
          keep improving it, fixing bugs, adding features, and experimenting
          with new ideas.
        </p>
      </section>
    </main>
  );
}
