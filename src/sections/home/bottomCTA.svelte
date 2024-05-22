<script lang="ts">
  import SectionHeading from "@components/sectionHeading.svelte";
  import LinkButton from "@components/linkButton.svelte";
</script>

<section class="bottom-section sbs ci">
  <div class="img-wrapper sbs-img">
    <slot>image</slot>
  </div>
  <div class="content-wrapper sbs-content">
    <div class="section-heading">
      <span class="section-heading-flair">Get a Quote</span>
      <h2 class="section-heading-heading">Ready to Start?</h2>
    </div>
    <p class="text section-text">
      Contact us today to schedule a consultation. Our team is eager to discuss
      your ideas and develop a plan tailored to your needs and budget. Let’s
      work together to turn your vision into reality.
    </p>

    <a href="/contact" class="btn --large">
      <div class="btn-content-wrapper">Free Quote</div>
    </a>
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
</style>
