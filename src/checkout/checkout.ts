import { prompt } from "../prompter";
import { execute, mapBranchesToPromptChoices } from "../utils";
import { getBranches } from "../branch/branch";

export const checkoutBranch = async () => {
  const { branch } = await prompt({
    type: "select",
    name: "branch",
    message: "Switch branch",
    warn: "current branch",
    choices: mapBranchesToPromptChoices(await getBranches())
  });

  await gitCheckout(branch);
};

export const gitCheckout = async (branch: string) => {
  if (!branch) {
    console.log("Branch not selected!");
    return;
  }

  const { stdout, stderr } = await execute(`git checkout ${branch}`);

  process.stdout.write(stdout);
  process.stderr.write(stderr);
};
