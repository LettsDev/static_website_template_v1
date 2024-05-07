<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<li class="info-card-container">
  <div class="icon-wrapper">
    <slot>Icon</slot>
  </div>
  <p class="title">{title}</p>
  <p class="text">{text}</p>
</li>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
  .info-card-container {
    @include flex(c, center, center);
    width: 320px;
    .icon-wrapper {
      @include flex(c, center, center);
      @include circle;
      background-color: $accent;
      color: $accent-text;
      width: 180px;
      height: 180px;
      padding: 40px;
    }
    .title {
      @include title-flair;
      padding-top: 32px;
    }
    .text {
      @include standout-text;
      text-align: center;
    }
  }
</style>
