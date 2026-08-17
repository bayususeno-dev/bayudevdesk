export default function ToolCard({ title, description, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="tool-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
}