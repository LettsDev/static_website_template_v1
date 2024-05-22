<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<li class="info-card-container">
  <div class="icon-wrapper">
    <slot>Icon</slot>
  </div>
  <p class="title">{title}</p>
  <p class="text section-text">{text}</p>
</li>

<style lang="scss">
  @use "src/styles/index" as *;
  .info-card-container {
    @include flex(c, center, center);
    width: 320px;
    margin: 1rem 1rem;
    .icon-wrapper {
      @include flex(c, center, center);
      @include circle;
      background-color: $accent-color;
      color: $accent-text;
      width: 90px;
      height: 90px;
      padding: 12px;
    }
    .title {
      padding-top: 32px;
      @include accented-heading;
    }
    .text {
      text-align: center;
    }
  }
</style>
