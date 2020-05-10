import { prompt } from "../prompter";
import { execute, mapBranchesToPromptChoices } from "../utils";
import { getBranches } from "../branch/branch";

export const mergeBranch = async () => {
  const { branch } = await prompt({
    type: "select",
    name: "branch",
    message: "Merge branch",
    warn: "current branch",
    choices: mapBranchesToPromptChoices(
      (await getBranches()).filter((branch) => !branch.isCurrent)
    )
  });

  await gitMerge(branch);
};

export const gitMerge = async (branch: string) => {
  if (!branch) {
    console.log("Branch not selected!");
    return;
  }

  const { stdout, stderr } = await execute(`git merge ${branch}`);

  process.stdout.write(stdout);
  process.stderr.write(stderr);
};
