<script lang="ts">
  import LinkButton from "@components/linkButton.svelte";
</script>

<section class="hero-section">
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
      <LinkButton label="Free Quote" type="accent" href="#" />
      <LinkButton label="Services" type="secondary" href="#" />
    </div>
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
