<script>
    import Nav from "../navbar.svelte"
    import { Heading, P, A } from 'flowbite-svelte';
    import { Spinner } from 'flowbite-svelte';
    import Footer from "../footer.svelte"

</script>

<Nav />
<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl mb-50">Gilbert Minecraft Server Overworld Map</Heading>
<div class="text-center"></div>
<iframe src="https://bluewolfj124.github.io/" width="100%" height="1000px" frameborder="0">
    <!-- Fallback content for browsers that do not support iframes -->
    Your browser does not support iframes.
  </iframe>
<br>
<Footer />