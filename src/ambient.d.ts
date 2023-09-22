import type { User } from "lucia"

type SesInfo = {
  session: {
    isLoggedin: boolean
    user: User
  }
}
