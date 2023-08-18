<script>
  import Card from "$lib/components/section/Card.svelte";
</script>

<div id="services" class="w-full -scroll-mt-[15vh] overflow-hidden">
  <svg
    preserveAspectRatio="none"
    class="w"
    viewBox="0 0 285 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="w-full h-full"
      d="M0 0C23.75 18.1687 47.5 36.3375 71.25 44.416C95 52.494 118.75 50.4817 142.5 39.4809C166.25 28.4796 190 8.48984 213.75 4.93557C237.5 1.38078 261.25 14.262 285 27.1433V95C261.25 95 237.5 95 213.75 95C190 95 166.25 95 142.5 95C118.75 95 95 95 71.25 95C47.5 95 23.75 95 0 95V0Z"
      fill="#FFD700"
    />
    <path
      class="w-full h-full"
      d="M0 0C23.75 18.1687 47.5 36.3375 71.25 44.416C95 52.494 118.75 50.4817 142.5 39.4809C166.25 28.4796 190 8.48984 213.75 4.93557C237.5 1.38078 261.25 14.262 285 27.1433V95C261.25 95 237.5 95 213.75 95C190 95 166.25 95 142.5 95C118.75 95 95 95 71.25 95C47.5 95 23.75 95 0 95V0Z"
      fill="#FFD700"
    />
  </svg>
  <div class="w-full bg-gold-500 sm:pb-[10%] pb-5 text-white">
    <h1 class="sm:text-4xl text-2xl cursor-pointer font-bold text-center mb-6">
      How we do?
    </h1>
    <div class="flex flex-col gap-10 w-[80vw] mx-auto">
      <Card title="Wallpaper" position="end" />
      <Card title="Grass" position="start" />
      <Card title="Modern Kitchen" position="end" />
    </div>
  </div>
</div>
