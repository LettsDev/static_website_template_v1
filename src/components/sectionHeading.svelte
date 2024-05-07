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
</style>
