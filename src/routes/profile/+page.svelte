<script lang="ts">
  import { enhance } from "$app/forms"
  import type { SesInfo } from "../../ambient"

  export let data: SesInfo
  const user = data.session.user
</script>

<h1>Profile</h1>
<p>User id: {user.userId}</p>
<p>GitHub username: {user.username}</p>
<form method="post" action="?/logout" use:enhance>
  <input type="submit" value="Sign out" class="hover:cursor-pointer" />
</form>
