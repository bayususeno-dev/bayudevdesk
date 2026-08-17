import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function HtmlNote() {
  return (
    <NoteDetail title="HTML" description="Catatan dasar tentang HTML.">
      <section>
        <h2>Overview</h2>
        <p>
          HTML digunakan untuk menyusun struktur dan konten sebuah halaman web.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>
        <p>Catatan mengenai konsep-konsep dasar HTML yang saya pelajari.</p>
      </section>

      <section>
        <h2>Examples</h2>
        <p>Contoh penggunaan HTML yang saya pelajari.</p>
      </section>

      <section>
        <h2>Common Issues</h2>
        <p>
          Kesalahan atau hal-hal yang perlu diperhatikan saat menggunakan HTML.
        </p>
      </section>
    </NoteDetail>
  );
}
