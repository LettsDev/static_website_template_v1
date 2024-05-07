<script lang="ts">
  import SectionHeading from "@components/sectionHeading.svelte";
  import TestimonialCard from "@components/testimonialCard.svelte";
  import LinkButton from "@components/linkButton.svelte";
</script>

<section class="testimonials-section">
  <slot class="testimonials-background">background image</slot>
  <SectionHeading
    title="Some Feedback From Our Clients"
    flair="Testimonials"
    justify="center"
  />
  <div class="testimonials-container">
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
  <div class="btn-wrapper">
    <LinkButton label="More Reviews" href="#" type="accent" long />
  </div>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
