import fs from 'fs/promises'
import { getFormattedDateTime } from './DateTime'

export async function logger(data: any) {
  const output = JSON.stringify(data, null, 2)

  console.log(output)
  await fs.writeFile(`output-${getFormattedDateTime()}.json`, output)
  console.log('logged at: ', getFormattedDateTime())
}
