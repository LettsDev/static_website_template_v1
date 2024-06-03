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
  @use "src/styles/04-components/info-card" as *;
</style>
