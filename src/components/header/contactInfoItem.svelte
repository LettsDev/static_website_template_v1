<script lang="ts"></script>

<li class="info-container">
  <div class="icon-container">
    <slot name="icon">Icon</slot>
  </div>
  <slot name="link" class="link">link / information</slot>
</li>

<style lang="scss">
  @use "src/styles/index" as *;
</style>
