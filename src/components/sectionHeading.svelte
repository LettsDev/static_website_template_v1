<script lang="ts">
  export let title: string;
  export let flair: string;
  export let justify: "left" | "center";
</script>

<div class={`section-heading-wrapper-${justify}`}>
  <p class="title-flair">{flair}</p>
  <h2 class="section-heading">{title}</h2>
</div>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
  .title-flair {
    @include bolded;
    font-size: $title-flair-small;
    color: $primary-color;
    @include respond-to("large") {
      font-size: $title-flair-large;
    }
  }

  .section-heading {
    padding-top: 8px;
  }
  .section-heading-wrapper-left {
    text-align: left;
  }
  .section-heading-wrapper-center {
    text-align: center;
  }
</style>
