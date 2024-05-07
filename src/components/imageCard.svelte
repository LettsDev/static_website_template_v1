<script lang="ts">
  export let title: string;
</script>

<li class="card-container">
  <slot name="image">image</slot>
  <span class="title">{title}</span>
</li>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
