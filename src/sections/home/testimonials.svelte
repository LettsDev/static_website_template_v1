<script lang="ts">
  import TestimonialCard from "@components/testimonialCard.svelte";
</script>

<section class="testimonials-section" id="testimonials">
  <slot class="testimonials-background">background image</slot>

  <div class="section-heading --centered">
    <span class="section-heading-flair">Testimonials</span>
    <h2 class="section-heading-heading">Some Feedback From Our Clients</h2>
  </div>

  <div class="testimonials-wrapper">
    <TestimonialCard
      author="Tina R"
      location="Vancouver, BC"
      text="Working with John was a fantastic experience from start to finish. Their team was professional, knowledgeable, and always went above and beyond to ensure that our project was a success. We couldn't be happier with the results!"
    />
    <TestimonialCard
      author="James M"
      location="Nanaimo, BC"
      text="From the initial consultation to the final walk-through, John exceeded our expectations every step of the way. Their communication was excellent, and they were always responsive to our needs and concerns. We couldn't be happier with the results!"
    />
    <TestimonialCard
      author="Sandy C"
      location="Comox, BC"
      text="I can't say enough good things about John. They were professional, reliable, and a pleasure to work with from start to finish. Our project was completed on schedule and the quality of their workmanship is exceptional. I would not hesitate to recommend them to anyone."
    />
    <TestimonialCard
      author="Sean B"
      location="Parksville, BC"
      text="Choosing West Coast Contractors was one of the best decisions we made for our home renovation project. Their team was incredibly skilled and dedicated, and they completed the job on time and within budget. We are thrilled with the outcome!"
    />
  </div>
  <!-- <div class="btn-wrapper">
    <a href="/#" class="btn --large --secondary">
      <div class="btn-content-wrapper">
        <span>More Reviews</span>
      </div>
    </a>
  </div> -->
</section>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
