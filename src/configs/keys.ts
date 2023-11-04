import 'dotenv/config'

export const TwitterKeys = {
  consumerKey: process.env['CONSUMER_KEY'] as string,
  consumerSecret: process.env['CONSUMER_SECRET'] as string,
  accessToken: process.env['ACCESS_TOKEN'] as string,
  accessTokenSecret: process.env['ACCESS_TOKEN_SECRET'] as string,
  bearerToken: process.env['BEARER_TOKEN'] as string,
  clientId: process.env['CLIENT_ID'] as string,
  clientSecret: process.env['CLIENT_SECRET'] as string,
}