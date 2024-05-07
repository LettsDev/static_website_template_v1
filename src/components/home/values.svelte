<script lang="ts">
  import SectionHeading from "@components/sectionHeading.svelte";
  import InfoCard from "@components/infoCard.svelte";
  import Protractor from "@images/icons/protractorIcon.svelte";
  import Love from "@images/icons/loveIcon.svelte";
  import Phone from "@images/icons/phoneIcon.svelte";
  import Clock from "@images/icons/clockIcon.svelte";
</script>

<section class="values-section">
  <SectionHeading title="Why Choose Us" flair="Values" justify="center" />
  <p class="values-para">
    We value our customers and take pride in providing exceptional customer
    service. We are committed to ensuring that you are statisfied with our
    services and will do everything we can to exceed your expectations.
  </p>
  <ul class="values-wrapper">
    <InfoCard
      title="Communication"
      text="We believe in transparent and open communication, keeping you informed and involved at every stage of the project."
    >
      <Phone />
    </InfoCard>
    <InfoCard
      title="Reliability"
      text="With a proven track record of reliability and punctuality, we strive to deliver projects on time and within budget, giving you peace of mind throughout the process."
    >
      <Clock />
    </InfoCard>
    <InfoCard
      title="Customer Satisfaction"
      text="Our commitment to customer satisfaction is unparalleled. Don't just take our word for it – read testimonials from our satisfied clients who have experienced our dedication firsthand."
    >
      <Love />
    </InfoCard>
    <InfoCard
      title="Expertise"
      text="Our team brings decades of combined experience and specialized expertise in construction, repair, and maintenance services, ensuring top-notch results for every project."
    >
      <Protractor /></InfoCard
    >
  </ul>
</section>

<style lang="scss">
  @use "src/styles/index" as *;
  // only include unique styling here, and use classes to select generic element styling
</style>
