import 'dotenv/config'

export const TwitterKeys = {
  apiKey: process.env['API_KEY'] as string,
  apiSecret: process.env['API_KEY_SECRET'] as string,
  acessToken: process.env['ACCESS_TOKEN'] as string,
  accessTokenSecret: process.env['ACESS_TOKEN_SECRET'] as string,
}

export const RapidAPIKeys = {
  RAPID_BASE_URL: process.env['RAPID_BASE_URL'] as string,
  RAPID_API_KEY: process.env['RAPID_API_KEY'] as string,
}