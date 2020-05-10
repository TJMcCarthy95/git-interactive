"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompter_1 = require("../prompter");
const utils_1 = require("../utils");
const branch_1 = require("../branch/branch");
exports.mergeBranch = () => __awaiter(void 0, void 0, void 0, function* () {
    const { branch } = yield prompter_1.prompt({
        type: "select",
        name: "branch",
        message: "Merge branch",
        warn: "current branch",
        choices: utils_1.mapBranchesToPromptChoices((yield branch_1.getBranches()).filter((branch) => !branch.isCurrent))
    });
    yield exports.gitMerge(branch);
});
exports.gitMerge = (branch) => __awaiter(void 0, void 0, void 0, function* () {
    if (!branch) {
        console.log("Branch not selected!");
        return;
    }
    const { stdout, stderr } = yield utils_1.execute(`git merge ${branch}`);
    process.stdout.write(stdout);
    process.stderr.write(stderr);
});
//# sourceMappingURL=merge.js.map