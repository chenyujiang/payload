import { createLocalReq, getPayload } from 'payload'
import config from '@payload-config'
import { seed } from '../src/endpoints/seed'

const run = async () => {
  const payload = await getPayload({ config })
  const [user] = (
    await payload.find({ collection: 'users', limit: 1 })
  ).docs
  const req = await createLocalReq({ user }, payload)
  await seed({ payload, req })
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
