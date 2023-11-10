import { ReplyTweet } from "./reply-tweet"

;
(async () => {
  await ReplyTweet({
    text: "An sample retweet using oauth1",
    tweetId: "1722730986121605151",
  })
})()
