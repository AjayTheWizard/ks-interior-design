<script lang="ts">
  export let title: string = "";
  export let position: "start" | "end" = "end";
  export let description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis maxime
      ea, dignissimos reprehenderit voluptatum voluptas aspernatur aut.`;
</script>

<div
  class="flex flex-col-reverse sm:mt-0 mt-5 gap-5 sm:gap-3 sm:flex-row w-full items-center justify-between"
>
  {#if position === "end"}
    <div class="md:w-[35vw] sm:w-[40vw] w-[50vw]">
      <h2
        class="md:text-3xl text-xl mb-3 sm:mb-4 text-center sm:text-start sm:text-2xl font-semibold"
      >
        {title}
      </h2>
      <p class="md:text-xl sm:text-sm text-base font-normal">
        {description}
      </p>
    </div>
  {/if}
  {#if position === "start"}
    <div class="md:w-[35vw] sm:w-[40vw] w-[50vw] sm:hidden">
      <h2
        class="md:text-3xl text-xl mb-3 sm:mb-4 text-center sm:text-start sm:text-2xl font-semibold"
      >
        {title}
      </h2>
      <p class="md:text-xl sm:text-sm text-base font-normal">
        {description}
      </p>
    </div>
  {/if}
  <img
    loading="lazy"
    class={`sm:w-[30vw] sm:mb-0 w-[70vw] border-2 border-black ${
      position === "start" ? "sm:-rotate-12" : "sm:rotate-12"
    }`}
    src={`/${title.toLowerCase()}.jpg`}
    alt={title}
  />
  {#if position === "start"}
    <div class="md:w-[35vw] sm:w-[40vw] w-[50vw] hidden sm:block">
      <h2
        class="md:text-3xl text-xl mb-3 sm:mb-4 text-center sm:text-start sm:text-2xl font-semibold"
      >
        {title}
      </h2>
      <p class="md:text-xl sm:text-sm text-base font-normal">
        {description}
      </p>
    </div>
  {/if}
</div>
