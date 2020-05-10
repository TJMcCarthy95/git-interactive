#!/usr/bin/env node

import { getBranches } from "./branch";
import { onError } from "../handlers";

getBranches().catch(onError);
