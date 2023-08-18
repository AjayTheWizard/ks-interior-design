<script lang="ts">
  import TestimonialCard from "./TestimonialCard.svelte";
  const testimonials: { name: string; review: string }[] = [
    {
      name: "Mani K",
      review:
        "The work done by KS interior designs were neat and excellent and we are satisfied very much and the way they patiently listen to their customers requirements and adapting to the requirements is excellent and work done was worth it and they plan their work in a efficient ways and adapt techniques to avoid material wastage and good planning and good execution naturally they give a good outcome",
    },

    {
      name: "Suresh E",
      review:
        "Meticulous work by KS interiors, I would strongly recommend them to my friend. Work was done very faster than I anticipated. Since the time I spoke to them on the phone about the renovation of my Home. They showed at most attention and care. They kept me informed about the progress on work, and at last when they completed the renovation it was way better that what I expected. I am pleased with their service. The amount that I paid to them was only 1/3 than what I inquired with other company who provide similar kind of service. I wish KS Interiors design best of luck for their future endeavor.",
    },
    {
      name: "Zinder M",
      review:
        "Nice job bro. Made my restaurant colourful. First I don't trust you then u made me to trust by your way of work. 4star only for your work.. It can be upgraded later based on the durability. Fantastic champ. After a year, I am adding an additional star for the warranty you gave and for the durability it, withstands.",
    },
  ];
</script>
<div class="w-full py-6 md:py-10 scroll-mt-[10vh]" id="testimonial">
  <h1 class="text-center sm:text-5xl sm:mb-12 text-2xl">Our Customers</h1>
  <div class="flex justify-around flex-wrap">
    {#each testimonials as testimonial}
      <TestimonialCard {...testimonial} />
    {/each}
  </div>
</div>
