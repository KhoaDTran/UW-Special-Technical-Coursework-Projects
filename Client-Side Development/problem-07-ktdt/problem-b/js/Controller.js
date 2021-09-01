'use strict';

import {default as readline} from "readline-sync";
import * as model from "./Model.js";
import {printTweets} from "./View.js";

export function runSearch() {
  console.log("Here are some tweets by @UW_iSchool");
  console.log(model.getRecentTweets());
  let term = readline.question("Search tweets, or EXIT to quit: ");
  if (term === "EXIT") {
    return;
  }
  printTweets(model.searchTweets(term));
}