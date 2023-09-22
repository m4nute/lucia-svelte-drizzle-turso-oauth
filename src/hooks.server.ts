import { auth } from "$lib/server/lucia"
import { redirect, type Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event)
  const session = await event.locals.auth.validate()

  if (!(event.url.pathname.startsWith("/login") || event.url.pathname.startsWith("/logout"))) {
    if (!session) throw redirect(303, "/login")
  } else {
    if (session) throw redirect(303, "/profile")
  }

  return await resolve(event)
}
