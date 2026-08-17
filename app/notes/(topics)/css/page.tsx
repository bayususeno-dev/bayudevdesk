import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function CssNote() {
  return (
    <NoteDetail title="CSS" description="Catatan tentang styling dan layout.">
      <section>
        <h2>Overview</h2>

        <p>
          CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan dan
          layout pada halaman web.
        </p>

        <p>
          Dengan CSS, kita dapat mengatur warna, ukuran, jarak, posisi,
          typography, layout, dan berbagai aspek visual lainnya.
        </p>

        <p>
          CSS biasanya digunakan bersama HTML. HTML menentukan struktur dan
          konten, sedangkan CSS menentukan bagaimana struktur tersebut
          ditampilkan.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Selectors</h3>
        <p>
          Selector digunakan untuk menentukan element HTML yang ingin diberi
          styling.
        </p>

        <pre>
          <code>{`.title {
  font-size: 24px;
}

p {
  line-height: 1.6;
}`}</code>
        </pre>

        <h3>Properties dan Values</h3>
        <p>
          CSS menggunakan property dan value untuk menentukan bagaimana sebuah
          element ditampilkan.
        </p>

        <pre>
          <code>{`p {
  color: black;
  font-size: 16px;
}`}</code>
        </pre>

        <h3>Class</h3>
        <p>
          Class digunakan untuk memberikan styling pada satu atau beberapa
          element yang memiliki class yang sama.
        </p>

        <pre>
          <code>{`.card {
  padding: 20px;
}`}</code>
        </pre>

        <h3>Box Model</h3>
        <p>
          Setiap element pada halaman dapat dipahami melalui box model yang
          terdiri dari content, padding, border, dan margin.
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
          Property display menentukan bagaimana sebuah element ditampilkan dan
          berinteraksi dengan element lainnya.
        </p>

        <pre>
          <code>{`.container {
  display: flex;
}`}</code>
        </pre>

        <h3>Flexbox</h3>
        <p>
          Flexbox digunakan untuk mengatur layout dalam satu dimensi, baik
          secara horizontal maupun vertikal.
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
          CSS Grid digunakan untuk membuat layout dua dimensi menggunakan baris
          dan kolom.
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
          Position digunakan untuk mengatur bagaimana sebuah element ditempatkan
          dalam layout.
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
          Responsive design memungkinkan tampilan website menyesuaikan berbagai
          ukuran layar seperti desktop, tablet, dan mobile.
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

        <h3>CSS tidak diterapkan</h3>
        <p>
          Periksa kembali selector, nama class, import stylesheet, dan pastikan
          property CSS ditulis dengan benar.
        </p>

        <h3>Margin dan padding tertukar</h3>
        <p>
          Padding mengatur jarak antara content dan border, sedangkan margin
          mengatur jarak antara sebuah element dengan element lainnya.
        </p>

        <h3>Layout tidak sesuai</h3>
        <p>
          Periksa display, width, height, margin, padding, serta property
          Flexbox atau Grid yang digunakan.
        </p>

        <h3>Element sulit diposisikan</h3>
        <p>
          Periksa penggunaan position dan pahami hubungan antara element yang
          diposisikan dengan parent element-nya.
        </p>

        <h3>Tampilan mobile berantakan</h3>
        <p>
          Periksa responsive layout dan gunakan media query jika diperlukan agar
          tampilan dapat menyesuaikan ukuran layar.
        </p>
      </section>
    </NoteDetail>
  );
}
