import {readFile} from "fs"
import {watch} from "chokidar"
import knex from "knex"

const write = (database) => (path) => {
  return readFile(path, (error, data) => {
    if (error) {
      return console.error(error)
    }

    console.log(`Change detected to ${path}`)

    return database.raw(data)
      .then(() => {
        console.log(`Upserted ${path}`)
      })
      .catch((error2) => {
        console.error(error2)
      })
  })
}

export default function sqlwatcher ({pattern, adapter}) {
  const connection = process.env.DATABASE_URL
  const configuration = {
    adapter,
    connection,
    pool: {
      min: 0,
      max: 10
    }
  }
  const client = knex(configuration)

  console.log({configuration})

  console.log(`Watching pattern ${pattern}`)

  return watch(pattern)
    .on("changed", write(client))
    .on("add", write(client))
}
