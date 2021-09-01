'use strict';

import {default as allTweets} from "./uw_ischool_tweets.js"

let tweets = []
allTweets.map(key => {
  let item = {text: key["text"], timestamp: Date.parse(key["created_at"])};
  tweets.push(item);
});

export function getRecentTweets() {
  tweets.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  return tweets.slice(0, 5);
}

export function searchTweets(string) {
  let newTweets = []
  tweets.filter((tweet) => {
    if (tweet.text.toLowerCase().includes(string.toLowerCase())) {
      newTweets.push(tweet);
    }
  });
  return newTweets;
}