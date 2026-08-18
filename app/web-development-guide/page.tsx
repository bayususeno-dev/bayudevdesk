import Navbar from "@/components/Navbar/Navbar";

export default function WebDevelopmentGuide() {
  return (
    <main className="page-container">
      <header className="page-header">
        <Navbar />
        <h1>Web Development Guide</h1>
        <p>
          Panduan membuat website dari nol sampai bisa diakses secara online.
        </p>
      </header>

      <section className="guide-section">
        <h2>1. Persiapan</h2>
        <p>
          Sebelum mulai membuat website, siapkan beberapa tools dasar yang akan
          digunakan selama proses development.
        </p>

        <ul>
          <li>
            <strong>Text Editor</strong> — digunakan untuk menulis dan mengelola
            kode, seperti VS Code.
          </li>
          <li>
            <strong>Node.js</strong> — digunakan untuk menjalankan JavaScript di
            luar browser dan mengelola package pada project.
          </li>
          <li>
            <strong>Git</strong> — digunakan untuk mencatat dan mengelola
            perubahan pada project.
          </li>
          <li>
            <strong>GitHub</strong> — digunakan untuk menyimpan repository
            secara online dan mengelola project bersama Git.
          </li>
          <li>
            <strong>Browser</strong> — digunakan untuk menjalankan dan menguji
            website yang dibuat.
          </li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>2. Memilih Teknologi</h2>
        <p>
          Pilih teknologi berdasarkan kebutuhan project. Untuk website
          sederhana, HTML, CSS, dan JavaScript sudah cukup. Untuk project yang
          lebih kompleks, framework dan library dapat membantu membuat
          development lebih terstruktur.
        </p>

        <ul>
          <li>
            <strong>HTML</strong> — digunakan untuk membuat struktur halaman.
          </li>
          <li>
            <strong>CSS</strong> — digunakan untuk mengatur tampilan dan layout.
          </li>
          <li>
            <strong>JavaScript</strong> — digunakan untuk menambahkan logika dan
            interaksi pada website.
          </li>
          <li>
            <strong>React</strong> — library JavaScript untuk membangun
            antarmuka menggunakan component.
          </li>
          <li>
            <strong>Next.js</strong> — framework React yang menyediakan berbagai
            fitur untuk membangun aplikasi web.
          </li>
        </ul>

        <p>
          Tidak semua project membutuhkan seluruh teknologi tersebut. Tentukan
          teknologi berdasarkan kebutuhan dan tujuan project.
        </p>
      </section>

      <section className="guide-section">
        <h2>3. Membuat Project</h2>
        <p>
          Setelah menentukan teknologi yang akan digunakan, buat project baru
          sebagai tempat untuk mengembangkan website.
        </p>

        <ol>
          <li>
            Install <strong>Node.js</strong> jika belum tersedia.
          </li>
          <li>Pilih framework atau teknologi yang akan digunakan.</li>
          <li>
            Buat project baru menggunakan tool atau command yang disediakan oleh
            teknologi tersebut.
          </li>
          <li>
            Buka folder project menggunakan <strong>VS Code</strong>.
          </li>
          <li>Install dependency yang dibutuhkan project.</li>
          <li>
            Jalankan development server untuk memastikan project dapat berjalan.
          </li>
        </ol>

        <p>
          Setelah project berhasil dijalankan, development dapat dimulai dengan
          membuat struktur halaman dan komponen yang dibutuhkan.
        </p>
      </section>

      <section className="guide-section">
        <h2>4. Mulai Coding</h2>
        <p>
          Setelah project siap, mulai bangun website secara bertahap berdasarkan
          struktur dan fitur yang dibutuhkan.
        </p>

        <ol>
          <li>Buat struktur halaman sesuai kebutuhan website.</li>
          <li>Buat component untuk bagian yang dapat digunakan kembali.</li>
          <li>Tambahkan styling untuk mengatur tampilan dan layout.</li>
          <li>
            Tambahkan logic dan interaksi menggunakan JavaScript atau teknologi
            yang digunakan.
          </li>
          <li>
            Jalankan dan periksa website secara berkala selama proses
            development.
          </li>
          <li>Perbaiki error dan lakukan perubahan secara bertahap.</li>
        </ol>

        <p>
          Sebaiknya project dikembangkan secara bertahap. Selesaikan satu
          bagian, periksa hasilnya, lalu lanjutkan ke bagian berikutnya.
        </p>
      </section>

      <section className="guide-section">
        <h2>5. Git & GitHub</h2>
        <p>
          Gunakan Git untuk mencatat perubahan pada project dan GitHub untuk
          menyimpan repository secara online.
        </p>

        <ol>
          <li>Inisialisasi Git pada project jika belum menggunakan Git.</li>
          <li>Buat repository di GitHub.</li>
          <li>Hubungkan project lokal dengan repository GitHub.</li>
          <li>
            Periksa perubahan menggunakan <code>git status</code>.
          </li>
          <li>
            Masukkan perubahan ke staging area menggunakan <code>git add</code>.
          </li>
          <li>
            Simpan perubahan dengan membuat commit menggunakan{" "}
            <code>git commit</code>.
          </li>
          <li>
            Kirim commit ke GitHub menggunakan <code>git push</code>.
          </li>
        </ol>

        <p>
          Commit sebaiknya dibuat setelah menyelesaikan perubahan atau bagian
          tertentu dari project agar riwayat development tetap mudah dipahami.
        </p>
      </section>

      <section className="guide-section">
        <h2>6. Testing</h2>
        <p>
          Sebelum website dipublikasikan, periksa setiap bagian untuk memastikan
          website berjalan sesuai yang diharapkan.
        </p>

        <ul>
          <li>Periksa setiap halaman dan pastikan halaman dapat dibuka.</li>
          <li>
            Periksa semua link dan pastikan mengarah ke halaman yang benar.
          </li>
          <li>
            Periksa interaksi seperti button, menu, form, dan fitur lainnya.
          </li>
          <li>Periksa tampilan pada berbagai ukuran layar.</li>
          <li>Periksa error yang muncul pada browser dan terminal.</li>
          <li>
            Periksa kembali project setelah melakukan perubahan atau perbaikan.
          </li>
        </ul>

        <p>
          Testing sebaiknya dilakukan secara berkala selama development, bukan
          hanya setelah seluruh website selesai dibuat.
        </p>
      </section>

      <section className="guide-section">
        <h2>7. Deployment</h2>
        <p>
          Setelah website selesai dikembangkan dan diuji, deploy project agar
          dapat diakses melalui internet.
        </p>

        <ol>
          <li>
            Pilih platform deployment yang sesuai dengan teknologi yang
            digunakan.
          </li>
          <li>Hubungkan repository project dengan platform deployment.</li>
          <li>
            Konfigurasi project jika diperlukan, seperti environment variables
            atau build settings.
          </li>
          <li>Jalankan proses deployment.</li>
          <li>
            Buka website melalui URL yang diberikan oleh platform deployment.
          </li>
          <li>Lakukan pengecekan kembali setelah website berhasil online.</li>
        </ol>

        <p>
          Deployment bukan berarti proses development selesai. Setelah website
          online, project masih dapat diperbarui, diperbaiki, dan dikembangkan
          lebih lanjut.
        </p>
      </section>
    </main>
  );
}
