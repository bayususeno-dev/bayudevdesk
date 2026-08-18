import Navbar from "@/components/Navbar/Navbar";
import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function ReactNote() {
  return (
    <NoteDetail
      title="React"
      description="Catatan mengenai React yang saya pelajari."
    >
      <Navbar />
      <section>
        <h2>Overview</h2>

        <p>
          React adalah library JavaScript yang digunakan untuk membangun user
          interface menggunakan component.
        </p>

        <p>
          React memungkinkan halaman dibangun dari bagian-bagian kecil yang
          dapat digunakan kembali sehingga struktur aplikasi menjadi lebih
          terorganisir.
        </p>

        <p>
          React menggunakan konsep seperti component, props, state, dan event
          untuk membangun interface yang interaktif.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Components</h3>
        <p>
          Component adalah bagian dari interface yang dapat dibuat dan digunakan
          kembali.
        </p>

        <pre>
          <code>{`export default function Greeting() {
  return <h1>Hello World</h1>;
}`}</code>
        </pre>

        <h3>JSX</h3>
        <p>
          JSX memungkinkan kita menulis struktur UI dengan syntax yang mirip
          HTML di dalam JavaScript atau TypeScript.
        </p>

        <pre>
          <code>{`const element = <h1>Hello World</h1>;`}</code>
        </pre>

        <h3>Props</h3>
        <p>
          Props digunakan untuk mengirim data dari component parent ke component
          child.
        </p>

        <pre>
          <code>{`function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}`}</code>
        </pre>

        <h3>State</h3>
        <p>
          State digunakan untuk menyimpan data yang dapat berubah selama
          component berjalan.
        </p>

        <pre>
          <code>{`const [count, setCount] = useState(0);`}</code>
        </pre>

        <h3>Event Handling</h3>
        <p>
          React dapat menangani event seperti click, input, submit, dan event
          lainnya menggunakan event handler.
        </p>

        <pre>
          <code>{`<button onClick={() => setCount(count + 1)}>
  Click
</button>`}</code>
        </pre>

        <h3>Conditional Rendering</h3>
        <p>
          Conditional rendering digunakan untuk menampilkan UI berdasarkan
          kondisi tertentu.
        </p>

        <pre>
          <code>{`{isOpen && <p>Menu is open</p>}`}</code>
        </pre>

        <h3>Rendering Lists</h3>
        <p>
          Method seperti map dapat digunakan untuk menampilkan sekumpulan data
          sebagai element React.
        </p>

        <pre>
          <code>{`const notes = ["HTML", "CSS", "JavaScript"];

{notes.map((note) => (
  <p key={note}>{note}</p>
))}`}</code>
        </pre>

        <h3>Keys</h3>
        <p>
          Key digunakan React untuk mengidentifikasi setiap element ketika
          melakukan rendering list. Key harus unik di antara sibling dan tidak
          harus berupa angka.
        </p>

        <pre>
          <code>{`const notes = [
  { key: "html", title: "HTML" },
  { key: "css", title: "CSS" }
];

{notes.map((note) => (
  <p key={note.key}>{note.title}</p>
))}`}</code>
        </pre>

        <h3>Hooks</h3>
        <p>
          Hooks adalah function yang memungkinkan component menggunakan berbagai
          fitur React seperti state dan lifecycle behavior.
        </p>

        <pre>
          <code>{`import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);`}</code>
        </pre>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Reusable Component</h3>

        <pre>
          <code>{`function Card({ title, description }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}`}</code>
        </pre>

        <h3>State</h3>

        <pre>
          <code>{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`}</code>
        </pre>

        <h3>Props</h3>

        <pre>
          <code>{`function NoteCard({ title, description }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}`}</code>
        </pre>

        <h3>Rendering Data</h3>

        <pre>
          <code>{`const notes = [
  {
    key: "html",
    title: "HTML"
  },
  {
    key: "css",
    title: "CSS"
  }
];

{notes.map((note) => (
  <p key={note.key}>{note.title}</p>
))}`}</code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>Component name tidak menggunakan PascalCase</h3>
        <p>
          Component React biasanya menggunakan PascalCase agar dapat dibedakan
          dari element HTML.
        </p>

        <pre>
          <code>{`function NoteCard() {
  return <div>Note</div>;
}`}</code>
        </pre>

        <h3>Props tidak dikirim sesuai kebutuhan</h3>
        <p>
          Pastikan nama props yang dikirim dari parent sesuai dengan props yang
          diterima oleh child component.
        </p>

        <h3>Lupa key ketika melakukan map</h3>
        <p>Ketika merender list, berikan key yang unik pada setiap element.</p>

        <h3>Salah memahami state</h3>
        <p>
          State tidak langsung berubah hanya karena setter dipanggil. React akan
          menjadwalkan update dan melakukan render kembali dengan state terbaru.
        </p>

        <h3>Menggunakan state pada Server Component</h3>
        <p>
          Pada Next.js App Router, component yang menggunakan useState atau
          event handler tertentu perlu menjadi Client Component dengan
          menggunakan directive <code>"use client"</code>.
        </p>
      </section>
    </NoteDetail>
  );
}
