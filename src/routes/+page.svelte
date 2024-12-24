<script>
    import Nav from "./navbar.svelte"
    import Box from "./top.svelte"
    import Footer from "./footer.svelte"
    import { Heading, P, A } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    let imgClass = "inline-block flex-none w-[480px] h-[324px] bg-gradient-to-tr from-primary-500 to-secondary-800 rounded-lg transition-all duration-200 justify-center items-center p-1 hover:scale-95";
    let container;
    function syncScroll() {
      if (typeof window !== 'undefined') {
        container.scrollLeft = window.scrollY;
      }
    }
    import { onMount, onDestroy } from 'svelte';
    onMount(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', syncScroll);
      }
    });
    onDestroy(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', syncScroll);
      }
    });
  
    let count = $state(0);
    onMount(async () => {
      const response = await fetch('https://counter.bluewolfj124.workers.dev/read'); // Replace with your API endpoint
      if (!response.ok) {
        console.log('Error fetching counter: ${response.status}');
      }
      const data = await response.json();
      count = data.count;
    });
    const fetchData = async () => {
    try {
      const response = await fetch('https://counter.bluewolfj124.workers.dev/increment'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      count++;
      console.log('Request successful');
    } catch (err) {
      console.error('Failed to fetch:', err.message); // Log any errors to the console
    }
  };
</script>
<Nav/>
<div class="bg-[url('/static/gradient.png')]">
  <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Welcome to my Website</Heading>
<Box />   
<h2 class="heading-primary"> What is Gilbert?</h2>
<p class="text-lightParagraph dark:text-paragraph">Gilbert the Beanie Boo is a cute pink giraffe with purple spots. She is super soft to cuddle! 🐆🌈 Her birthday is August 23rd, loves to eat icecream. 💖✨ Here are some pictures of Gilbert:</p>
<div bind:this={container} class="flex overflow-x-auto max-w-full gap-5 scroll-snap-none no-scrollbar" >
    <div class={imgClass}>
        <enhanced:img src="$lib/images/1.jpg" alt="Gilbert 1" class="rounded-lg">
    </div>
    <div class={imgClass}>
        <enhanced:img src="$lib/images/2.jpg" alt="Gilbert 2" class="rounded-lg">
    </div>
    <div class={imgClass}>
        <enhanced:img src="$lib/images/3.jpg" alt="Gilbert 3" class="rounded-lg">
    </div>
    <div class={imgClass}>
        <enhanced:img src="$lib/images/4.jpg" alt="Gilbert 4" class="rounded-lg">
    </div>
</div>
<h2 class="heading-primary">Join the Minecraft Server!</h2>
<p class="text-lightParagraph dark:text-paragraph my-10">I'm currently working on Gilbert server season 2. I will update the server version to 1.21.4, but there are some mods that aren't updated yet.</p>
<p class="text-lightParagraph dark:text-paragraph inline-block">Click here if you like Gilbert:</p> <Button on:click={fetchData} class='btn bg-pink-500'>I like Gilbert</Button>
<p class="text-lightParagraph dark:text-paragraph">{count} people like gilbert</p>
<h2 class="heading-primary"> Where is Gilbert? </h2>
    <P class="text-2xl p-10" color="text-Lightparagraph dark:text-paragraph">Gilbert lives on my bed and she is very cute. Sometimes she visits my sisters bed to sleep sometimes. </P>
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-bold  md:text-5xl lg:text-6xl">Contact</Heading>
<ul>
    <li class="text-4xl text-Lightparagraph dark:text-paragraph"><svg width="64px" height="64px" class='inline-block' viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fill-rule="nonzero"> </path> </g> </g></svg> boowoof</li>
    <li class="text-4xl text-Lightparagraph dark:text-paragraph"><svg width="64px" height="64px" viewBox="0 0 20 20" class='inline-block' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg> jamie@gilbertweb.site</li>
    <li class="text-4xl text-Lightparagraph dark:text-paragraph"> <svg width="64px" height="64px" class="inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round"></rect> </g></svg> BluewolfJ124</li>
</ul>
</div>
<br>
<br>
<Footer/>