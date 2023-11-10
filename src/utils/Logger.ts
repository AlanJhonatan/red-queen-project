import fs from 'fs/promises'
import { getFormattedDateTime } from './DateTime'

interface LoggerParams {
  data: any,
  tag?: string
}

export async function logger(params: LoggerParams) {
  const output = JSON.stringify(params.data, null, 2)

  console.log(params.tag || '', output)
  await fs.writeFile(`logs/${params.tag}-output-${getFormattedDateTime()}.json`, output)
  console.log('[INFO] logged at: ', getFormattedDateTime())
}
