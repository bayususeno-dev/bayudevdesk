import NoteCard from "@/components/NoteCard/NoteCard";

const notes = [
  {
    key: "html",
    title: "HTML",
    description: "Notes on the basics of HTML and how I use it.",
    href: "/notes/html",
  },
  {
    key: "css",
    title: "CSS",
    description: "Notes on styling, layout, and making things look right.",
    href: "/notes/css",
  },
  {
    key: "javascript",
    title: "JavaScript",
    description: "Notes on JavaScript, logic, and making pages interactive.",
    href: "/notes/javascript",
  },
  {
    key: "react",
    title: "React",
    description: "Notes on React and building interfaces with components.",
    href: "/notes/react",
  },
  {
    key: "nextjs",
    title: "Next.js",
    description: "Notes on Next.js and building web projects with React.",
    href: "/notes/nextjs",
  },
  {
    key: "git-github",
    title: "Git & GitHub",
    description: "Notes on version control and managing projects with Git.",
    href: "/notes/git-github",
  },
];

export default function Notes() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Notes</h1>
        <p>Things I’ve learned, figured out, and written down along the way.</p>
      </header>

      <section className="notes-content">
        {notes.map((note) => (
          <NoteCard
            key={note.key}
            title={note.title}
            description={note.description}
            href={note.href}
          />
        ))}
      </section>
    </main>
  );
}
