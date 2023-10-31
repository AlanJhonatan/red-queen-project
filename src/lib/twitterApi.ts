import { TwitterApi } from 'twitter-api-v2'
import { Twitter } from '../configs/keys'

export const twitterClient = new TwitterApi({
  appKey: Twitter.consumerKey,
  appSecret: Twitter.consumerSecret,
  accessToken: Twitter.accessToken,
  accessSecret: Twitter.accessTokenSecret,
})