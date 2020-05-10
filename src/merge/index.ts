#!/usr/bin/env node

import { mergeBranch } from "./merge";
import { onError } from "../handlers";

mergeBranch().catch(onError);
