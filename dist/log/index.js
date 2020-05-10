#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("./log");
const handlers_1 = require("../handlers");
log_1.logBranch().catch(handlers_1.onError);
//# sourceMappingURL=index.js.map