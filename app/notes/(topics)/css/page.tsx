import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function CssNote() {
  return (
    <NoteDetail title="CSS" description="Notes on styling and layout.">
      <section>
        <h2>Overview</h2>

        <p>
          CSS (Cascading Style Sheets) is used to control how a web page looks
          and how its layout is arranged.
        </p>

        <p>
          With CSS, we can control colors, sizes, spacing, positioning,
          typography, layout, and many other visual aspects of a website.
        </p>

        <p>
          CSS is usually used together with HTML. HTML defines the structure and
          content, while CSS controls how that structure is presented.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Selectors</h3>
        <p>A selector is used to target the HTML elements we want to style.</p>

        <pre>
          <code>{`.title {
  font-size: 24px;
}

p {
  line-height: 1.6;
}`}</code>
        </pre>

        <h3>Properties and Values</h3>
        <p>
          CSS uses properties and values to define how an element should look
          and behave.
        </p>

        <pre>
          <code>{`p {
  color: black;
  font-size: 16px;
}`}</code>
        </pre>

        <h3>Classes</h3>
        <p>
          A class lets us apply the same styling to one or multiple elements
          that share the same class.
        </p>

        <pre>
          <code>{`.card {
  padding: 20px;
}`}</code>
        </pre>

        <h3>Box Model</h3>
        <p>
          Every element on a page can be understood through the box model, which
          consists of content, padding, border, and margin.
        </p>

        <pre>
          <code>{`.card {
  margin: 20px;
  padding: 16px;
  border: 1px solid black;
}`}</code>
        </pre>

        <h3>Display</h3>
        <p>
          The display property determines how an element is displayed and how it
          interacts with other elements.
        </p>

        <pre>
          <code>{`.container {
  display: flex;
}`}</code>
        </pre>

        <h3>Flexbox</h3>
        <p>
          Flexbox is useful for arranging elements in one dimension, either
          horizontally or vertically.
        </p>

        <pre>
          <code>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}</code>
        </pre>

        <h3>Grid</h3>
        <p>
          CSS Grid is used to create two-dimensional layouts using rows and
          columns.
        </p>

        <pre>
          <code>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}</code>
        </pre>

        <h3>Position</h3>
        <p>
          The position property controls how an element is placed within the
          layout.
        </p>

        <pre>
          <code>{`.navbar {
  position: fixed;
  top: 0;
  left: 0;
}`}</code>
        </pre>

        <h3>Responsive Design</h3>
        <p>
          Responsive design allows a website to adapt to different screen sizes,
          such as desktop, tablet, and mobile.
        </p>

        <pre>
          <code>{`@media (max-width: 768px) {
  .container {
    padding: 16px;
  }
}`}</code>
        </pre>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Styling Text</h3>

        <pre>
          <code>{`h1 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}`}</code>
        </pre>

        <h3>Spacing</h3>

        <pre>
          <code>{`.card {
  margin: 20px;
  padding: 16px;
}`}</code>
        </pre>

        <h3>Flexbox Layout</h3>

        <pre>
          <code>{`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}</code>
        </pre>

        <h3>Grid Layout</h3>

        <pre>
          <code>{`.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}`}</code>
        </pre>

        <h3>Responsive Layout</h3>

        <pre>
          <code>{`@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`}</code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>CSS Is Not Being Applied</h3>
        <p>
          Check your selector, class name, stylesheet import, and make sure your
          CSS properties are written correctly.
        </p>

        <h3>Mixing Up Margin and Padding</h3>
        <p>
          Padding controls the space between the content and the border, while
          margin controls the space between an element and other elements.
        </p>

        <h3>Layout Doesn't Look Right</h3>
        <p>
          Check your display, width, height, margin, padding, and any Flexbox or
          Grid properties you are using.
        </p>

        <h3>An Element Is Difficult to Position</h3>
        <p>
          Check how you are using position and understand the relationship
          between the positioned element and its parent element.
        </p>

        <h3>The Mobile Layout Looks Broken</h3>
        <p>
          Check your responsive layout and use a media query when necessary so
          the website can adapt to different screen sizes.
        </p>
      </section>
    </NoteDetail>
  );
}
