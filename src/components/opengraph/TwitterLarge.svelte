<script>
  // template from https://opengraphr.com/open-graph-tailwindcss-snippets
  export let title = "TITLE";
  export let description = "DESCRIPTION";
  export let imageSrc = "https://via.placeholder.com/1084x632.png";
</script>

<div class="block bg-white border border-gray-300 rounded-xl overflow-hidden">
  <div class="aspect-w-12 aspect-h-7 relative">
    <div class="absolute left-0 top-0 w-full h-full flex items-center justify-center">
      <img alt="Detected OG Image" class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={imageSrc} />
    </div>
  </div>
  <div class="p-4 border-t border-gray-300">
    <p class="text-sm line-clamp-1">{title}</p>
    <p class="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
  </div>
</div>
