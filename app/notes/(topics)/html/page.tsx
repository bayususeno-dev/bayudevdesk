import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function HtmlNote() {
  return (
    <NoteDetail title="HTML" description="Notes on the basics of HTML.">
      <section>
        <h2>Overview</h2>

        <p>
          HTML (HyperText Markup Language) is used to create the structure and
          organize the content of a web page.
        </p>

        <p>
          HTML uses elements to define different types of content and how they
          are structured, such as headings, paragraphs, links, images, lists,
          and forms.
        </p>

        <p>
          HTML is not a programming language because it is not used to create
          logic such as loops or conditions. Instead, it provides the basic
          structure of a web page.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Elements</h3>
        <p>
          An element is a basic part of HTML that defines the structure and type
          of content on a page.
        </p>

        <pre>
          <code>{`<h1>Hello World</h1><p>This is a paragraph.</p>`}</code>
        </pre>

        <h3>Attributes</h3>
        <p>
          Attributes provide additional information or settings for an element.
        </p>

        <pre>
          <code>
            {`<a href="/about">About</a><img src="/image.jpg" alt="Example" />`}
          </code>
        </pre>

        <h3>Semantic HTML</h3>
        <p>
          Semantic HTML uses elements based on the meaning and purpose of their
          content, such as header, nav, main, section, article, and footer.
        </p>

        <h3>Document Structure</h3>
        <p>
          An HTML page usually has a basic structure consisting of html, head,
          and body.
        </p>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Heading and Paragraph</h3>

        <pre>
          <code>{`<h1>My Website</h1><p>Welcome to my website.</p>`}</code>
        </pre>

        <h3>Link</h3>

        <pre>
          <code>{`<a href="/about">About</a>`}</code>
        </pre>

        <h3>Image</h3>

        <pre>
          <code>{`<img src="/images/profile.jpg" alt="Profile" />`}</code>
        </pre>

        <h3>List</h3>

        <pre>
          <code>{`<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>`}</code>
        </pre>

        <h3>Form</h3>

        <pre>
          <code>
            {`<form><label htmlFor="name">Name</label><input id="name" type="text" /><button type="submit">Submit</button></form>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>Missing Closing Tags</h3>
        <p>
          Some HTML elements require a closing tag. Make sure elements that need
          a closing tag are properly closed.
        </p>

        <pre>
          <code>{`<p>Hello World</p>`}</code>
        </pre>

        <h3>Incorrect or Incomplete Attributes</h3>
        <p>
          Double-check the attribute name and value. For example, a link needs
          an href attribute to specify where it should lead.
        </p>

        <pre>
          <code>{`<a href="/about">About</a>`}</code>
        </pre>

        <h3>Messy HTML Structure</h3>
        <p>
          Keep your element structure clear and use proper nesting so your HTML
          is easier to read and maintain.
        </p>

        <h3>Choosing Elements Only for Their Appearance</h3>
        <p>
          Don’t choose an element just because of how it looks. Use elements
          based on the meaning and purpose of their content, then use CSS to
          control how they look.
        </p>
      </section>
    </NoteDetail>
  );
}
