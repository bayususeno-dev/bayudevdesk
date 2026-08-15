export default function WebDevelopmentGuide() {
  return (
    <main className="page-container">
      <header className="page-header">
        <h1>Web Development Guide</h1>
        <p>
          Panduan membuat website dari nol sampai bisa diakses secara online.
        </p>
      </header>

      <section className="guide-section">
        <h2>1. Persiapan</h2>
        <p>
          Sebelum mulai membuat website, siapkan tools dan teknologi yang
          dibutuhkan.
        </p>

        <ul>
          <li>Text editor/VSCode</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>2. Memilih Teknologi</h2>
        <p>
          Tentukan teknologi yang akan digunakan sesuai kebutuhan website yang
          ingin dibuat.
        </p>

        <ul>
          <li>HTML, CSS, dan JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>3. Membuat Project</h2>
        <p>
          Setelah menentukan teknologi yang akan digunakan, buat project baru
          sebagai tempat untuk mengembangkan website.
        </p>

        <ol>
          <li>Install Node.js</li>
          <li>Buat project menggunakan framework yang dipilih</li>
          <li>Buka project menggunakan VS Code</li>
        </ol>
      </section>

      <section className="guide-section">
        <h2>4. Mulai Coding</h2>
        <p>
          Setelah project siap, mulai bangun website dengan membuat struktur
          halaman, komponen, dan fitur yang dibutuhkan.
        </p>

        <ul>
          <li>Membuat struktur halaman</li>
          <li>Membuat komponen</li>
          <li>Menambahkan styling</li>
          <li>Menambahkan fitur</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>5. Git & GitHub</h2>
        <p>
          Gunakan Git untuk mencatat perubahan pada project dan GitHub untuk
          menyimpan serta mengelola repository secara online.
        </p>

        <ol>
          <li>Inisialisasi Git pada project</li>
          <li>Buat repository di GitHub</li>
          <li>Hubungkan project dengan repository</li>
          <li>Commit perubahan</li>
          <li>Push project ke GitHub</li>
        </ol>
      </section>

      <section className="guide-section">
        <h2>6. Testing</h2>
        <p>
          Pastikan website berjalan dengan baik sebelum dipublikasikan secara
          online.
        </p>

        <ul>
          <li>Periksa setiap halaman</li>
          <li>Pastikan semua link berfungsi</li>
          <li>Periksa tampilan pada berbagai ukuran layar</li>
          <li>Periksa error pada browser dan terminal</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>7. Deployment</h2>
        <p>
          Setelah website selesai dan sudah diuji, deploy project agar dapat
          diakses melalui internet.
        </p>

        <ol>
          <li>Pilih platform deployment</li>
          <li>Hubungkan repository GitHub</li>
          <li>Konfigurasi project jika diperlukan</li>
          <li>Deploy project</li>
          <li>Pastikan website dapat diakses secara online</li>
        </ol>
      </section>
    </main>
  );
}
