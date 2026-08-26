export default function ToolCard({ title, description, href, image }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="tool-card">
      <div className="tool-image">
        <img src={image} alt={description} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
}