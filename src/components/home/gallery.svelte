<script lang="ts">
</script>

<section class="gallery-section">
  <div class="gallery-container">
    <slot>gallery items</slot>
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
