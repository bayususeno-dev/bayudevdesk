import Navbar from "@/components/Navbar/Navbar";
import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function GitGithubNote() {
  return (
    <NoteDetail
      title="Git & GitHub"
      description="Catatan mengenai Git dan GitHub yang saya pelajari."
    >
      <Navbar />
      <section>
        <h2>Overview</h2>

        <p>
          Git adalah version control system yang digunakan untuk mencatat,
          mengelola, dan melacak perubahan pada project.
        </p>

        <p>
          GitHub adalah platform online yang dapat digunakan untuk menyimpan
          repository Git, berkolaborasi, dan mengelola project secara online.
        </p>

        <p>
          Git dan GitHub sering digunakan bersama, tetapi keduanya bukan hal
          yang sama. Git bekerja pada project secara lokal, sedangkan GitHub
          menyediakan tempat untuk menyimpan dan mengelola repository secara
          online.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Repository</h3>
        <p>
          Repository adalah tempat Git menyimpan project beserta riwayat
          perubahan yang terjadi pada project tersebut.
        </p>

        <h3>Working Directory</h3>
        <p>
          Working directory adalah kondisi file project yang sedang kita
          kerjakan secara lokal.
        </p>

        <h3>Staging Area</h3>
        <p>
          Staging area digunakan untuk menentukan perubahan mana yang akan
          dimasukkan ke dalam commit.
        </p>

        <pre>
          <code>{`git add .`}</code>
        </pre>

        <h3>Commit</h3>
        <p>
          Commit digunakan untuk menyimpan snapshot perubahan ke dalam
          repository Git beserta pesan yang menjelaskan perubahan tersebut.
        </p>

        <pre>
          <code>{`git commit -m "Add notes"`}</code>
        </pre>

        <h3>Branch</h3>
        <p>
          Branch digunakan untuk membuat jalur development yang terpisah dari
          branch lainnya.
        </p>

        <pre>
          <code>{`git switch -c feature/example`}</code>
        </pre>

        <h3>Remote</h3>
        <p>
          Remote adalah repository yang berada di lokasi lain dan terhubung
          dengan repository lokal.
        </p>

        <pre>
          <code>{`git remote -v`}</code>
        </pre>

        <h3>Push</h3>
        <p>
          Push digunakan untuk mengirim commit dari repository lokal ke remote
          repository seperti GitHub.
        </p>

        <pre>
          <code>{`git push`}</code>
        </pre>

        <h3>Pull</h3>
        <p>
          Pull digunakan untuk mengambil perubahan dari remote repository dan
          menggabungkannya ke branch lokal.
        </p>

        <pre>
          <code>{`git pull`}</code>
        </pre>

        <h3>Fetch</h3>
        <p>
          Fetch digunakan untuk mengambil informasi dan commit terbaru dari
          remote tanpa langsung menggabungkannya ke branch lokal.
        </p>

        <pre>
          <code>{`git fetch`}</code>
        </pre>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Memeriksa Status</h3>

        <pre>
          <code>{`git status`}</code>
        </pre>

        <h3>Menambahkan Perubahan</h3>

        <pre>
          <code>{`git add .`}</code>
        </pre>

        <h3>Membuat Commit</h3>

        <pre>
          <code>{`git commit -m "Update notes"`}</code>
        </pre>

        <h3>Mengirim ke GitHub</h3>

        <pre>
          <code>{`git push`}</code>
        </pre>

        <h3>Melihat Riwayat Commit</h3>

        <pre>
          <code>{`git log --oneline`}</code>
        </pre>

        <h3>Melihat Graph Commit</h3>

        <pre>
          <code>{`git log --all --decorate --oneline --graph`}</code>
        </pre>

        <h3>Membuat Branch</h3>

        <pre>
          <code>{`git switch -c feature/navbar`}</code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>Changes belum masuk commit</h3>
        <p>
          Periksa status repository menggunakan <code>git status</code> dan
          pastikan perubahan sudah dimasukkan ke staging area sebelum membuat
          commit.
        </p>

        <h3>Commit dilakukan sebelum git add</h3>
        <p>
          Git commit hanya akan menyimpan perubahan yang sudah berada di staging
          area. Gunakan <code>git add</code> terlebih dahulu.
        </p>

        <h3>Push ditolak</h3>
        <p>
          Periksa remote repository, branch yang sedang digunakan, dan pastikan
          repository lokal memiliki akses yang sesuai ke remote.
        </p>

        <h3>Branch berbeda</h3>
        <p>
          Pastikan branch lokal dan branch remote yang digunakan sesuai sebelum
          melakukan push atau pull.
        </p>

        <h3>Merge conflict</h3>
        <p>
          Merge conflict terjadi ketika Git tidak dapat menentukan perubahan
          mana yang harus digunakan. Periksa file yang mengalami conflict,
          selesaikan perubahan secara manual, lalu lanjutkan proses merge.
        </p>
      </section>
    </NoteDetail>
  );
}
