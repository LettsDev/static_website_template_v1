<script lang="ts">
  import SectionHeading from "@components/sectionHeading.svelte";
  import LinkButton from "@components/linkButton.svelte";
</script>

<section class="bottom-section">
  <div class="img-wrapper">
    <slot>image</slot>
  </div>
  <div class="content-wrapper">
    <div>
      <SectionHeading
        title="Ready to Start?"
        flair="Get a Quote"
        justify="left"
      />
      <p class="text">
        Contact us today to schedule a consultation. Our team is eager to
        discuss your ideas and develop a plan tailored to your needs and budget.
        Let’s work together to turn your vision into reality.
      </p>
    </div>
    <LinkButton href="#" type="accent" label="Free Quote" />
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
</style>
