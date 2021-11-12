import Fastify from "fastify"

const app = Fastify({
  logger: true,
})

// Declare a route
app.get("/", (request, reply) => {
  reply.send({ hello: "world" })
})

// Run the server!
app.listen(3000, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})
