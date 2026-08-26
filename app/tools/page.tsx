import ToolCard from "@/components/ToolCard/ToolCard";

const tools = [
  {
    key: "vscode",
    title: "Code Editor",
    description: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
  },
  {
    key: "nextjs",
    title: "Framework",
    description: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    key: "react",
    title: "Library",
    description: "React",
    href: "https://react.dev/",
  },
  {
    key: "git",
    title: "Version Control",
    description: "Git",
    href: "https://git-scm.com/",
  },
  {
    key: "github",
    title: "Repository",
    description: "GitHub",
    href: "https://github.com/",
  },
  {
    key: "vercel",
    title: "Deployment",
    description: "Vercel",
    href: "https://vercel.com/",
  },
];

export default function Tools() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Tools</h1>
        <p>
          The tools and technologies I use while learning and building for the
          web.
        </p>
      </header>

      <section className="tools-content">
        {tools.map((tool) => (
          <ToolCard
            href={tool.href}
            key={tool.key}
            title={tool.title}
            description={tool.description}
            image={`/tools/${tool.key}.png`}
          />
        ))}
      </section>
    </main>
  );
}
