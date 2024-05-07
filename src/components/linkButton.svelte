<script lang="ts">
  export let label: string;
  export let type: "accent" | "secondary";
  export let href: string;
  export let long = false;
</script>

<a {href} class={`btn-${type} ${long ? "long" : ""} `}>
  <div class="btn-content-wrapper">
    <span>{label}</span>
  </div>
</a>

<style lang="scss">
  @use "src/styles/index" as *;
  a {
    position: relative;
  }

  .btn-accent {
    @include btn-accent;
  }
  .btn-secondary {
    @include btn-secondary;
  }
</style>
