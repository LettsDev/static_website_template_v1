<script lang="ts">
  import {
    addShine,
    removeShine,
    addTilt,
    removeTilt,
  } from "../../scripts/juiceAnimations";
  import LinkButton from "@components/linkButton.svelte";
  import { onMount, onDestroy } from "svelte";
  let HTMLHeroImage: HTMLElement;

  // onMount(() => {
  //   // addShine(HTMLHeroImage);
  //   addTilt(HTMLHeroImage);
  // });

  // onDestroy(() => {
  //   // removeShine(HTMLHeroImage);
  //   removeTilt(HTMLHeroImage);
  // });
</script>

<section class="hero-section">
  <div class="hero-image" bind:this={HTMLHeroImage}>
    <slot name="heroImage">image</slot>
  </div>
  <div class="hero-content">
    <h1>
      <span class="section-heading-hero">From Build to Repair <br /></span>
      <span class="section-heading">Your Contractor for Every Project</span>
    </h1>
    <p class="hero-text">
      We offer personalized service tailored to your needs, all while exceeding
      expectations with every project.
    </p>

    <a href="/contact" class="btn --large cta">
      <div class="btn-content-wrapper">
        <span>Free Quote</span>
      </div>
    </a>
    <!-- <LinkButton href="/contact" label="test" type="primary" /> -->
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
</style>
