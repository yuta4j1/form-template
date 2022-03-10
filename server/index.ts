import Fastify from "fastify"
import cors from "fastify-cors"
import util from "util"
import fs from "fs"
import path from "path"
const { pipeline } = require("stream")
const pump = util.promisify(pipeline)
import cookie, { FastifyCookieOptions } from "fastify-cookie"
import bearerAuthPlugin, { FastifyBearerAuthOptions } from "fastify-bearer-auth"
import fastifyStatic from "fastify-static"
import { initializeApp } from "firebase-admin/app"
import admin from "firebase-admin"
import { getAuth } from "firebase-admin/auth"
// import sakJson from "./serviceAccountKey.json"
import pointOfViewPlugin from "point-of-view"
import ejs from "ejs"
import { SecretManagerServiceClient } from "@google-cloud/secret-manager"

// const app = initializeApp({
//   credential: admin.credential.cert(sakJson),
// })

const fastify = Fastify({
  logger: true,
})

fastify.register(cors)
fastify.register(require("fastify-multipart"))
fastify.register(pointOfViewPlugin, {
  engine: {
    ejs: ejs,
  },
})
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "assets"),
  prefix: "/assets/", // optional: default '/'
})
// fastify.register(bearerAuthPlugin, {
//   auth: (key, req) => {},
// } as FastifyBearerAuthOptions)
fastify.register(cookie, {
  secret: "__sessionid", // for cookies signature
  parseOptions: {}, // options for parsing cookies
} as FastifyCookieOptions)

const client = new SecretManagerServiceClient()

fastify.get("/auth", async (request, reply) => {
  const bearerToken = request.headers.authorization
  const idToken = bearerToken.split("Bearer ")[1]
  console.log(idToken)
  // Set session expiration to 24Hr.
  const expiresIn = 60 * 60 * 24 * 1000
  try {
    const _ = await getAuth().verifyIdToken(idToken)
    const sessionCookie = await getAuth().createSessionCookie(idToken, {
      expiresIn,
    })
    return reply
      .setCookie("__sessionid", sessionCookie, {
        maxAge: expiresIn,
        httpOnly: true,
      })
      .send({ success: true })
  } catch (err) {
    reply.status(401).send({ success: false })
  }
})

fastify.get("*", async (request, reply) => {
  console.log(process.env.FUGA)
  console.log(process.env.HOGE)
  try {
    const [accessRes] = await client.accessSecretVersion({
      name: "projects/1081511942305/secrets/test-secret/versions/latest",
    })
    console.log("accessRes", JSON.parse(accessRes.payload.data.toString()))
  } catch (err) {
    console.log("ERROR!!", err)
  }

  const cs = request.cookies
  if (cs && cs.__sessionid) {
    try {
      const res = await getAuth().verifySessionCookie(cs.__sessionid)
      if (res) {
        return reply.sendFile("index.html")
      }
    } catch (err) {
      console.error(err)
      return reply.view("assets/login.ejs", { fuga: process.env.GOGO })
    }
  } else {
    return reply.view("assets/login.ejs", { fuga: process.env.GOGO })
  }
  return reply.sendFile("index.html")
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
