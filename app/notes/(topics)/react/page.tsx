import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function ReactNote() {
  return (
    <NoteDetail
      title="React"
      description="Notes on React that I’ve been learning."
    >
      <section>
        <h2>Overview</h2>

        <p>
          React is a JavaScript library used to build user interfaces using
          components.
        </p>

        <p>
          React lets us build pages from smaller, reusable pieces, making the
          structure of an application easier to organize and maintain.
        </p>

        <p>
          React uses concepts such as components, props, state, and events to
          build interactive user interfaces.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Components</h3>
        <p>
          A component is a part of the interface that can be created and reused
          throughout an application.
        </p>

        <pre>
          <code>{`export default function Greeting() {
  return <h1>Hello World</h1>;
}`}</code>
        </pre>

        <h3>JSX</h3>
        <p>
          JSX lets us write UI structures using syntax that looks similar to
          HTML inside JavaScript or TypeScript.
        </p>

        <pre>
          <code>{`const element = <h1>Hello World</h1>;`}</code>
        </pre>

        <h3>Props</h3>
        <p>
          Props are used to pass data from a parent component to a child
          component.
        </p>

        <pre>
          <code>{`function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}`}</code>
        </pre>

        <h3>State</h3>
        <p>
          State is used to store data that can change while a component is
          running.
        </p>

        <pre>
          <code>{`const [count, setCount] = useState(0);`}</code>
        </pre>

        <h3>Event Handling</h3>
        <p>
          React can handle events such as clicks, input, submit, and other user
          interactions using event handlers.
        </p>

        <pre>
          <code>{`<button onClick={() => setCount(count + 1)}>
  Click
</button>`}</code>
        </pre>

        <h3>Conditional Rendering</h3>
        <p>
          Conditional rendering is used to display UI based on a certain
          condition.
        </p>

        <pre>
          <code>{`{isOpen && <p>Menu is open</p>}`}</code>
        </pre>

        <h3>Rendering Lists</h3>
        <p>
          Methods such as <code>map</code> can be used to render a collection of
          data as React elements.
        </p>

        <pre>
          <code>{`const notes = ["HTML", "CSS", "JavaScript"];

{notes.map((note) => (
  <p key={note}>{note}</p>
))}`}</code>
        </pre>

        <h3>Keys</h3>
        <p>
          Keys help React identify each element when rendering a list. A key
          should be unique among its siblings and does not have to be a number.
        </p>

        <pre>
          <code>{`const notes = [
  { key: "html", title: "HTML" },
  { key: "css", title: "CSS" }
];

{notes.map((note) => (
  <p key={note.key}>{note.title}</p>
))}`}</code>
        </pre>

        <h3>Hooks</h3>
        <p>
          Hooks are functions that let components use React features such as
          state and other component-related behavior.
        </p>

        <pre>
          <code>{`import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);`}</code>
        </pre>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Reusable Component</h3>

        <pre>
          <code>{`function Card({ title, description }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}`}</code>
        </pre>

        <h3>State</h3>

        <pre>
          <code>{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`}</code>
        </pre>

        <h3>Props</h3>

        <pre>
          <code>{`function NoteCard({ title, description }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}`}</code>
        </pre>

        <h3>Rendering Data</h3>

        <pre>
          <code>{`const notes = [
  {
    key: "html",
    title: "HTML"
  },
  {
    key: "css",
    title: "CSS"
  }
];

{notes.map((note) => (
  <p key={note.key}>{note.title}</p>
))}`}</code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>Component Name Does Not Use PascalCase</h3>
        <p>
          React components are usually written using PascalCase so they can be
          distinguished from regular HTML elements.
        </p>

        <pre>
          <code>{`function NoteCard() {
  return <div>Note</div>;
}`}</code>
        </pre>

        <h3>Props Are Not Passed Correctly</h3>
        <p>
          Make sure the names of the props passed from the parent match the
          props expected by the child component.
        </p>

        <h3>Forgetting the key When Using map</h3>
        <p>
          When rendering a list, give each element a unique <code>key</code>.
        </p>

        <h3>Misunderstanding State</h3>
        <p>
          State does not change immediately just because its setter is called.
          React schedules the update and renders the component again with the
          latest state.
        </p>

        <h3>Using State in a Server Component</h3>
        <p>
          In the Next.js App Router, a component that uses <code>useState</code>{" "}
          or certain event handlers needs to be a Client Component by using the{" "}
          <code>"use client"</code> directive.
        </p>
      </section>
    </NoteDetail>
  );
}
