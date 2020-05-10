#!/usr/bin/env node
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
const prompter_1 = require("./prompter");
const handlers_1 = require("./handlers");
const checkout_1 = require("./checkout/checkout");
const delete_1 = require("./delete/delete");
const log_1 = require("./log/log");
const merge_1 = require("./merge/merge");
var Actions;
(function (Actions) {
    Actions["Checkout"] = "Checkout";
    Actions["Delete"] = "Delete";
    Actions["Log"] = "Log";
    Actions["Merge"] = "Merge";
})(Actions || (Actions = {}));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const { action } = yield prompter_1.prompt({
        type: "select",
        name: "action",
        message: "Select action",
        choices: Object.keys(Actions).map((action) => ({ value: action }))
    });
    switch (action) {
        case Actions.Checkout:
            return yield checkout_1.checkoutBranch();
        case Actions.Delete:
            return yield delete_1.deleteBranches();
        case Actions.Log:
            return yield log_1.logBranch();
        case Actions.Merge:
            return yield merge_1.mergeBranch();
        default: {
            console.log("No action selected!");
            return;
        }
    }
}))().catch(handlers_1.onError);
//# sourceMappingURL=index.js.map