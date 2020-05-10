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
const utils_1 = require("../utils");
exports.getBranches = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: branches } = yield exports.gitBranch();
    return branches
        .split(/\n/)
        .filter((branch) => !!branch.trim())
        .map((branchString) => {
        const [_, flag, branch, commit] = branchString.match(/([* ]) +([^ ]+) +(.+)/);
        return {
            branch,
            commit,
            isCurrent: flag === "*"
        };
    });
});
exports.gitBranch = () => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.execute("git branch -v"); });
//# sourceMappingURL=branch.js.map