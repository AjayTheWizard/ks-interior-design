<script lang="ts">
  import { clickOutside } from "$lib/hooks/clickOutside"
  let open = false;
</script>
<nav
  class="flex w-full z-50 fixed bg-white items-center border-b border-b-black h-[10vh] sm:h-[12vh] sm:justify-between sm:px-4"
>
  <a href="#home" class="mx-auto text-2xl font-light sm:mx-[unset] cursor-pointer">
    KS Interior Designs
  </a>
  <div class="hidden items-center gap-4 sm:flex">
    <a class="" href="#services">Our Services</a>
    <a class="" href="#testimonial">Testimonials</a>
    <a class="bg-gold px-3 py-2 bg-gold-600 text-black font-semibold" href="#contact">Contact</a>
  </div>
  <div
    use:clickOutside={function () {
      if (open) {
        open = false;
      }
    }}
    class={`sm:hidden absolute w-2/3 z-[200] h-[90vh] top-[10vh] items-center bg-white border-r pt-4 font-semibold  border-r-black flex flex-col gap-4 transition-all duration-500 ${
      open ? "left-0" : "-left-[120vw]"
    }`}
  >
  <a class="" href="#services">Our Services</a>
  <a class="" href="#testimonial">Testimonials</a>
  <a class="bg-gold px-3 py-2 bg-gold-500 text-black font-semibold" href="#contact">Contact</a>
  </div>
  <button
    on:click={function () {
      open = !open;
    }}
    class="absolute sm:hidden left-4"
    id="open-ham"
    aria-label="Menubar"
  >
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
