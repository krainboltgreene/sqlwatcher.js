import {readFile} from "fs"
import {watch} from "chokidar"
import knex from "knex"

const write = (database) => (__, path) => {
  return readFile(path, (error, data) => {
    if (error) {
      return console.error(error)
    }

    return database.raw(data)
  })
}

export default function sqlwatcher ({pattern, adapter}) {
  const connection = process.env.DATABASE_URL
  const configuration = {
    adapter,
    connection
  }
  const client = knex(configuration)

  return watch(pattern)
    .on("changed", write(client))
    .on("add", write(client))
}
