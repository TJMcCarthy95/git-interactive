#!/usr/bin/env node

import { deleteBranches } from "./delete";
import { onError } from "../handlers";

deleteBranches().catch(onError);
