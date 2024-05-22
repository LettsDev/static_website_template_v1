<script lang="ts">
  import ContactInfoItem from "@components/contactInfoItem.svelte";
  import Phone from "@images/icons/Phone Line icon.svelte";
  import Email from "@images/icons/emailIcon.svelte";
</script>

<footer class="footer-container">
  <div class="logo-wrapper">
    <slot>Logo</slot>
  </div>
  <div class="footer-content">
    <div class="footer-nav-container">
      <span class="nav-title">Navigation</span>
      <ul class="nav-wrapper">
        <li class="nav-item">
          <a href="#">Home</a>
        </li>
        <li class="nav-item">
          <a href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a href="#">Testimonials</a>
        </li>
        <li class="nav-item">
          <a href="#">About</a>
        </li>
        <li class="nav-item">
          <a href="#">Services</a>
        </li>
      </ul>
    </div>
    <ul class="contact-list">
      <ContactInfoItem href="tel:+1234567890" animation="vibrate">
        <Phone slot="icon" />
        <span slot="label">(123) 456-7890 </span>
      </ContactInfoItem>

      <ContactInfoItem href="mailto:noemail@gmail.com" animation="pulsate">
        <Email slot="icon" />
        <span slot="label">noemail@gmail.com </span>
      </ContactInfoItem>
    </ul>
  </div>
</footer>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
