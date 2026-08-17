import Link from "next/link";

export default function NoteCard({ title, description, href }) {
  return (
    <Link href={href}>
      <article className="note-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </article>
    </Link>
  );
}