import { Branch } from "./types";
import { Choice } from "./prompter";

import { promisify } from "util";
import { exec } from "child_process";

export const mapBranchToPromptChoice = (
  { branch, commit, isCurrent }: Branch,
  disable = true
): Choice => ({
  value: branch,
  description: commit,
  disabled: disable ? isCurrent : false
});

export const mapBranchesToPromptChoices = (
  branches: Branch[],
  disable = true
): Choice[] =>
  branches.map((branch) => mapBranchToPromptChoice(branch, disable));

export const execute = promisify(exec);
