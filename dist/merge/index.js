#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const handlers_1 = require("../handlers");
merge_1.mergeBranch().catch(handlers_1.onError);
//# sourceMappingURL=index.js.map