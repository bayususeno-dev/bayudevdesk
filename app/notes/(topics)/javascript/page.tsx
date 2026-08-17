import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function JavaScriptNote() {
  return (
    <NoteDetail
      title="JavaScript"
      description="Catatan mengenai JavaScript yang saya pelajari."
    >
      <section>
        <h2>Overview</h2>

        <p>
          JavaScript adalah bahasa pemrograman yang digunakan untuk menambahkan
          logic, interaksi, dan perilaku dinamis pada website.
        </p>

        <p>
          JavaScript dapat dijalankan di browser dan juga dapat digunakan di
          luar browser dengan runtime seperti Node.js.
        </p>

        <p>
          Dalam web development, JavaScript dapat digunakan untuk mengolah data,
          menangani event, memanipulasi halaman, berkomunikasi dengan API, dan
          membangun aplikasi menggunakan library atau framework seperti React.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Variables</h3>
        <p>
          Variable digunakan untuk menyimpan nilai yang dapat digunakan kembali
          dalam program. JavaScript menyediakan <code>let</code> dan{" "}
          <code>const</code> untuk mendeklarasikan variable.
        </p>

        <pre>
          <code>{`const name = "Bayu";
let age = 20;`}</code>
        </pre>

        <h3>Data Types</h3>
        <p>
          JavaScript memiliki berbagai tipe data seperti string, number,
          boolean, object, array, null, dan undefined.
        </p>

        <pre>
          <code>{`const name = "Bayu";
const age = 20;
const isLearning = true;`}</code>
        </pre>

        <h3>Functions</h3>
        <p>
          Function digunakan untuk mengelompokkan logic agar dapat digunakan
          kembali.
        </p>

        <pre>
          <code>{`function greet(name) {
  return "Hello " + name;
}`}</code>
        </pre>

        <h3>Objects</h3>
        <p>
          Object digunakan untuk menyimpan data dalam bentuk pasangan key dan
          value.
        </p>

        <pre>
          <code>{`const user = {
  name: "Bayu",
  role: "Developer"
};`}</code>
        </pre>

        <h3>Arrays</h3>
        <p>
          Array digunakan untuk menyimpan sekumpulan nilai dalam satu variable.
        </p>

        <pre>
          <code>{`const skills = ["HTML", "CSS", "JavaScript"];`}</code>
        </pre>

        <h3>Conditions</h3>
        <p>
          Conditional digunakan untuk menjalankan logic berdasarkan kondisi
          tertentu.
        </p>

        <pre>
          <code>{`if (age >= 18) {
  console.log("Adult");
}`}</code>
        </pre>

        <h3>Loops</h3>
        <p>Loop digunakan untuk menjalankan suatu proses secara berulang.</p>

        <pre>
          <code>{`for (let i = 0; i < 3; i++) {
  console.log(i);
}`}</code>
        </pre>

        <h3>Destructuring</h3>
        <p>
          Destructuring digunakan untuk mengambil nilai dari array atau object
          dengan cara yang lebih praktis.
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
          Template literal digunakan untuk membuat string yang dapat
          menggabungkan variable atau expression dengan lebih mudah.
        </p>

        <pre>
          <code>{`const name = "Bayu";
const message = \`Hello, \${name}\`;`}</code>
        </pre>

        <h3>Optional Chaining</h3>
        <p>
          Optional chaining digunakan untuk mengakses property tanpa menyebabkan
          error ketika object atau property sebelumnya tidak tersedia.
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

        <h3>Variable belum didefinisikan</h3>
        <p>
          Pastikan variable sudah dibuat sebelum digunakan dan perhatikan
          penulisan nama variable.
        </p>

        <pre>
          <code>{`console.log(username);

// username belum didefinisikan`}</code>
        </pre>

        <h3>Salah membedakan let dan const</h3>
        <p>
          Gunakan <code>const</code> ketika variable tidak perlu di-assign ulang
          dan <code>let</code> ketika nilainya memang perlu diubah.
        </p>

        <h3>Salah memahami tipe data</h3>
        <p>
          Perhatikan tipe data ketika melakukan operasi atau perbandingan agar
          hasilnya sesuai dengan yang diharapkan.
        </p>

        <h3>Kesalahan pada function</h3>
        <p>
          Pastikan parameter, argument, dan nilai return digunakan sesuai
          kebutuhan function.
        </p>

        <h3>Kesalahan pada asynchronous code</h3>
        <p>
          Ketika bekerja dengan data dari API atau proses asynchronous lainnya,
          pahami penggunaan Promise, async, dan await agar proses berjalan
          dengan benar.
        </p>
      </section>
    </NoteDetail>
  );
}
