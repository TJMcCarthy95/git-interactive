#!/usr/bin/env node

import { prompt } from "./prompter";
import { onError } from "./handlers";
import { checkoutBranch } from "./checkout/checkout";
import { deleteBranches } from "./delete/delete";
import { logBranch } from "./log/log";
import { mergeBranch } from "./merge/merge";

enum Actions {
  Checkout = "Checkout",
  Delete = "Delete",
  Log = "Log",
  Merge = "Merge"
}

(async () => {
  const { action } = await prompt({
    type: "select",
    name: "action",
    message: "Select action",
    choices: Object.keys(Actions).map((action) => ({ value: action }))
  });

  switch (action) {
    case Actions.Checkout:
      return await checkoutBranch();
    case Actions.Delete:
      return await deleteBranches();
    case Actions.Log:
      return await logBranch();
    case Actions.Merge:
      return await mergeBranch();
    default: {
      console.log("No action selected!");
      return;
    }
  }
})().catch(onError);
