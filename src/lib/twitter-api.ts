import { TwitterApi } from "twitter-api-v2";
import { TwitterKeys } from "../configs/keys";

export const twitterClient = new TwitterApi({
  appKey: TwitterKeys.apiKey,
  appSecret: TwitterKeys.apiSecret,
  accessToken: TwitterKeys.acessToken,
  accessSecret: TwitterKeys.accessTokenSecret,
})
