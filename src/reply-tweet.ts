import { twitterClient } from "./lib/twitter-api";
import { logger } from "./utils/Logger";

interface ReplyTweetData {
  tweetId: string,
  text: string,
}

export async function ReplyTweet({ tweetId, text }: ReplyTweetData): Promise<void> {
  try {
    const response = await twitterClient.v2.tweet(text, {
      reply: {
        in_reply_to_tweet_id: tweetId
      }
    })

    await logger({ data: response.data, tag: '[SUCCESS]'})
  } catch(e: any) {
    await logger({ data: e, tag: '[ERROR]'})
  }
}