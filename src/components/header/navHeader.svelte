<script lang="ts">
  import { onMount } from "svelte";
  import { navOpen } from "../../stores.ts";
  import Hamburger from "./hamburger.svelte";
  import ContactInfoItem from "./contactInfoItem.svelte";
  import Clock from "@images/icons/Clock Icon.svelte";
  import Phone from "@images/icons/Phone Line icon.svelte";
  import Email from "@images/icons/emailIcon.svelte";
  let liElements: NodeListOf<HTMLLIElement>;

  onMount(() => {
    liElements = document.querySelectorAll(".nav-item");
    liElements.forEach((liElem) => [
      liElem.addEventListener("click", () => {
        navOpen.set(false);
      }),
    ]);
  });
</script>

<header class={"header-container-fixed"}>
  <div class="header-inner-container">
    <div class="logo-container">
      <slot name="logo">Logo</slot>
    </div>
    <div class="header-content-container">
      <ul class="header-top-info-container">
        <ContactInfoItem>
          <Clock slot="icon" />
          <span slot="link">Open: Mon - Fri 8am - 5pm </span>
        </ContactInfoItem>
        <ContactInfoItem>
          <Phone slot="icon" />
          <a slot="link" href="tel:+1234567890">(123) 456-7890 </a>
        </ContactInfoItem>
        <ContactInfoItem>
          <Email slot="icon" />
          <a slot="link" href="mailto:noemail@gmail.com">noemail@gmail.com </a>
        </ContactInfoItem>
      </ul>
      <hr class="line-h" />
      <nav class={`nav-container ${$navOpen ? "open" : ""}`}>
        <ul class="nav-wrapper">
          <li class="nav-item">
            <a href="#">Home</a>
          </li>
          <li class="nav-item">
            <a href="#">Services</a>
            <!-- down arrow maybe if there are more than one service-->
          </li>
          <li class="nav-item">
            <a href="#">Testimonials</a>
          </li>
          <li class="nav-item">
            <a href="#">About</a>
          </li>
        </ul>
        <div class="nav-cta-container">
          <a href="#" class="btn-accent">
            <span> Get a Quote </span>
          </a>
        </div>
        <!-- cta container -->
      </nav>
    </div>
    <Hamburger />
  </div>
</header>

<style lang="scss">
  @use "src/styles/index" as *;
  .nav-item:hover {
    color: $accent;
  }
</style>
