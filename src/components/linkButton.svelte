<script lang="ts">
  export let label: string;
  export let type: "primary" | "secondary";
  export let href: string;
</script>

<a {href} class={`btn ${type === "primary" ? "--primary" : "--secondary"}`}>
  <div class="btn-content-wrapper">
    <span class="label">{label}</span>
  </div>
</a>

<style lang="scss">
  @use "src/styles/index" as *;

  .btn {
    @include roundedButton;
    text-transform: capitalize;
    border: 0;
    font-weight: 600;
    cursor: pointer;
    height: 60px;
    padding: 0 32px;
    &:hover:focus {
    }

    &.--primary {
      background-color: $primary-color;
      color: $text-primary-color;
    }

    &.--secondary {
      background-color: $secondary-color;
      color: $text-secondary-color;
    }
  }
  .btn-content-wrapper {
    @include flex(c, center, center);
    width: 100%;
    height: 100%;
  }
</style>
