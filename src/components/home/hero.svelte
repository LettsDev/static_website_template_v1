<script lang="ts">
</script>

<section class="hero-section sbs ci">
  <div class="sbs-image">
    <slot name="heroImage">image</slot>
  </div>
  <div class="sbs-content">
    <h1>
      <span class="section-heading-hero">From Build to Repair <br /></span>
      <span class="section-heading-heading"
        >Your Contractor for Every Project</span
      >
    </h1>
    <p class="hero-text">
      We offer personalized service tailored to your needs, all while exceeding
      expectations with every project.
    </p>
    <div class="btn-container-2">
      <a href="/contact" class="btn large">
        <div class="btn-content-wrapper">
          <span>Free Quote</span>
        </div>
      </a>
      <a href="/#" class="btn secondary large">
        <div class="btn-content-wrapper">
          <span>Services</span>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- <section class="hero-section">
  <div class="hero-image-container">
    <slot name="heroImage">image</slot>
  </div>
  <div class="hero-content">
    <h1>
      <span class="accented-heading">From Build to Repair</span>
      <span>Your Contractor for Every Project</span>
    </h1>
    <p class="hero-text">
      We offer personalized service tailored to your needs, all while exceeding
      expectations with every project.
    </p>
    <div class="hero-btn-container">
      <a href="/contact" class="btn"> <span>Free Quote</span></a>
      <a href="/#" class="btn secondary"> <span>Services</span></a>
    </div>
  </div>
</section> -->

<style lang="scss">
  @use "src/styles/index" as *;
</style>
