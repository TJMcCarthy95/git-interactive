#!/usr/bin/env node

import { logBranch } from "./log";
import { onError } from "../handlers";

logBranch().catch(onError);
