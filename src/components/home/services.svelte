<script lang="ts">
</script>

<section class="services-section">
  <div class="section-heading">
    <span class="section-heading-flair">Services</span>
    <h2 class="section-heading-heading">
      Building, Repairing, Maintaining: Your Complete Contractor Solution
    </h2>
  </div>
  <p class="section-text">
    With a focus on quality, integrity, and dependable service, we offer a
    comprehensive range of services tailored to meet your unique needs.
  </p>

  <div>
    <slot name="cards">cards</slot>
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
</style>
