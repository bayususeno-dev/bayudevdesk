export default function NoteDetail({ title, description, children }) {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <div className="note-detail-content">
        {children}
      </div>
    </main>
  );
}