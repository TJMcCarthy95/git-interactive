import { prompt } from "../prompter";
import { execute, mapBranchesToPromptChoices } from "../utils";
import { getBranches } from "../branch/branch";

export const logBranch = async () => {
  const { branch } = await prompt({
    type: "select",
    name: "branch",
    message: "Select branch",
    choices: mapBranchesToPromptChoices(await getBranches(), false)
  });

  await gitLog(branch);
};

export const gitLog = async (branch: string) => {
  if (!branch) {
    console.log("Branch not selected!");
    return;
  }

  const { stdout, stderr } = await execute(`git log ${branch}`);

  process.stdout.write(stdout);
  process.stderr.write(stderr);
};
