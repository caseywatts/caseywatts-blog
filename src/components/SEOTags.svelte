<script>
  export let title = "";
  export let author = "";
  export let url = "";
  export let description = "";
  export let image = "";
  export let contentType = "";
  export let twitterCreator = "";
</script>

<!-- Regular -->
<title>{title}</title>
<link rel="canonical" href={url} />
<meta name="title" content={title} />
<meta name="author" content={author} />
<meta name="url" content={url} />
<meta name="description" content={description} />
<meta name="image" content={image} />

<!-- OpenGraph -->
<meta property="og:title" content={title} />
<meta property="og:url" content={url} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<!-- <meta name="image" property="og:image:alt" content={imageDescription}> -->
<meta property="og:type" content={contentType} />

<!-- Combo for LinkedIn -->
<meta name="title" property="og:title" content={title} />
<meta name="url" property="og:url" content={url} />
<meta name="description" property="og:description" content={description} />
<meta name="image" property="og:image" content={image} />
<!-- <meta name="image" property="og:image:alt" content={imageDescription}> -->
<!-- <meta name="type" property="og:type" content={contentType} /> -->

<!-- Twitter -->
<meta name="twitter:title" content={title} />
<meta name="twitter:image" content={image} />
<!-- <meta name="twitter:site" content={url}> -->
<meta name="twitter:description" content={description} />
<meta name="twitter:creator" content={twitterCreator} />
