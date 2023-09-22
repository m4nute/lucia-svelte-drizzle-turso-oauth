<script lang="ts">
  import type { SesInfo } from "../ambient"

  export let data: SesInfo
</script>

{#if data.session.user}
  <a href="/profile">Profile</a>
{:else}
  <a href="/login">Login</a>
{/if}
