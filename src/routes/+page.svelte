<script>
    import Gilbert1 from "$lib/images/1.jpg"
    import Gilbert2 from "$lib/images/2.jpg"
    import Gilbert3 from "$lib/images/3.jpg"
    import Gilbert4 from "$lib/images/4.jpg"
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;
</script>
<style>
    :global(body) {
		/* applies to <body> */
		margin: 10;
        background-color: #1f1e22;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        width: 2048px; /* Fixed width */
        margin: 0 auto; /* Center horizontally */
	}

    .card {
    display: inline-block; /* <-- Change the display type */
    width: 480x;
    height: 320px;
    background-image: linear-gradient(163deg, #622792 0%, #EA4C89 100%);
    border-radius: 10px;
    transition: all .3s;
    justify-content: center;
    align-items: center;
    padding: 3px;
    }
    .card:hover {
        transform: scale(0.98);
    }
</style>
<h1 class="typewriter">Welcome to my website</h1>
<h1>What is Gilbert?</h1>
<p>Gilbert the Beanie Boo is a cute pink giraffe with purple spots. She is super soft to cuddle! 🐆🌈 Her birthday is August 23rd, loves to eat icecream. 💖✨ Here are some pictures of Gilbert:</p>
<div class="gallery">
    <div class="card">
        <img src={Gilbert1} alt="Gilbert 1" style="border-radius: 10px;">
    </div>
    <div class="card">
        <img src={Gilbert2} alt="Gilbert 2" style="border-radius: 10px;">
    </div>
    <div class="card">
        <img src={Gilbert3} alt="Gilbert 3" style="border-radius: 10px;">
    </div>
    <div class="card">
        <img src={Gilbert4} alt="Gilbert 4" style="border-radius: 10px;">
    </div>
</div>
<div class="text-line">
    <div class="static-text">I like Gilbert because she is... </div>
    <div class="text-container">
        <div class="rolling-text"><h1 class="gradient-text">cute</h1></div>
        <div class="rolling-text"><h1 class="gradient-text">happy</h1></div>
        <div class="rolling-text"><h1 class="gradient-text">cuddly</h1></div>
    </div>
</div>