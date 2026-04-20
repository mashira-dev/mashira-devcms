import { getPayload } from 'payload'
import config from '@payload-config'
import Navbar from './navbar'

// Server component — fetches navbar global from MongoDB via Payload, then
// passes the data as props down to the interactive client component.
export default async function NavbarServer() {
  let navbarData = null

  try {
    const payload = await getPayload({ config })
    navbarData = await payload.findGlobal({ slug: 'navbar' })
  } catch (err) {
    // If DB is unreachable or global is empty, the client component falls
    // back to its hardcoded defaults — no page crash.
    console.warn('[NavbarServer] Could not fetch navbar global:', err)
  }

  return <Navbar data={navbarData} />
}
