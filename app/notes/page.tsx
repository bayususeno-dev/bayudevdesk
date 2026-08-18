import Navbar from "@/components/Navbar/Navbar";
import NoteCard from "@/components/NoteCard/NoteCard";

const notes = [
  {
    key: "html",
    title: "HTML",
    description: "Catatan dasar tentang HTML yang saya pelajari.",
    href: "/notes/html",
  },
  {
    key: "css",
    title: "CSS",
    description: "Catatan tentang styling dan layout yang saya pelajari.",
    href: "/notes/css",
  },
  {
    key: "javascript",
    title: "JavaScript",
    description: "Catatan mengenai JavaScript yang saya pelajari.",
    href: "/notes/javascript",
  },
  {
    key: "react",
    title: "React",
    description: "Catatan mengenai React yang saya pelajari.",
    href: "/notes/react",
  },
  {
    key: "nextjs",
    title: "Next.js",
    description: "Catatan mengenai Next.js yang saya pelajari.",
    href: "/notes/nextjs",
  },
  {
    key: "git-github",
    title: "Git & GitHub",
    description: "Catatan mengenai Git dan GitHub yang saya pelajari.",
    href: "/notes/git-github",
  },
];

export default function Notes() {
  return (
    <main className="page-container">
      <header className="page-header">
        <Navbar />
        <h1>Notes</h1>
        <p>
          Catatan dan materi yang saya pelajari selama belajar web development.
        </p>
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
