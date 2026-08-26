import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function JavaScriptNote() {
  return (
    <NoteDetail
      title="JavaScript"
      description="Notes on the JavaScript concepts I’ve been learning."
    >
      <section>
        <h2>Overview</h2>

        <p>
          JavaScript is a programming language used to add logic, interaction,
          and dynamic behavior to websites.
        </p>

        <p>
          JavaScript can run in the browser, but it can also be used outside the
          browser with runtimes such as Node.js.
        </p>

        <p>
          In web development, JavaScript can be used to work with data, handle
          events, manipulate pages, communicate with APIs, and build
          applications using libraries or frameworks such as React.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Variables</h3>
        <p>
          Variables are used to store values that we can use throughout a
          program. JavaScript provides <code>let</code> and <code>const</code>{" "}
          for declaring variables.
        </p>

        <pre>
          <code>{`const name = "Bayu";
let age = 20;`}</code>
        </pre>

        <h3>Data Types</h3>
        <p>
          JavaScript has several data types, including string, number, boolean,
          object, array, null, and undefined.
        </p>

        <pre>
          <code>{`const name = "Bayu";
const age = 20;
const isLearning = true;`}</code>
        </pre>

        <h3>Functions</h3>
        <p>Functions let us group logic into reusable pieces of code.</p>

        <pre>
          <code>{`function greet(name) {
  return "Hello " + name;
}`}</code>
        </pre>

        <h3>Objects</h3>
        <p>Objects are used to store related data as key-value pairs.</p>

        <pre>
          <code>{`const user = {
  name: "Bayu",
  role: "Developer"
};`}</code>
        </pre>

        <h3>Arrays</h3>
        <p>Arrays are used to store multiple values in a single variable.</p>

        <pre>
          <code>{`const skills = ["HTML", "CSS", "JavaScript"];`}</code>
        </pre>

        <h3>Conditions</h3>
        <p>
          Conditional statements let us run different logic depending on a
          certain condition.
        </p>

        <pre>
          <code>{`if (age >= 18) {
  console.log("Adult");
}`}</code>
        </pre>

        <h3>Loops</h3>
        <p>
          Loops are used when we need to run the same process multiple times.
        </p>

        <pre>
          <code>{`for (let i = 0; i < 3; i++) {
  console.log(i);
}`}</code>
        </pre>

        <h3>Destructuring</h3>
        <p>
          Destructuring gives us a convenient way to extract values from objects
          or arrays.
        </p>

        <pre>
          <code>{`const user = {
  name: "Bayu",
  role: "Developer"
};

const { name, role } = user;`}</code>
        </pre>

        <h3>Template Literals</h3>
        <p>
          Template literals make it easier to create strings that include
          variables or expressions.
        </p>

        <pre>
          <code>{`const name = "Bayu";
const message = \`Hello, \${name}\`;`}</code>
        </pre>

        <h3>Optional Chaining</h3>
        <p>
          Optional chaining lets us access a property without throwing an error
          when the object or a property earlier in the chain is unavailable.
        </p>

        <pre>
          <code>{`const city = user?.address?.city;`}</code>
        </pre>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Function</h3>

        <pre>
          <code>{`function add(a, b) {
  return a + b;
}

const result = add(5, 3);`}</code>
        </pre>

        <h3>Array Method</h3>

        <pre>
          <code>{`const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);`}</code>
        </pre>

        <h3>Object Destructuring</h3>

        <pre>
          <code>{`const user = {
  name: "Bayu",
  age: 20
};

const { name, age } = user;`}</code>
        </pre>

        <h3>Conditional</h3>

        <pre>
          <code>{`const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Please login");
}`}</code>
        </pre>

        <h3>Event Handling</h3>

        <pre>
          <code>{`button.addEventListener("click", () => {
  console.log("Button clicked");
});`}</code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>Using an Undefined Variable</h3>
        <p>
          Make sure a variable has been declared before using it, and double
          check the spelling of its name.
        </p>

        <pre>
          <code>{`console.log(username);

// username has not been defined`}</code>
        </pre>

        <h3>Confusing let and const</h3>
        <p>
          Use <code>const</code> when a variable does not need to be reassigned,
          and <code>let</code> when its value needs to change.
        </p>

        <h3>Misunderstanding Data Types</h3>
        <p>
          Pay attention to data types when performing operations or comparisons
          so you get the result you expect.
        </p>

        <h3>Function Errors</h3>
        <p>
          Make sure parameters, arguments, and return values are being used
          correctly for the function you are building.
        </p>

        <h3>Problems with Asynchronous Code</h3>
        <p>
          When working with API data or other asynchronous processes, make sure
          you understand Promises, async, and await so the process behaves as
          expected.
        </p>
      </section>
    </NoteDetail>
  );
}
