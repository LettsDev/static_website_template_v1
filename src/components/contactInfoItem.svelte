<script lang="ts">
  export let href: string | undefined = undefined;
  export let animation: "vibrate" | "pulsate" | undefined = undefined;
</script>

{#if typeof href == "string"}
  <li>
    <a {href}>
      <div class={`info-container ${animation}`}>
        <div class="icon-container">
          <slot name="icon">Icon</slot>
        </div>
        <slot name="label" class="label">link / information</slot>
      </div>
    </a>
  </li>
{:else}
  <li class={`info-container ${animation}`}>
    <div class="icon-container">
      <slot name="icon">Icon</slot>
    </div>
    <slot name="label" class="label">link / information</slot>
  </li>
{/if}

<style lang="scss">
  @use "src/styles/index" as *;

  $info-icon-width: 40px;
  $info-icon-height: 40px;
  $info-icon-padding: 8px;

  .info-container {
    @include flex(r, center, center);
    @include bolded;
    gap: 1rem;
    &.vibrate:hover {
      .icon-container {
        @include an-vibrate;
      }
    }
    &.pulsate:hover {
      .icon-container {
        @include an-pulsate;
      }
    }
    .icon-container {
      @include circle;
      background-color: $accent-color;
      color: $accent-text;
      width: $info-icon-width;
      height: $info-icon-height;
      padding: $info-icon-padding;
      fill: $accent-text;
      svg {
        stroke: $svg-stroke-light;
        fill: $svg-stroke-light;
      }
    }
  }
</style>
