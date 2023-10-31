import { api } from './lib/axios'
import 'dotenv/config'
import fs from 'fs/promises'
import { TwitterApi } from 'twitter-api-v2'

const KEYS = {
  consumerKey: process.env['CONSUMER_KEY'] as string,
  consumerSecret: process.env['CONSUMER_SECRET'] as string,
  accessToken: process.env['ACCESS_TOKEN'] as string,
  accessTokenSecret: process.env['ACCESS_TOKEN_SECRET'] as string,
  bearerToken: process.env['BEARER_TOKEN'] as string,
}

const twitterClient = new TwitterApi()
// const client = twitterClient.readOnly

function getFormattedDateTime() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDateTime = formatter.format(now);
  return formattedDateTime.replace(/\/|,|:/g, '-');
}

async function logger(data: any) {
  const output = JSON.stringify(data, null, 2)

  console.log(output)
  await fs.writeFile(`output-${getFormattedDateTime()}.json`, output)
  console.log('logged at: ', getFormattedDateTime())
}

;
(async () => {
  // const user = await client.v1.userFriendList({
  // })

  try {
    const response = await api.post('statuses/update', {
      status: 'An automated post !'
    })
  
    const data = response.data
  
    await logger({ success: true, data })
  } catch (error) {
    await logger({ success: false, error })
  }
})()


