import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function GitGithubNote() {
  return (
    <NoteDetail
      title="Git & GitHub"
      description="Catatan mengenai Git dan GitHub yang saya pelajari."
    >
      <h2>Apa itu Git?</h2>
      <p>
        Git adalah sistem kontrol versi yang digunakan untuk melacak perubahan
        dalam file-file proyek.
      </p>
      <h2>Apa itu GitHub?</h2>
      <p>
        GitHub adalah platform berbasis web yang menggunakan Git untuk manajemen
        kode sumber.
      </p>
    </NoteDetail>
  );
}
