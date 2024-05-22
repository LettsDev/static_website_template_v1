<script lang="ts">
  import { onMount } from "svelte";
  import { navOpen } from "../../stores.ts";
  import Hamburger from "./hamburger.svelte";
  import ContactInfoItem from "../contactInfoItem.svelte";
  import Clock from "@images/icons/Clock Icon.svelte";
  import Phone from "@images/icons/Phone Line icon.svelte";
  import Email from "@images/icons/emailIcon.svelte";
  let liElements: NodeListOf<HTMLLIElement>;
  let innerWidth: number;
  onMount(() => {
    liElements = document.querySelectorAll(".nav-item");
    liElements.forEach((liElem) => [
      liElem.addEventListener("click", () => {
        navOpen.set(false);
      }),
    ]);
  });
</script>

<svelte:window bind:innerWidth />
<header class={"header-container-fixed"}>
  <div class="header-inner-container">
    <div class="logo-container">
      <slot name="logo">Logo</slot>
    </div>
    <div class="header-content-container">
      <ul class="header-top-info-container">
        <ContactInfoItem>
          <Clock slot="icon" />
          <span slot="label">Open: Mon - Fri 8am - 5pm </span>
        </ContactInfoItem>
        <ContactInfoItem href="tel:+1234567890" animation="vibrate">
          <Phone slot="icon" />
          <span slot="label">(123) 456-7890 </span>
        </ContactInfoItem>
        <ContactInfoItem href="mailto:noemail@gmail.com" animation="pulsate">
          <Email slot="icon" />
          <span slot="label">noemail@gmail.com </span>
        </ContactInfoItem>
      </ul>
      <hr class="line-h" />
      <nav class={`nav-container ${$navOpen ? "open" : ""}`}>
        <ul class="nav-wrapper">
          <li class="nav-item">
            <a href="/">Home</a>
          </li>
          <li class="nav-item">
            <a href="/services/plumbing">Services</a>
          </li>
          <li class="nav-item">
            <a href="/#testimonials">Testimonials</a>
          </li>
          <li class="nav-item">
            <a href="/#about">About</a>
          </li>
        </ul>
        <div class="nav-cta-container">
          <a href="/contact" class="btn">
            <div class="btn-content-wrapper">
              {#if navOpen && innerWidth < 1024}
                <span> Contact </span>
              {:else}
                <span> Get a Quote </span>
              {/if}
            </div>
          </a>
        </div>
      </nav>
    </div>
    <Hamburger />
  </div>
</header>

<style lang="scss">
  @use "src/styles/index" as *;
</style>
