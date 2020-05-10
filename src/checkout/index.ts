#!/usr/bin/env node

import { checkoutBranch } from "./checkout";
import { onError } from "../handlers";

checkoutBranch().catch(onError);
