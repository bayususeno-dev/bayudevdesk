import Navbar from "@/components/Navbar/Navbar";
import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function NextJSNote() {
  return (
    <NoteDetail
      title="Next.js"
      description="Catatan mengenai Next.js yang saya pelajari."
    >
      <Navbar />
      <section>
        <h2>Overview</h2>

        <p>
          Next.js adalah framework React yang digunakan untuk membangun aplikasi
          web dengan berbagai fitur dan struktur yang sudah disediakan.
        </p>

        <p>
          Next.js menyediakan fitur seperti routing berbasis file, Server
          Components, Client Components, rendering, dan optimasi yang membantu
          proses development aplikasi web.
        </p>

        <p>
          Next.js dapat digunakan untuk membuat website sederhana maupun
          aplikasi web yang lebih kompleks.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>App Router</h3>
        <p>
          App Router menggunakan folder di dalam directory app untuk menentukan
          struktur aplikasi dan routing.
        </p>

        <pre>
          <code>{`app/
├── page.tsx
├── about/
│   └── page.tsx
└── notes/
    └── page.tsx`}</code>
        </pre>

        <h3>File-based Routing</h3>
        <p>
          Folder dan file tertentu secara otomatis digunakan Next.js untuk
          menentukan URL sebuah halaman.
        </p>

        <pre>
          <code>{`app/about/page.tsx

// URL:
// /about`}</code>
        </pre>

        <h3>Dynamic Routes</h3>
        <p>
          Dynamic route menggunakan folder dengan nama yang berada di dalam
          square brackets untuk membuat route berdasarkan parameter.
        </p>

        <pre>
          <code>{`app/notes/[slug]/page.tsx

// Contoh:
// /notes/html
// /notes/css`}</code>
        </pre>

        <h3>Route Groups</h3>
        <p>
          Route group menggunakan tanda kurung untuk mengelompokkan folder tanpa
          memasukkan nama folder tersebut ke dalam URL.
        </p>

        <pre>
          <code>{`app/notes/(topics)/html/page.tsx

// URL:
// /notes/html`}</code>
        </pre>

        <h3>Server Components</h3>
        <p>
          Component pada App Router secara default merupakan Server Component.
          Server Component dapat digunakan untuk membuat UI tanpa harus mengirim
          JavaScript component tersebut ke browser.
        </p>

        <h3>Client Components</h3>
        <p>
          Client Component digunakan ketika component membutuhkan interaksi
          browser seperti state, event handler, atau browser API.
        </p>

        <pre>
          <code>{`"use client";

import { useState } from "react";`}</code>
        </pre>

        <h3>Layouts</h3>
        <p>
          Layout digunakan untuk membuat UI yang dapat digunakan bersama oleh
          beberapa halaman dalam sebuah route segment.
        </p>

        <pre>
          <code>{`app/layout.tsx`}</code>
        </pre>

        <h3>Link</h3>
        <p>
          Component Link digunakan untuk melakukan navigasi antar halaman
          menggunakan routing Next.js.
        </p>

        <pre>
          <code>{`import Link from "next/link";

<Link href="/notes">
  Notes
</Link>`}</code>
        </pre>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Basic Page</h3>

        <pre>
          <code>{`export default function About() {
  return <h1>About</h1>;
}`}</code>
        </pre>

        <h3>Nested Route</h3>

        <pre>
          <code>{`app/
└── notes/
    ├── page.tsx
    └── html/
        └── page.tsx

// /notes
// /notes/html`}</code>
        </pre>

        <h3>Route Group</h3>

        <pre>
          <code>{`app/
└── notes/
    └── (topics)/
        └── html/
            └── page.tsx

// URL:
// /notes/html`}</code>
        </pre>

        <h3>Client Component</h3>

        <pre>
          <code>{`"use client";

import { useState } from "react";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      Search
    </button>
  );
}`}</code>
        </pre>

        <h3>Navigation</h3>

        <pre>
          <code>{`import Link from "next/link";

export default function Home() {
  return (
    <Link href="/notes">
      Notes
    </Link>
  );
}`}</code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>Route menghasilkan 404</h3>
        <p>
          Periksa kembali struktur folder dan pastikan file page.tsx berada pada
          lokasi yang sesuai dengan URL yang ingin dibuat.
        </p>

        <h3>Salah memahami Route Group</h3>
        <p>
          Folder dengan nama seperti <code>(topics)</code> tidak menjadi bagian
          dari URL. Folder tersebut hanya digunakan untuk mengelompokkan route.
        </p>

        <h3>State tidak dapat digunakan</h3>
        <p>
          Component yang menggunakan useState atau event handler tertentu perlu
          menggunakan directive <code>"use client"</code>.
        </p>

        <h3>Import component tidak ditemukan</h3>
        <p>
          Periksa path import, nama file, dan struktur folder component.
          Perhatikan juga perbedaan huruf besar dan kecil pada nama file.
        </p>

        <h3>Perubahan routing tidak langsung terlihat</h3>
        <p>
          Jika terjadi masalah setelah perubahan struktur route, development
          server dapat dihentikan dan folder .next dapat dihapus agar Next.js
          membuat ulang file hasil generate.
        </p>
      </section>
    </NoteDetail>
  );
}
