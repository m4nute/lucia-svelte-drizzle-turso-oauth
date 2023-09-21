// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace Lucia {
    type Auth = import("$lib/server/lucia").Auth
    type DatabaseUserAttributes = {
      username: string
      email: string | null
      avatar: string
    }
    type DatabaseSessionAttributes = {}
  }

  namespace App {
    interface Locals {
      auth: import("lucia").AuthRequest
      user: import("lucia").User
    }
  }
}

export {}
