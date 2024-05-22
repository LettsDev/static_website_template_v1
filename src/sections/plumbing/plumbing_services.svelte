<script lang="ts">
</script>

<div class="plumbing-services-container">
  <div class="section-heading --centered">
    <span class="section-heading-flair">Plumbing Services</span>
    <h2 class="section-heading-heading">Our Comprehensive Plumbing Services</h2>
  </div>
  <slot>services go here!</slot>
</div>

<style lang="scss">
  @use "src/styles/index" as *;
  .plumbing-services-container {
    background-color: $background-colour-secondary;
    padding: 2rem 0;
    margin-top: 1rem;
    .section-heading {
      margin-bottom: 1.5rem;
    }
  }
</style>
