<script lang="ts">
  import SectionHeading from "@components/sectionHeading.svelte";
</script>

<section class="contact-section">
  <div class="contact-wrapper">
    <SectionHeading title="Let's Talk" flair="Contact" justify="left" />
    <p class="contact-text">
      We're excited to hear from you! Whether you're ready to start your
      construction project or simply have questions about our services, our team
      is here to help.
    </p>
    <form action="POST" class="form">
      <label for="Name" class="text-input half large"
        >Name
        <input type="text" name="Name" id="Name" />
      </label>
    </form>
  </div>
  <div class="img-wrapper">
    <div class="overlay">
      <span>Phone: (132) 456-7890</span>
      <span>Email: test@gmail.com</span>
    </div>
    <slot name="image">image</slot>
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
</style>
