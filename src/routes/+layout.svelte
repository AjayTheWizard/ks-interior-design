<script lang="ts">
  import { createDialog, melt } from "@melt-ui/svelte";
  import { writable } from "svelte/store";
  import "./styles.css";
  const {
    states: { open },
  } = createDialog({
    open: writable(true),
  });
</script>

<div>
  <nav
    class="flex w-full items-center border-b border-b-black h-[8vh] sm:justify-between sm:px-4"
  >
    <h1 class="mx-auto text-2xl font-light sm:mx-[unset]">
      KS Interior Designs
    </h1>
    <div class="hidden items-center gap-2 sm:flex">
      <a class="" href="/">Testimonials</a>
      <a class="bg-gold px-3 py-2 bg-gold-500 text-white" href="/">Contact</a>
    </div>
    {#if open}
      <div
        class="sm:hidden absolute w-2/3 h-[92vh] left-0 top-[8vh] items-center bg-gold-200 flex flex-col gap-2"
      >
        <a class="" href="/">Testimonials</a>
        <a class="bg-gold px-3 py-2 bg-gold-500 w-fit text-white" href="/"
          >Contact</a
        >
      </div>
    {/if}
    <button class="absolute sm:hidden left-4" id="open-ham">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </nav>
  <slot />
</div>
