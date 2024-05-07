<script lang="ts">
  import SectionHeading from "@components/sectionHeading.svelte";
  import LinkButton from "@components/linkButton.svelte";
</script>

<section class="about-section">
  <div class="about-image-container">
    <slot name="ownerImg">owner's image</slot>
  </div>
  <div class="about-content">
    <SectionHeading
      title="Quality Craftmanship for Your Construction Needs"
      flair="About"
      justify="left"
    />
    <p class="about-para">
      Hello, my name is John Smith and I am the proud owner of West Coast
      Contractors. We're your trusted partners in construction, repairs, and
      maintenance for residential and commercial properties. <br />With a focus
      on quality craftsmanship and personalized service, we bring expertise and
      innovation to every project. Whether you're planning a new home build,
      office renovation, or need repairs, West Coast Contractors delivers
      superior results tailored to your needs. <br />Experience excellence and
      efficiency with our team – your go-to choice for construction solutions
      that enhance property value and functionality.
    </p>
    <div class="btn-wrapper">
      <LinkButton label="More About Us" href="#" type="accent" long />
    </div>
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
