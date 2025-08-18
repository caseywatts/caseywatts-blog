<script lang="ts">
  
  interface Props {
    // template from https://opengraphr.com/open-graph-tailwindcss-snippets
    title?: string;
    description?: string;
    url?: string;
    imageSrc?: string;
  }

  let {
    title = "TITLE",
    description = "DESCRIPTION",
    url = "https://www.example.com",
    imageSrc = "https://via.placeholder.com/1084x632.png"
  }: Props = $props();
</script>

<div class="block bg-white border border-gray-300 rounded-xl overflow-hidden">
  <div class="aspect-w-12 aspect-h-7 relative">
    <div class="absolute left-0 top-0 w-full h-full flex items-center justify-center">
      <img alt="Detected OG Image" class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={imageSrc} />
    </div>
  </div>
  <div class="p-4 border-t border-gray-300 bg-gray-200">
    <p class="text-xs uppercase text-gray-600">{url}</p>
    <p class="line-clamp-1 font-bold text-lg">{title}</p>
    <p class="text-base text-gray-500 mt-1 line-clamp-1">{description}</p>
  </div>
</div>
