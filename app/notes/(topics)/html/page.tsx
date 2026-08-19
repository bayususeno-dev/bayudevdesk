import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function HtmlNote() {
  return (
    <NoteDetail title="HTML" description="Catatan dasar tentang HTML.">
      <section>
        <h2>Overview</h2>

        <p>
          HTML (HyperText Markup Language) digunakan untuk membuat struktur dan
          menyusun konten pada sebuah halaman web.
        </p>

        <p>
          HTML menggunakan element untuk menentukan jenis dan struktur konten,
          seperti heading, paragraph, link, image, list, dan form.
        </p>

        <p>
          HTML bukan bahasa pemrograman karena tidak digunakan untuk membuat
          logic seperti perulangan atau kondisi. HTML berfungsi sebagai struktur
          dasar sebuah halaman web.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Elements</h3>
        <p>
          Element adalah bagian dasar HTML yang digunakan untuk menentukan
          struktur dan jenis sebuah konten.
        </p>

        <pre>
          <code>{`<h1>Hello World</h1><p>This is a paragraph.</p>`}</code>
        </pre>

        <h3>Attributes</h3>
        <p>
          Attribute memberikan informasi tambahan atau pengaturan pada sebuah
          element.
        </p>

        <pre>
          <code>
            {`<a href="/about">About</a><img src="/image.jpg" alt="Example" />`}
          </code>
        </pre>

        <h3>Semantic HTML</h3>
        <p>
          Semantic HTML menggunakan element berdasarkan makna dan fungsi
          kontennya, seperti header, nav, main, section, article, dan footer.
        </p>

        <h3>Document Structure</h3>
        <p>
          Sebuah halaman HTML biasanya memiliki struktur dasar yang terdiri dari
          html, head, dan body.
        </p>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Heading dan Paragraph</h3>

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

        <h3>Element tidak ditutup</h3>
        <p>
          Beberapa element HTML membutuhkan closing tag. Pastikan element yang
          membutuhkan pasangan ditutup dengan benar.
        </p>

        <pre>
          <code>{`<p>Hello World</p>`}</code>
        </pre>

        <h3>Attribute salah atau tidak lengkap</h3>
        <p>
          Periksa kembali nama dan nilai attribute. Misalnya, link membutuhkan
          attribute href agar memiliki tujuan.
        </p>

        <pre>
          <code>{`<a href="/about">About</a>`}</code>
        </pre>

        <h3>Struktur HTML tidak rapi</h3>
        <p>
          Gunakan struktur element yang jelas dan nesting yang benar agar HTML
          lebih mudah dibaca dan dipelihara.
        </p>

        <h3>Menggunakan element hanya berdasarkan tampilan</h3>
        <p>
          Jangan memilih element hanya karena tampilannya. Gunakan element
          sesuai dengan makna dan fungsi kontennya, lalu gunakan CSS untuk
          mengatur tampilannya.
        </p>
      </section>
    </NoteDetail>
  );
}
