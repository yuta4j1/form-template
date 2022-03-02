import Fastify from "fastify"
import cors from "fastify-cors"
import util from "util"
import fs from "fs"
import path from 'path'
const { pipeline } = require("stream")
const pump = util.promisify(pipeline)

const fastify = Fastify({
  logger: true,
})

fastify.register(cors)
fastify.register(require("fastify-multipart"))
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'assets'),
  // prefix: '/' // optional: default '/'
})

fastify.get('*', async (request, reply) => {
  return reply.sendFile('index.html')
})

fastify.post("/file_upload", async function (req, reply) {
  // process a single file
  // also, consider that if you allow to upload multiple files
  // you must consume all files otherwise the promise will never fulfill
//   console.log("req", req)
  const data = await req.file()
  console.log("file", data)

  data.file // stream
  data.fields // other parsed parts
  data.fieldname
  data.filename
  data.encoding
  data.mimetype

  // to accumulate the file in memory! Be careful!
  //
  // await data.toBuffer() // Buffer
  //
  // or

  await pump(data.file, fs.createWriteStream(data.filename))

  console.log(data.file)

  // be careful of permission issues on disk and not overwrite
  // sensitive files that could cause security risks

  // also, consider that if the file stream is not consumed, the promise will never fulfill

  reply.send()
})

const PORT = process.env.PORT || 8080

fastify.listen(PORT, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
