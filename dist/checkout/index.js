#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_1 = require("./checkout");
const handlers_1 = require("../handlers");
checkout_1.checkoutBranch().catch(handlers_1.onError);
//# sourceMappingURL=index.js.map