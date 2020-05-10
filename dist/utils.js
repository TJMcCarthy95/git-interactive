"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const child_process_1 = require("child_process");
exports.mapBranchToPromptChoice = ({ branch, commit, isCurrent }, disable = true) => ({
    value: branch,
    description: commit,
    disabled: disable ? isCurrent : false
});
exports.mapBranchesToPromptChoices = (branches, disable = true) => branches.map((branch) => exports.mapBranchToPromptChoice(branch, disable));
exports.execute = util_1.promisify(child_process_1.exec);
//# sourceMappingURL=utils.js.map