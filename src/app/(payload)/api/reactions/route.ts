// import { getPayload } from 'payload'
// import config from '@/payload.config'

// export async function POST(req: Request) {
//   const body = await req.json()
//   const payload = await getPayload({ config })

//   const { postId, reaction, fingerprint } = body

//   // Check existing vote
//   const existing = await payload.find({
//     collection: 'blogs-reactions',
//     where: {
//       and: [
//         { post: { equals: postId } },
//         {
//           or: [{ fingerprint: { equals: fingerprint } }],
//         },
//       ],
//     },
//   })

//   if (existing.docs.length > 0) {
//     // Update reaction
//     await payload.update({
//       collection: 'blogs-reactions',
//       id: existing.docs[0].id,
//       data: { reaction },
//     })
//   } else {
//     // Create new reaction
//     await payload.create({
//       collection: 'blogs-reactions',
//       data: {
//         post: postId,
//         reaction,
//         fingerprint,
//       },
//     })
//   }

//   return Response.json({ success: true })
// }
