<script lang="ts">
  import type { SesInfo } from "../ambient"
  import type { PageData } from "./$types"

  export let data: PageData
  const session: SesInfo = (data as any).session
</script>

{#if session.user}
  <a href="/profile">Profile</a>
{:else}
  <a href="/login">Login</a>
{/if}
