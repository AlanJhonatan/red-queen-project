import { logger } from './utils/Logger';
import { api } from './lib/axios';
import { TwitterKeys } from './configs/keys';

;
(async () => {
  let bearerToken = null

  const credentials = Buffer
    .from(`${TwitterKeys.clientId}:${TwitterKeys.clientSecret}`)
    .toString('base64')

  try {
    const bearerResponse = await api.post(
      '/oauth2/token',
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }
    )

    bearerToken = bearerResponse.data.access_token
    await logger({ data: bearerResponse.data, tag: '[BEARER|SUCCESS]'})
  } catch (error) {
    await logger({ data: error, tag: '[BEARER|ERROR]'})
    return
  }

  try {
    const tweet = await api.post('/2/tweets', {
      status: 'Sending an request trough raw axios & OAuth2'
    }, {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    })

    await logger({ data: tweet.data, tag: '[TWEET|SUCCESS]'})
  } catch (error) {
    await logger({ data: error, tag: '[TWEET|ERROR]'})
    return
  }
})()
