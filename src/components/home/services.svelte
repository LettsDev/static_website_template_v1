<script lang="ts">
  import SectionHeading from "@components/sectionHeading.svelte";
  import LinkButton from "@components/linkButton.svelte";
</script>

<section class="services-section">
  <div class="text-container">
    <SectionHeading
      title="Building, Repairing, Maintaining: Your Complete Contractor Solution"
      flair="Services"
      justify="left"
    />
    <p class="section-text">
      With a focus on quality, integrity, and dependable service, we offer a
      comprehensive range of services tailored to meet your unique needs.
    </p>
  </div>
  <div>
    <slot name="cards">cards</slot>
  </div>
  <div class="cta-container">
    <LinkButton href="#" type="accent" label="Get a Quote" />
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
