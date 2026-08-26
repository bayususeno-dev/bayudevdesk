import NoteDetail from "@/components/NoteDetail/NoteDetail";

export default function GitGithubNote() {
  return (
    <NoteDetail
      title="Git & GitHub"
      description="Notes on Git and GitHub that I’ve been learning."
    >
      <section>
        <h2>Overview</h2>

        <p>
          Git is a version control system that helps us track, manage, and
          organize changes in a project.
        </p>

        <p>
          GitHub is an online platform where we can store Git repositories,
          collaborate with others, and manage projects online.
        </p>

        <p>
          Git and GitHub are often used together, but they are not the same
          thing. Git works locally on your project, while GitHub provides a
          place to store and manage your repository online.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Repository</h3>
        <p>
          A repository is where Git stores your project along with its history
          of changes.
        </p>

        <h3>Working Directory</h3>
        <p>
          The working directory is the current state of your project files that
          you are working on locally.
        </p>

        <h3>Staging Area</h3>
        <p>
          The staging area lets you choose which changes you want to include in
          your next commit.
        </p>

        <pre>
          <code>{`git add .`}</code>
        </pre>

        <h3>Commit</h3>
        <p>
          A commit saves a snapshot of your staged changes to the Git
          repository, along with a message describing what changed.
        </p>

        <pre>
          <code>{`git commit -m "Add notes"`}</code>
        </pre>

        <h3>Branch</h3>
        <p>
          A branch gives you a separate development path where you can work on
          changes without directly affecting another branch.
        </p>

        <pre>
          <code>{`git switch -c feature/example`}</code>
        </pre>

        <h3>Remote</h3>
        <p>
          A remote is a repository stored somewhere else and connected to your
          local repository.
        </p>

        <pre>
          <code>{`git remote -v`}</code>
        </pre>

        <h3>Push</h3>
        <p>
          Push sends commits from your local repository to a remote repository,
          such as GitHub.
        </p>

        <pre>
          <code>{`git push`}</code>
        </pre>

        <h3>Pull</h3>
        <p>
          Pull gets changes from a remote repository and integrates them into
          your current local branch.
        </p>

        <pre>
          <code>{`git pull`}</code>
        </pre>

        <h3>Fetch</h3>
        <p>
          Fetch gets the latest information and commits from a remote repository
          without immediately integrating those changes into your local branch.
        </p>

        <pre>
          <code>{`git fetch`}</code>
        </pre>
      </section>

      <section>
        <h2>Examples</h2>

        <h3>Checking the Status</h3>

        <pre>
          <code>{`git status`}</code>
        </pre>

        <h3>Staging Changes</h3>

        <pre>
          <code>{`git add .`}</code>
        </pre>

        <h3>Creating a Commit</h3>

        <pre>
          <code>{`git commit -m "Update notes"`}</code>
        </pre>

        <h3>Pushing to GitHub</h3>

        <pre>
          <code>{`git push`}</code>
        </pre>

        <h3>Viewing Commit History</h3>

        <pre>
          <code>{`git log --oneline`}</code>
        </pre>

        <h3>Viewing the Commit Graph</h3>

        <pre>
          <code>{`git log --all --decorate --oneline --graph`}</code>
        </pre>

        <h3>Creating a Branch</h3>

        <pre>
          <code>{`git switch -c feature/navbar`}</code>
        </pre>
      </section>

      <section>
        <h2>Common Issues</h2>

        <h3>Changes Are Not Included in the Commit</h3>
        <p>
          Check the repository status with <code>git status</code> and make sure
          the changes you want to commit have been added to the staging area.
        </p>

        <h3>Committing Before git add</h3>
        <p>
          Git only includes changes that are in the staging area when creating a
          commit. Run <code>git add</code> first to stage the changes you want
          to include.
        </p>

        <h3>Push Is Rejected</h3>
        <p>
          Check the remote repository, the branch you are currently using, and
          make sure your local repository has the correct access to the remote.
        </p>

        <h3>Working on the Wrong Branch</h3>
        <p>
          Make sure your local branch and the remote branch you are working with
          are the ones you intended to use before pushing or pulling changes.
        </p>

        <h3>Merge Conflict</h3>
        <p>
          A merge conflict happens when Git cannot automatically decide which
          changes to keep. Check the files with conflicts, resolve them
          manually, and then continue the merge process.
        </p>
      </section>
    </NoteDetail>
  );
}
