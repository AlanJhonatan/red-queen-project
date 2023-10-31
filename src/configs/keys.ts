import 'dotenv/config'

export const Twitter = {
  consumerKey: process.env['CONSUMER_KEY'] as string,
  consumerSecret: process.env['CONSUMER_SECRET'] as string,
  accessToken: process.env['ACCESS_TOKEN'] as string,
  accessTokenSecret: process.env['ACCESS_TOKEN_SECRET'] as string,
  bearerToken: process.env['BEARER_TOKEN'] as string,
}