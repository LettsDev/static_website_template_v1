<script lang="ts">
  export let title: string;
</script>

<li class="card-container">
  <slot name="image">image</slot>
  <span class="title">{title}</span>
</li>

<style lang="scss">
  @use "src/styles/index" as *;

  @mixin an-kenburns-top {
    @include is-not-touch {
      animation: kenburns-top 5s ease-out both;
    }
  }
  @keyframes kenburns-top {
    0% {
      transform: scale(1) translateY(0);
      transform-origin: 50% 16%;
    }
    100% {
      transform: scale(1.25) translateY(-15px);
      transform-origin: top;
    }
  }

  .card-container {
    position: relative;
    max-width: 345px;
    overflow: hidden;
    img {
      @include rounded;
      filter: brightness(0.5);
    }
    // TODO fix animation on hover
    &:hover img {
      @include an-kenburns-top;
      filter: brightness(0.8);
    }
    .title {
      @include bolded;
      font-size: 32px;
      color: $accent-text;
      position: absolute;
      bottom: 23px;
      left: 16px;
    }
  }
</style>
