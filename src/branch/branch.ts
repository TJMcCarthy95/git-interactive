import { execute } from "../utils";
import { Branch } from "../types";

export const getBranches = async (): Promise<Branch[]> => {
  const { stdout: branches } = await gitBranch();
  return branches
    .split(/\n/)
    .filter((branch) => !!branch.trim())
    .map(
      (branchString): Branch => {
        const [_, flag, branch, commit] = branchString.match(
          /([* ]) +([^ ]+) +(.+)/
        );
        return {
          branch,
          commit,
          isCurrent: flag === "*"
        };
      }
    );
};

export const gitBranch = async () => await execute("git branch -v");
