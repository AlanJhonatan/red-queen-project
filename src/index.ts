import { twitterClient } from './lib/twitterApi';
import { logger } from './utils/Logger';

;
(async () => {
  try {
    const { data: createdTweet } = await twitterClient.v2.tweet('Hello World, by node.js')
  
    await logger(createdTweet)
  } catch (err) {
    await logger(err)
  }
})()


