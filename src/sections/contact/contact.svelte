<script lang="ts">
</script>

<section class="contact">
  <div class="sbs ci">
    <div class="sbs-image">
      <slot name="image"><!-- optional fallback --></slot>
    </div>
    <div class="sbs-content">
      <div class="section-heading">
        <span class="section-heading-flair">Contact</span>
        <h2 class="section-heading-heading">Let's Chat</h2>
      </div>
      <p class="txt-standout">
        We're excited to hear from you! Whether you're ready to start your
        construction project or simply have questions about our services, our
        team is here to help.
      </p>
    </div>
  </div>

  <form action="POST" class="form">
    <div class="input-wrapper">
      <div class="text-input rounded bold full">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
      </div>
      <div class="text-input rounded bold full">
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
      </div>
      <div class="text-input rounded bold full">
        <label for="email">Email</label>
        <input type="mail" name="email" id="email" />
      </div>
      <div class="text-input rounded bold full">
        <label for="comment">Questions / Comments</label>
        <textarea name="comment" id="comment" rows="6" />
      </div>
      <div class="submit-wrapper centered">
        <button type="submit" class="btn full">Submit</button>
      </div>
    </div>
  </form>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
</style>
