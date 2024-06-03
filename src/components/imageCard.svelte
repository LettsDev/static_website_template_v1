<script lang="ts">
  export let title: string;
</script>

<li class="card-container">
  <div class="image-wrapper">
    <slot name="image">image</slot>
  </div>
  <span class="title">{title}</span>
</li>

<style lang="scss">
  @use "src/styles/index" as *;
  $transition: 0.7s;

  .card-container {
    @include rounded;
    position: relative;
    max-width: 345px;
    overflow: hidden;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transition:
      box-shadow $transition ease,
      transform $transition ease;
    .image-wrapper {
      filter: brightness(0.5);
      transition: transform $transition ease;
      overflow: hidden;
    }

    &:hover {
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      transform: translateY(-2px);
      .image-wrapper {
        transform: scale(1.1);
        filter: brightness(0.6);
      }
      .title {
        transform: scale(1.1) translateY(10px);
      }
    }

    .title {
      @include bolded;
      font-size: 32px;
      color: $accent-text;
      position: absolute;
      bottom: 23px;
      left: 16px;
      transition: transform $transition ease;
      cursor: default;
    }
  }
</style>
