import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function NextJSNote() {
  return (
    <NoteDetail
      title="Next.js"
      description="Notes about Next.js and what I’ve learned so far."
    >
      <section>
        <h2>Overview</h2>

        <p>
          Next.js is a React framework that gives us a lot of the tools and
          structure we need to build modern web applications.
        </p>

        <p>
          It comes with features like file-based routing, Server Components,
          Client Components, different rendering strategies, and built-in
          optimizations that make development easier.
        </p>

        <p>
          You can use Next.js for something as simple as a personal website or
          go all the way to building a much larger web application.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>App Router</h3>
        <p>
          The App Router uses folders inside the <code>app</code> directory to
          define the structure and routes of the application.
        </p>

        <pre>
          <code>{`app/
├── page.tsx
├── about/
│   └── page.tsx
└── notes/
    └── page.tsx`}</code>
        </pre>

        <h3>File-based Routing</h3>
        <p>
          Next.js uses specific files and folders to automatically determine the
          URL of a page. This means we can create routes simply by organizing
          our project structure.
        </p>

        <pre>
          <code>{`app/about/page.tsx

// URL:
// /about`}</code>
        </pre>

        <h3>Dynamic Routes</h3>
        <p>
          Dynamic routes use square brackets in the folder name to create routes
          based on a parameter.
        </p>

        <pre>
          <code>{`app/notes/[slug]/page.tsx

// Examples:
// /notes/html
// /notes/css`}</code>
        </pre>

        <h3>Route Groups</h3>
        <p>
          Route groups use parentheses to organize related routes without
          including the folder name in the URL.
        </p>

        <pre>
          <code>{`app/notes/(topics)/html/page.tsx

// URL:
// /notes/html`}</code>
        </pre>

        <h3>Server Components</h3>
        <p>
          Components inside the App Router are Server Components by default.
          They allow us to build UI that can be rendered on the server without
          sending that component’s JavaScript to the browser.
        </p>

        <h3>Client Components</h3>
        <p>
          Client Components are useful when a component needs browser-side
          interaction, such as state, event handlers, or browser APIs.
        </p>

        <pre>
          <code>{`"use client";

import { useState } from "react";`}</code>
        </pre>

        <h3>Layouts</h3>
        <p>
          Layouts let us create UI that can be shared across multiple pages
          inside a route segment.
        </p>

        <pre>
          <code>{`app/layout.tsx`}</code>
        </pre>

        <h3>Link</h3>
        <p>
          The <code>Link</code> component is used to navigate between pages
          using Next.js routing.
        </p>

        <pre>
          <code>{`import Link from "next/link";

<Link href="/notes">
  Notes
</Link>`}</code>
        </pre>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Basic Page</h3>

        <pre>
          <code>{`export default function About() {
  return <h1>About</h1>;
}`}</code>
        </pre>

        <h3>Nested Route</h3>

        <pre>
          <code>{`app/
└── notes/
    ├── page.tsx
    └── html/
        └── page.tsx

// /notes
// /notes/html`}</code>
        </pre>

        <h3>Route Group</h3>

        <pre>
          <code>{`app/
└── notes/
    └── (topics)/
        └── html/
            └── page.tsx

// URL:
// /notes/html`}</code>
        </pre>

        <h3>Client Component</h3>

        <pre>
          <code>{`"use client";

import { useState } from "react";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      Search
    </button>
  );
}`}</code>
        </pre>

        <h3>Navigation</h3>

        <pre>
          <code>{`import Link from "next/link";

export default function Home() {
  return (
    <Link href="/notes">
      Notes
    </Link>
  );
}`}</code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>A Route Returns 404</h3>
        <p>
          Check your folder structure and make sure the <code>page.tsx</code>{" "}
          file is in the right location for the URL you want to create.
        </p>

        <h3>Misunderstanding Route Groups</h3>
        <p>
          A folder such as <code>(topics)</code> does not become part of the
          URL. It is only there to help organize related routes.
        </p>

        <h3>State Doesn’t Work</h3>
        <p>
          A component that uses <code>useState</code> or certain event handlers
          needs to be a Client Component by adding the <code>"use client"</code>{" "}
          directive.
        </p>

        <h3>Component Import Cannot Be Found</h3>
        <p>
          Check the import path, file name, and component folder structure. Pay
          attention to uppercase and lowercase letters in file names as well.
        </p>

        <h3>Routing Changes Don’t Appear</h3>
        <p>
          If something looks wrong after changing the route structure, try
          restarting the development server. In some cases, removing the{" "}
          <code>.next</code> folder can also help Next.js regenerate its
          generated files.
        </p>
      </section>
    </NoteDetail>
  );
}
