import Fastify from "fastify"

const app = Fastify({
  logger: true,
})

app.get("/", (request, reply) => {
  console.log(request)
  reply.send({ _: "Work already! Be real" })
})

app.listen(3000, (err, address) => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})
