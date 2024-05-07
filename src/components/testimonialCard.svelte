<script lang="ts">
  export let text: string;
  export let author: string;
  export let location: string;
</script>

<div class="testimonial-wrapper">
  <span class="text">"{text}"</span>
  <div class="label-wrapper">
    <span class="author">{author}</span>
    <span class="location">{location}</span>
  </div>
</div>

<style lang="scss">
  @use "src/styles/index" as *;
  .testimonial-wrapper {
    @include flex(c, between, center);
    padding: 24px 1rem;
    height: 400px;

    .text {
      @include standout-text;
      text-align: center;
      max-width: 288px;
    }
    .label-wrapper {
      @include flex(c, center, center);
      text-align: center;
      .author {
        @include title-flair;
      }
      .location {
        padding-top: 10px;
      }
    }
  }
</style>
