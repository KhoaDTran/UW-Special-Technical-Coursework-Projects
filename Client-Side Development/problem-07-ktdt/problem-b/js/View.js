'use strict';

export function printTweets(tweet) {
  if (tweet === undefined || tweet.length == 0) {
    console.log("No tweets found");
  } else {
    tweet.forEach(prettyPrint);
  }
}

function prettyPrint(tweet) {
  let date = new Date(tweet.timestamp);
  console.log("- \"" + tweet.text + "\" (" + date.toLocaleString("en-US") + ")");
}
