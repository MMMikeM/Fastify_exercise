import Fastify from "fastify"
import sharp from "sharp"

const app = Fastify({
  logger: false,
})

app.get(`/`, (request, reply) => {
  reply.send({ _: `Work already! Be real` })
  console.log(`responded`)
})

app.listen(3000, `0.0.0.0`, (err, address) => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})

// const shrinkFile = async () => {
//   try {
//     await sharp(`./input.jpg`)
//       .resize({
//         width: 400,
//         height: 400,
//         fit: `cover`,
//         position: sharp.strategy.entropy,
//       })
//       .webp({ quality: 70, reductionEffort: 6 })
//       .toFile(`output.webp`)
//   } catch (err) {
//     console.log(err)
//   }
// }

const generateText = async (text: string, height: number, width: number) => {
  const svg = `<svg width="${width}" height="${height}">
  <style>
  .test { fill: white; font-size: 72px; font-family: Inconsolata; font-weight: bold;}
  </style>    
      <text x="50%" y="50%" text-anchor="middle" class="test">${text}</text>
    </svg>`
  const svgBuffer = Buffer.from(svg)
  return await sharp(svgBuffer).toBuffer()
}

const combineFiles = async (text: string, height: number, width: number) => {
  try {
    const inputBuffer = await sharp(`./input.jpg`)
      .resize({
        width,
        height,
        fit: `cover`,
        position: sharp.strategy.entropy,
      })
      .toBuffer()
    const textBuffer = await generateText(text, height, width)
    const outputBuffer = await sharp(inputBuffer)
      .composite([{ input: textBuffer, top: 0, left: 0 }])
      .webp({ quality: 70, reductionEffort: 6 })
      .toBuffer()
    await sharp(outputBuffer).toFile(`./output.webp`)
  } catch (err) {
    console.log(err)
  }
}

combineFiles(`Boobies`, 640, 640)
