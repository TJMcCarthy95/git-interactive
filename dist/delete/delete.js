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
const branch_1 = require("../branch/branch");
const utils_1 = require("../utils");
exports.deleteBranches = () => __awaiter(void 0, void 0, void 0, function* () {
    const { branches } = yield prompter_1.prompt({
        type: "multiselect",
        name: "branches",
        message: "Delete branch",
        warn: "current branch",
        choices: utils_1.mapBranchesToPromptChoices(yield branch_1.getBranches())
    });
    if (!branches) {
        console.log("No branches selected!");
        return;
    }
    const { confirmation } = yield prompter_1.prompt({
        type: "toggle",
        name: "confirmation",
        message: `Are you sure you want to delete: ${branches.join()}`,
        active: "Yes",
        inactive: "No"
    });
    if (!!confirmation) {
        branches.forEach((branch) => __awaiter(void 0, void 0, void 0, function* () {
            yield exports.gitDelete(branch);
        }));
    }
    else {
        console.log("Operation cancelled!");
    }
});
exports.gitDelete = (branch) => __awaiter(void 0, void 0, void 0, function* () {
    if (!branch) {
        console.log("No branch selected!");
        return;
    }
    const { stdout, stderr } = yield utils_1.execute(`git branch -D ${branch}`);
    process.stdout.write(stdout);
    process.stderr.write(stderr);
});
//# sourceMappingURL=delete.js.map