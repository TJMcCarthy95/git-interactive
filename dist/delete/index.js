#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delete_1 = require("./delete");
const handlers_1 = require("../handlers");
delete_1.deleteBranches().catch(handlers_1.onError);
//# sourceMappingURL=index.js.map