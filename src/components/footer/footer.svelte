<script lang="ts">
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

    <div class="phone-wrapper">
      <span class="phone-title">Phone</span>
      <a href="Tel:+12501111111">(123) 457-7890</a>
    </div>
    <div class="email-wrapper">
      <span class="email-title">Email</span>
      <a href="mailto:test@gmail.com">test@gmail.com</a>
    </div>
  </div>
</footer>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
