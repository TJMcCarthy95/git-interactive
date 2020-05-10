#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const branch_1 = require("./branch");
const handlers_1 = require("../handlers");
branch_1.getBranches().catch(handlers_1.onError);
//# sourceMappingURL=index.js.map