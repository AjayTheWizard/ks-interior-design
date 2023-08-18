<script lang="ts">
  export let name: string = "Customer 1";
  export let review: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum veritatis quas, odit ipsam quis exercitationem labore, architecto magni delectus at quo asperiores sunt ex, aspernatur iure omnis. Fugiat quas magnam, nam consequatur fugit consectetur!`;
</script>

<div class="flex flex-col w-[80vw] md:w-[40vw] xl:max-w-sm mx-4 h-fit my-6 shadow-lg">
  <div
    class="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gold-200 text-gold-700"
  >
    <p class="relative px-6 py-1 text-lg italic text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        class="w-8 h-8 text-black"
      >
        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
        <path
          d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
        />
      </svg>{review}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        class="absolute right-0 w-8 h-8 text-black"
      >
        <path
          d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
        />
        <path
          d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
        />
      </svg>
    </p>
  </div>
  <div
    class="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gold-400 text-zinc-800 italic font-thin"
  >
    <p class="text-xl font-semibold leadi">{name}</p>
  </div>
</div>
