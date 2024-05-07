<script lang="ts">
  import { navOpen } from "../../stores.ts";
  const onClick = () => {
    navOpen.set(!$navOpen);
    console.log("navOpen: ", $navOpen);
  };
</script>

<div class="ham-container">
  <button
    class={`ham-btn ${$navOpen ? "open" : ""}`}
    on:click={onClick}
    aria-label="toggle navigation"
  >
    <span class="ham-bar"></span>
    <span class="ham-bar"></span>
    <span class="ham-bar"></span>
  </button>
</div>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
