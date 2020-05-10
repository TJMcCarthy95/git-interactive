import { prompt } from "../prompter";
import { getBranches } from "../branch/branch";
import { execute, mapBranchesToPromptChoices } from "../utils";

export const deleteBranches = async () => {
  const { branches }: { branches: string[] } = await prompt({
    type: "multiselect",
    name: "branches",
    message: "Delete branch",
    warn: "current branch",
    choices: mapBranchesToPromptChoices(await getBranches())
  });

  if (!branches) {
    console.log("No branches selected!");
    return;
  }

  const { confirmation }: { confirmation: boolean } = await prompt({
    type: "toggle",
    name: "confirmation",
    message: `Are you sure you want to delete: ${branches.join()}`,
    active: "Yes",
    inactive: "No"
  });

  if (!!confirmation) {
    branches.forEach(async (branch: string) => {
      await gitDelete(branch);
    });
  } else {
    console.log("Operation cancelled!");
  }
};

export const gitDelete = async (branch: string) => {
  if (!branch) {
    console.log("No branch selected!");
    return;
  }

  const { stdout, stderr } = await execute(`git branch -D ${branch}`);

  process.stdout.write(stdout);
  process.stderr.write(stderr);
};
