import { auth } from "$lib/server/lucia"
import { redirect, type Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event)

  if (event.url.pathname.startsWith("/dashboard")) {
    const session = await event.locals.auth.validate()

    if (!session) {
      throw redirect(303, "/")
    }
  }

  return await resolve(event)
}
